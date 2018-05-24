import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
/**
 * Generated class for the IssuedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-issued',
  templateUrl: 'issued.html',
})
export class IssuedPage {
  books:any;
  user=this.UserProvider.user;
  constructor(public navCtrl: NavController, public navParams: NavParams,private UserProvider:UserProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad IssuedPage');
    this.UserProvider.IsssuedBook().subscribe(
      (books)=>{
        this.books = books;
        console.log("books",this.books);
      }
    )
  }
  view(id:any){
    console.log("u",this.user._id,"b",this.books);
    this.UserProvider.onReturnBook(this.books,this.user._id).subscribe();
  }
  onReturn(book:any){
    console.log('return book',book);
    this.UserProvider.onReturnBook(book,this.user._id).subscribe(
      (books)=>{
        this.books = books;
        // this.router.navigate(['user/issuedbooks']);
      }
    )
  }

}
