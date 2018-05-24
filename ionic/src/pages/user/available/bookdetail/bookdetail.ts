import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../../providers/user/user';

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookdetail',
  templateUrl: 'bookdetail.html',
})
export class BookdetailPage {
  book:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private UserProvider:UserProvider ) {
    this.book=this.UserProvider.book;
    console.log(this.book)
  }
 user:any
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookdetailPage');

  }
  issue(id: any){
       this.user=this.UserProvider.user;
    console.log(id);
    // this.id = id;
    // this.userService.getBook(id).subscribe(
    //   (book:Book)=>{
    //     console.log('book',book)
    //     this.book=book;
    //     console.log(this.book);
        this.UserProvider.onIssueBook(id,this.user._id).subscribe(
          (issuedbook) =>{
            this.book=issuedbook;
            // this.books=issuedbook;
            // let index=this.books.findIndex(el=>el._id==id);
            // this.books[index]=issuedbook;
          //  this.router.navigate(['/user/allbooks'],{relativeTo: this.route});
            // 
          }
        );
      // }
    // );
    
    // this.adminService.addRequestedBook(this.book)
    // console.log(this.book);
  }
  
}
