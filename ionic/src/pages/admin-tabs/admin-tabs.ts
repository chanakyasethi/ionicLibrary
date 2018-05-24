import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllBooksPage } from '../all-books/all-books';
import { CreateEditPage } from '../create-edit/create-edit';
import { RequestedPage } from '../requested/requested';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AdminTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-tabs',
  templateUrl: 'admin-tabs.html',
})
export class AdminTabsPage {
  tab1Root = AllBooksPage;
  tab2Root = CreateEditPage;
  tab3Root = RequestedPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminTabsPage');
    // this.sService.onLogOut();
  }
  logout(){ 
    this.navCtrl.popToRoot();
    // this.navCtrl.push(HomePage);
    this.auth.onLogOut();
  }
}
