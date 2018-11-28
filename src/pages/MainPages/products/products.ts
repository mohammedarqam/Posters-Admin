import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ProductDetailsPage } from '../../Products/product-details/product-details';
import { NotiPopPage } from '../../Extra/Notifications/noti-pop/noti-pop';


@IonicPage()
@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
  })
export class ProductsPage {

  prods: Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public db: AngularFireDatabase,
  public popoverCtrl : PopoverController,
  public loadingCtrl: LoadingController,
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getProducts();
  }

  getProducts() {
    let loading = this.loadingCtrl.create({
      content: 'Getting Products List...'
    });
    // loading.present();

    this.db.list("Products").snapshotChanges().subscribe(snap => {
      this.prods = [];
      snap.forEach(snip => {
        firebase.database().ref("Products").child(snip.key).once("value", iiSnap => {
          var temp: any = iiSnap.val();
          temp.key = iiSnap.key;
          this.prods.push(temp);
        }).then(() => {
          // loading.dismiss();
        })
      })
    })
  }

  gtPDetails(p){
      this.navCtrl.push(ProductDetailsPage,{product : p});
  }
  gtNoti(myEvent) {
    let popover = this.popoverCtrl.create(NotiPopPage);
    popover.present({
      ev: myEvent
    });
  }

}
