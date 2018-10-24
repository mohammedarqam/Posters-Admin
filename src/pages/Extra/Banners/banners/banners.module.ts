import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BannersPage } from './banners';

@NgModule({
  declarations: [
    BannersPage,
  ],
  imports: [
    IonicPageModule.forChild(BannersPage),
  ],
})
export class BannersPageModule {}
