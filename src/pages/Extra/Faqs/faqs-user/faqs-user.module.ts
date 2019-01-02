import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsUserPage } from './faqs-user';

@NgModule({
  declarations: [
    FaqsUserPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqsUserPage),
  ],
})
export class FaqsUserPageModule {}
