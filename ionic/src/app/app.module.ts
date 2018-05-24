import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { AdminTabsPage } from '../pages/admin-tabs/admin-tabs';
import { CreateEditPage } from '../pages/create-edit/create-edit';
import { RequestedPage } from '../pages/requested/requested';
import { AllBooksPage } from '../pages/all-books/all-books';
import { AdminbooksProvider } from '../providers/adminbooks/adminbooks';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import { BookPage } from '../pages/all-books/book/book';
import { AvailablePage } from '../pages/user/available/available';
import { IssuedPage } from '../pages/user/issued/issued';
import { ProfilePage } from '../pages/user/profile/profile';
import { BookdetailPage } from '../pages/user/available/bookdetail/bookdetail';
import { UserPage } from '../pages/user/user';
import { UserProvider } from '../providers/user/user';
// import {AngularFireDatabaseModule} from 'angularfire2/database';

const firebaseAuth = {
  apiKey: "AIzaSyCEo2S0ti5ACqDTLAtO4Sk9lv38K_uarh8",
  authDomain: "ionicone-50596.firebaseapp.com",
  databaseURL: "https://ionicone-50596.firebaseio.com",
  projectId: "ionicone-50596",
  storageBucket: "ionicone-50596.appspot.com",
  messagingSenderId: "692195408153"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AdminHomePage,
    AdminTabsPage,
    CreateEditPage,
    RequestedPage,
    AllBooksPage,
    BookPage,
    AvailablePage,
    IssuedPage,
    ProfilePage,
    BookdetailPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AdminHomePage,
    AdminTabsPage,
    CreateEditPage,
    RequestedPage,
    AllBooksPage,
    BookPage,
    AvailablePage,
    IssuedPage,
    ProfilePage,
    BookdetailPage,
    UserPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdminbooksProvider,
    AuthProvider,
    UserProvider
  ]
})
export class AppModule {}
