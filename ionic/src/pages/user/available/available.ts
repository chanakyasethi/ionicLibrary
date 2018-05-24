import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { Response } from '@angular/http';
import * as _ from 'lodash';

import { BookdetailPage } from '../available/bookdetail/bookdetail';

/**
 * Generated class for the AvailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available',
  templateUrl: 'available.html',
})
export class AvailablePage {
  books:any
  click=false;
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public UserProvider:UserProvider) {
        this.user=this.UserProvider.user;
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AvailablePage');
    this.UserProvider.getBooks().subscribe((res)=>{
      console.log("books",res);
      this.books=res;
      // console.log(_.difference(res,this.user.booksissued))
      console.log('ionViewDidLoad AvailablePage',this.books);
      
    });
  }
  view(id:any){
    console.log(id)
    this.UserProvider.getBook(id).subscribe(
      (data) =>{
        console.log(data);
        this.navCtrl.push(BookdetailPage);     
      }
    )
     
    } 
}
