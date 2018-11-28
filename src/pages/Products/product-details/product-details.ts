import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ViewBarCodePage } from '../view-bar-code/view-bar-code';




@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  prod = this.navParams.get("product");

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.prod);
  }

  viewBar(){
    this.navCtrl.push(ViewBarCodePage,{product : this.prod});
  }
}
