import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminHomePage } from '../admin-home/admin-home';
import { AuthProvider } from '../../providers/auth/auth';
import { UserPage } from '../user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl: AlertController,
              public sService: AuthProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(msg:string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle: msg,
      buttons: ['OK']
    }).present();
  }

  signIn(){
    if(!this.username.value || !this.password.value){
      this.alert('Please fill in the details');      
    }
    // this.fireAuth.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
    // .then(data => {
    //   this.alert('You are logged in');
    //   if(this.username.value === 'admin@gmail.com'){
    //     this.navCtrl.push(AdminHomePage);
    //   } else {
    //     this.navCtrl.push(BooksPage);
    //   }
    // })
    // .catch(error => {
    //   console.log('error occured',error)
    // })
    // console.log(this.username.value)
    // console.log(this.password.value)
    else {
      const user = {
        email: this.username.value,
        password: this.password.value
      }
      this.sService.login(user).subscribe(
        (user)=>{
          console.log(user);
          if(user.success){

            this.alert('You are logged in');
            if(this.username.value === 'admin@gmail.com'){
                this.navCtrl.push(AdminHomePage);
              } else {
                  this.navCtrl.push(UserPage);
                }
              } else {
              this.alert(user.msg);                
              }
        }
      )
    }
  }
}
