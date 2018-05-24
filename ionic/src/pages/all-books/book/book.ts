import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { AdminbooksProvider } from '../../../providers/adminbooks/adminbooks';
import { CreateEditPage } from '../../create-edit/create-edit';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  id:any;
  book:any;
  tab:Tabs;  
  constructor(public navCtrl: NavController, public navParams: NavParams,public adService: AdminbooksProvider) {
    // this.id= this.navParams.get('index')
    this.book=this.adService.book;
  this.tab=navCtrl.parent;    
    // console.log(this.id);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
    // this.adService.getBook(this.id).subscribe(
    //   (data) =>{
    //     console.log(data)
    //     this.book= data;
    //   }
    // )
  }
  ionViewDidEnter(){
  }  
  // ionViewDidLeave(){
  //   this.navCtrl.pop();
  // }
  onDeleteBook(){
    console.log('deleting ',this.book._id)
    this.adService.deleteBook(this.book._id).subscribe(
      (book)=>{
        // this.book=book;
        console.log(book);
      this.tab.select(0);              
      }
    );
  }
  OnEdit(){
    console.log('editing book', this.book._id);
    this.adService.getBook(this.book._id).subscribe(
      (data)=>{
        this.navCtrl.push(CreateEditPage, {
          edit:true,
          bookid:this.book._id
        })
      }
    )
  }


}
