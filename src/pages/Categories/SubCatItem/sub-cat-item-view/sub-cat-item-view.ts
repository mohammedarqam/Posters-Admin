import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AddSubCatItemPage } from '../add-sub-cat-item/add-sub-cat-item';


@IonicPage()
@Component({
  selector: 'page-sub-cat-item-view',
  templateUrl: 'sub-cat-item-view.html',
})
export class SubCatItemViewPage {

  sc = this.navParams.get("cat");

  cats : Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public db : AngularFireDatabase,
  ) {
    this.getCats();
  }


  getCats(){
    this.db.list(`SubCatsItemsIndex/${this.sc.key}`).snapshotChanges().subscribe(snap=>{
      this.cats = [];
      snap.forEach(snip=>{
        firebase.database().ref("SubCategoriesItems").child(snip.key).once("value",ssnip=>{
          var temp : any = ssnip.val();
          temp.key = ssnip.key;
          this.cats.push(temp);
        })
      })
    })
  }



  gtAddCat() {
    let profileModal = this.modalCtrl.create(AddSubCatItemPage,{cat : this. sc});
    profileModal.present();
  }
}
