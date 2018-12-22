import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubCatPage } from './add-sub-cat';

@NgModule({
  declarations: [
    AddSubCatPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubCatPage),
  ],
})
export class AddSubCatPageModule {}
