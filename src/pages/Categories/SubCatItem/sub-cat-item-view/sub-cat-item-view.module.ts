import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubCatItemViewPage } from './sub-cat-item-view';

@NgModule({
  declarations: [
    SubCatItemViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SubCatItemViewPage),
  ],
})
export class SubCatItemViewPageModule {}
