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

  sellers: Array<any> = [];
  sellersLoaded: Array<any> = [];


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
      let tempArray : Array<any> = []; 
      snap.forEach(snp=>{

        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.sellers = tempArray;
      this.sellersLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.sellers = this.sellersLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.sellers = this.sellers.filter((v) => {
      if((v.StoreName) && q) {
        if (v.StoreName.toLowerCase().indexOf(q.toLowerCase()) > -1)
          {
          return true;
        }
        return false;
      }
    });
  }


  gtDetails(s){
    this.navCtrl.push(SellersDetailsPage,{seller : s});
  }

}


