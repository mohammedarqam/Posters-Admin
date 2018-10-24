import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users : number = 0;
  sellers : number = 0;
  products : number = 0;



  usersRef = this.db.list("User Data/Users");
  sellersRef = this.db.list("Seller Data/Sellers");
  productsRef = this.db.list("Products");


  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getUsers();
      this.getSellers();
      this.getProducts();
      }
    
    getUsers(){
      this.usersRef.snapshotChanges().subscribe(snap=>{
        this.users = snap.length;
      })
    }
    getSellers(){
      this.sellersRef.snapshotChanges().subscribe(snap=>{
        console.log(snap.length);
        this.sellers = snap.length;
      })
    }
    getProducts(){
      this.productsRef.snapshotChanges().subscribe(snap=>{
        this.products = snap.length;
      })
    }

}
