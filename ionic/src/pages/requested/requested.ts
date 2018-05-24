import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';
import { AdminbooksProvider } from '../../providers/adminbooks/adminbooks';
// import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

/**
 * Generated class for the RequestedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requested',
  templateUrl: 'requested.html',
})
export class RequestedPage {
  requestedBooks:any;
  tab:Tabs;  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public adService: AdminbooksProvider) {
  this.tab=navCtrl.parent;        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestedPage');
  }
  // ionViewDidLeave(){
  //   this.navCtrl.pop();
  // }
  ionViewWillEnter(){
    this.adService.getRequestedBooks().subscribe(
      (books)=>{
        console.log(books);
        this.requestedBooks = books;
      }
    )
  }

  onAccept(bookid:any,userid:any){
    console.log(bookid,'   ',userid);
    this.adService.acceptRequestedBooks(bookid,userid).subscribe(
      (data) =>{
        console.log(data);
        // this.navCtrl.push(RequestedPage);
        // this.tab.select(2);
        this.requestedBooks=data
      }
    )
  }

}
