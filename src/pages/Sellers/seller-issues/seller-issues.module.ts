import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerIssuesPage } from './seller-issues';

@NgModule({
  declarations: [
    SellerIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerIssuesPage),
  ],
})
export class SellerIssuesPageModule {}
