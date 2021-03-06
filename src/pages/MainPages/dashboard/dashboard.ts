import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { NotiPopPage } from '../../Extra/Notifications/noti-pop/noti-pop';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users : number = 0;
  sellers : number = 0;
  products : number = 0;
  banners : number = 0;


  usersRef = this.db.list("User Data/Users");
  sellersRef = this.db.list("Seller Data/Sellers");
  productsRef = this.db.list("Products");
  bannersref = this.db.list("Promotionals/Banners");


  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  public popoverCtrl : PopoverController,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getUsers();
      this.getSellers();
      this.getProducts();
      this.getBanners();
      }
    
    getUsers(){
      this.usersRef.snapshotChanges().subscribe(snap=>{
        this.users = snap.length;
      })
    }
    getSellers(){
      this.sellersRef.snapshotChanges().subscribe(snap=>{
        this.sellers = snap.length;
      })
    }
    getProducts(){
      this.productsRef.snapshotChanges().subscribe(snap=>{
        this.products = snap.length;
      })
    }
    getBanners(){
      this.bannersref.snapshotChanges().subscribe(snap=>{
        this.banners = snap.length;
      })
    }
    gtNoti(myEvent) {
      let popover = this.popoverCtrl.create(NotiPopPage);
      popover.present({
        ev: myEvent
      });
    }
  
}
