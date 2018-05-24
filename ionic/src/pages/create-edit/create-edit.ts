import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, AlertController,App, ViewController } from 'ionic-angular';
import { AllBooksPage } from '../all-books/all-books';
import { AdminbooksProvider } from '../../providers/adminbooks/adminbooks';

/**
 * Generated class for the CreateEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-edit',
  templateUrl: 'create-edit.html',
})
export class CreateEditPage {
  @ViewChild('bookname') bookname;
  @ViewChild('author') author;
  @ViewChild('copies') copies;
  @ViewChild('description') description;
  tab:Tabs;
  editMode:false;
  bookid:any
  book:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private adService: AdminbooksProvider, public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public appCtrl: App) {
  this.tab=navCtrl.parent;
  this.editMode=this.navParams.get('edit');
  this.bookid=this.navParams.get('bookid');
}
alert(msg:string){
  this.alertCtrl.create({
    title: 'Info',
    subTitle: msg,
    buttons: ['OK']
  }).present();
}
ionViewWillEnter(){
  console.log(this.editMode)
  // if(!this.editMode){
  //   this.navCtrl.setRoot(CreateEditPage);
  //   this.navCtrl.
  // }
}
// ionViewDidLeave(){
//   this.navCtrl.pop();
// }
ionViewDidLoad() {
  console.log('ionViewDidLoad CreateEditPage');
  if(this.editMode){
    console.log(this.bookid);
    this.book=this.adService.book;
    console.log(this.book);
    this.bookname.value=this.book.name;
    this.author.value=this.book.author;
    this.copies.value=this.book.units;
    this.description.value=this.book.description;
    }
  }
 onSubmit(){
   if(!this.bookname.value || !this.author.value || !this.copies.value || !this.description.value){
    this.alert('Please Fill in the Details');    
   } else {
    console.log(this.bookname.value)
    console.log(this.author.value)
    console.log(this.copies.value)
    console.log(this.description.value)
    const book ={
       name:this.bookname.value,
       author:this.author.value,
       units: +this.copies.value,
       description:this.description.value,
       availableunits: +this.copies.value,
       issuedunits:0
    };
    if(this.editMode){
     this.adService.updateBook(this.bookid,book).subscribe(
       (data)=>{
         this.tab.select(0);        
       }
     )
    } else {
     this.adService.saveBooks(book).subscribe(
       (book)=>{
         console.log('qwqwqwqqwq');
         this.bookname.value = '';
         this.author.value = '';
         this.copies.value = '';
         this.description.value = '';
         this.tab.select(0);
       }
     );
    }
  }
   }
   onCancel(){
     if(this.editMode){
       this.navCtrl.pop();
     } else {
       this.navCtrl.push(AllBooksPage);
     }
  }
   
}
