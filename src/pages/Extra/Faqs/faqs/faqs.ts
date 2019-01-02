import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqsVendorPage } from '../faqs-vendor/faqs-vendor';
import { FaqsUserPage } from '../faqs-user/faqs-user';

@IonicPage()
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  gtUsers(){
    this.navCtrl.push(FaqsUserPage)
  }

  gtVendors(){
    this.navCtrl.push(FaqsVendorPage)
  }
}
