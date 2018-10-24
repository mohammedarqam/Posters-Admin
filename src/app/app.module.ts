import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';
import { UserOptionsPage } from '../pages/Users/user-options/user-options';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SellersViewPage } from '../pages/Sellers/sellers-view/sellers-view';
import { SellersDetailsPage } from '../pages/Sellers/sellers-details/sellers-details';
import { VerifySellerPage } from '../pages/Sellers/verify-seller/verify-seller';
import { SellerIssuesPage } from '../pages/Sellers/seller-issues/seller-issues';
import { BannersPage } from '../pages/Extra/Banners/banners/banners';
import { AddBannersPage } from '../pages/Extra/Banners/add-banners/add-banners';



export const firebaseCred = {
  apiKey: "AIzaSyDfYGCZchTJHmNBlk4-T4-B24d7qtBs4LQ",
  authDomain: "posters-83a2e.firebaseapp.com",
  databaseURL: "https://posters-83a2e.firebaseio.com",
  projectId: "posters-83a2e",
  storageBucket: "posters-83a2e.appspot.com",
  messagingSenderId: "9709869347"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    SellersViewPage,
    SellersDetailsPage,
    VerifySellerPage,
    SellerIssuesPage,
    BannersPage,
    AddBannersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    SellersViewPage,
    SellersDetailsPage,
    VerifySellerPage,
    SellerIssuesPage,
    BannersPage,
    AddBannersPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
