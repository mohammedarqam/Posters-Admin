import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SellersDetailsPage } from '../../Sellers/sellers-details/sellers-details';


@IonicPage()
@Component({
  selector: 'page-sellers-view',
  templateUrl: 'sellers-view.html',
})
export class SellersViewPage {

  sellersRef = this.db.list('Seller Data/Sellers', ref=>ref.orderByChild("TimeStamp"));

  pendingSellers : Array<any>=[];  
  verifiedSellers : Array<any>=[];  

  showPending : boolean = true;
  showVerified : boolean = true;

  filterV : string ="all" ;
  // sellers: Array<any> = [];
  // sellersLoaded: Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public popoverCtrl : PopoverController,
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getUsers();
  }



  getUsers(){
    this.sellersRef.snapshotChanges().subscribe(snap=>{
      this.pendingSellers = []; this.verifiedSellers = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;

        switch (temp.Status) {
          case "Pending": this.pendingSellers.push(temp);
            break;
          case "Verified": this.verifiedSellers.push(temp);
            break;

        }

      })
    })

  }

  // initializeItems(): void {
  //   this.sellers = this.sellersLoaded;
  // }
  // getItems(searchbar) {
  //   this.initializeItems();
  //   let q = searchbar;
  //   if (!q) {
  //     return;
  //   }
  //   this.sellers = this.sellers.filter((v) => {
  //     if((v.Name) && q) {
  //       if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  //         {
  //         return true;
  //       }
  //       return false;
  //     }
  //   });
  // }

  filterVendors(){
    switch (this.filterV) {
      case "all": this.showPending = true; this.showVerified = true;
        break;
      case "pending": this.showPending = true; this.showVerified = false;
        break;
      case "verified": this.showPending = false; this.showVerified = true;
        break;
    
      default: this.showPending = true; this.showVerified = true;
        break;
    }
  }
  gtDetails(s){
    this.navCtrl.push(SellersDetailsPage,{seller : s});
  }

}


