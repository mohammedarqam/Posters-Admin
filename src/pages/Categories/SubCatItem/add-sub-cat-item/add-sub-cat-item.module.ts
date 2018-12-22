import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubCatItemPage } from './add-sub-cat-item';

@NgModule({
  declarations: [
    AddSubCatItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubCatItemPage),
  ],
})
export class AddSubCatItemPageModule {}
