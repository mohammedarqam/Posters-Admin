import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-add-sub-cat',
  templateUrl: 'add-sub-cat.html',
})
export class AddSubCatPage {

  cat = this.navParams.get("cat");

  catName : string;


  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController,
  public viewCtrl : ViewController,
  ) {
  }



  addCat(){

    if(this.catName){


    let loading = this.loadingCtrl.create({
      content: 'Adding Category...'
    });
    loading.present();

    firebase.database().ref("SubCategories").push({
      Name : this.catName,
      TimeStamp : moment().format(),
    }).then((res)=>{
      firebase.database().ref("SubCatsIndex").child(this.cat.key).child(res.key).set(true).then(()=>{
        this.presentToast("Sub Category Added");
        loading.dismiss();
        this.close();
      }); 
    });
  }else{
    this.presentToast("Category Name Empty");
  }
  }

  close(){
    this.viewCtrl.dismiss();
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
