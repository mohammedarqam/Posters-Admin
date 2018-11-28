import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sellers-details',
  templateUrl: 'sellers-details.html',
})
export class SellersDetailsPage {

  seller = this.navParams.get("seller");

  ver: boolean;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
    switch (this.seller.Status) {
      case "Unverified": this.ver = false;
        break;
      case "Verified": this.ver = true;
        break;
    }

    console.log(this.seller);
  }


  vSeller() {
    let loading = this.loadingCtrl.create({
      content: 'Verifying Seller...'
    });
    loading.present();

    firebase.database().ref("Seller Data/Sellers").child(this.seller.key).child("Status").set("Verified").then(() => {
      this.navCtrl.pop();
      loading.dismiss();
      this.presentToast("Seller Verified");

    });
  }

  uSeller() {
    let loading = this.loadingCtrl.create({
      content: 'Unverifying Seller...'
    });
    loading.present();

    firebase.database().ref("Seller Data/Sellers").child(this.seller.key).child("Status").set("Unverified").then(() => {
      this.navCtrl.pop();
      loading.dismiss();
      this.presentToast("Seller Unverified");

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

}
