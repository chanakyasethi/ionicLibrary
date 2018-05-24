import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminbooksProvider } from '../../providers/adminbooks/adminbooks';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage} from '../../pages/login/login';
import { HomePage } from '../home/home';
import { BookPage } from './book/book';

/**
 * Generated class for the AllBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-books',
  templateUrl: 'all-books.html',
})
export class AllBooksPage {

  books:any[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public adService : AdminbooksProvider,public auth : AuthProvider) {
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad allBooksPage qqqqqqqq');
    
  }
  // ionViewDidLeave(){
  //   this.navCtrl.pop();
  // }
  ionViewDidEnter(){
    console.log('hello')
    this.adService.getBooks().subscribe(
      (book)=>{
        console.log('qq111qq11',book);
        this.books=book;
      }
    );
    console.log('111111',this.books)
  }
  onClick(index:any){
    console.log(index);
    this.adService.getBook(index).subscribe(
      (data) =>{
        console.log(data)
        this.navCtrl.push(BookPage);
      }
    )
  }
  onLogout(){
    console.log('onLogout()')
    this.auth.onLogOut().subscribe(
      
      (data) => {
        if(data.success){
          console.log('hehehe');
          // this.navCtrl.popTo(HomePage);
          // this.navCtrl.setPages([
          //   { page: HomePage }
          // ]);
          // this.navCtrl.setRoot(HomePage);
          this.navCtrl.popToRoot();          
        } else{
          console.log('error')
        }
      }
    );
  }
}
