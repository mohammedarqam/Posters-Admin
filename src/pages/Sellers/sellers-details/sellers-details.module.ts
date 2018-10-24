import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellersDetailsPage } from './sellers-details';

@NgModule({
  declarations: [
    SellersDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellersDetailsPage),
  ],
})
export class SellersDetailsPageModule {}
