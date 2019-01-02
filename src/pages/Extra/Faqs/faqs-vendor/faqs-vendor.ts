import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-faqs-vendor',
  templateUrl: 'faqs-vendor.html',
})
export class FaqsVendorPage {
  ques: string;
  ans: string;
  faqs: Array<any> = []
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    public navParams: NavParams
  ) {
    this.getFaqs();
    this.acc();
  }

  checkData() {
    if (this.ques) {
      if (this.ans) {
        this.addFaq();
      } this.presentToast("Enter Answer");
    } this.presentToast("Enter Question");
  }



  getFaqs() {
    this.db.list(`Promotionals/FAQs/VendorFaq`).snapshotChanges().subscribe(snap => {
      this.faqs = [];
      snap.forEach(snip => {
        var temp: any = snip.payload.val();
        temp.key = snip.key;
        this.faqs.push(temp);
      })
    })

  }
  addFaq() {
    firebase.database().ref("Promotionals/FAQs/VendorFaq").push({
      Question: this.ques,
      Answer: this.ans
    }).then(() => {
      this.ques = null;
      this.ans = null;
      this.presentToast("FAQ Added");
    })
  }


  acc() {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "top",
      showCloseButton: false,
    });
    toast.present();
  }

}
