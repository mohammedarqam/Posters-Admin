import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sellers-details',
  templateUrl: 'sellers-details.html',
})
export class SellersDetailsPage {

  seller = this.navParams.get("seller");

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }


}
