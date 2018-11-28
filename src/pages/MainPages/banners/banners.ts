import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddBannersPage } from '../../Banners/add-banners/add-banners';



@IonicPage()
@Component({
  selector: 'page-banners',
  templateUrl: 'banners.html',
})
export class BannersPage {

  public banners: Array<any> = [];


  bannerRef = firebase.database().ref("Banners");
  bannersRef = this.db.list("Promotionals/Banners")

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public db : AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public menuCtrl : MenuController,
    public toastCtrl: ToastController, ) {
      this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    this.getBanners();
  }
  getBanners() {
    this.bannersRef.snapshotChanges().subscribe(itemSnapshot => {
      this.banners = [];
      itemSnapshot.forEach(itemSnap => {
        var temp : any = itemSnap.payload.val();
        temp.key = itemSnap.key;
        this.banners.push(temp);
        return false;
      });
    })
  }

  gtAddBanner(){
    this.navCtrl.push(AddBannersPage);
  }



  deleteBanner(banner) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Banner ?',
      message: 'This banner cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(banner);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(banner) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    firebase.storage().ref("Banners/").child(banner.Name).delete().then(() => {
      this.bannerRef.child(banner.key).remove().then(() => {
        this.getBanners();
        this.presentToast();
      }).then(()=>{
        loading.dismiss();
      }) ;
  
    });
 }







  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Banner Deleted',
      duration: 4000,
    });
    toast.present();
  }

}
