import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellersViewPage } from './sellers-view';

@NgModule({
  declarations: [
    SellersViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SellersViewPage),
  ],
})
export class SellersViewPageModule {}
