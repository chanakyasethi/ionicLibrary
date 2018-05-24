import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AvailablePage } from './available/available';
import { IssuedPage } from './issued/issued';
import { ProfilePage } from './profile/profile';
import { HomePage } from '../home/home';
import {UserProvider} from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  chatRoot = AvailablePage;
  chat = IssuedPage;
  chat1 = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  logout(){ 
    this.navCtrl.popToRoot();
    // this.navCtrl.push(HomePage);
    this.auth.onLogOut();
  }
}
