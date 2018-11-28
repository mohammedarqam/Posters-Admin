import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBannersPage } from './add-banners';

@NgModule({
  declarations: [
    AddBannersPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBannersPage),
  ],
})
export class AddBannersPageModule {}
