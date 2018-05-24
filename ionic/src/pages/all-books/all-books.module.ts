import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllBooksPage } from './all-books';
import { AdminbooksProvider } from '../../providers/adminbooks/adminbooks';

@NgModule({
  declarations: [
    AllBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(AllBooksPage),
  ],
})
export class AllBooksPageModule {
  constructor(){
    
  }
  

}
