import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ViewBarCodePage } from '../view-bar-code/view-bar-code';




@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  prod = this.navParams.get("product");

  ver: boolean;

  constructor(
  public navCtrl: NavController, 
  public toastCtrl: ToastController,
  public loadingCtrl: LoadingController,
  public navParams: NavParams
  ) {
    switch (this.prod.Status) {
      case "Unverified": this.ver = false;
        break;
      case "Verified": this.ver = true;
        break;
    }

    console.log(this.prod);
  }





  vProduct() {
    let loading = this.loadingCtrl.create({
      content: 'Verifying Product...'
    });
    loading.present();

    firebase.database().ref("Products").child(this.prod.key).child("Status").set("Verified").then(() => {
      this.navCtrl.pop();
      loading.dismiss();
      this.presentToast("Product Verified");

    });
  }

  uProduct() {
    let loading = this.loadingCtrl.create({
      content: 'Unverifying Product...'
    });
    loading.present();

    firebase.database().ref("Products").child(this.prod.key).child("Status").set("Pending").then(() => {
      this.navCtrl.pop();
      loading.dismiss();
      this.presentToast("Product Unverified");

    });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "bottom",
      showCloseButton: false,
    });
    toast.present();
  }

  viewBar(){
    this.navCtrl.push(ViewBarCodePage,{product : this.prod});
  }
}
