import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { IssuedPage } from './issued/issued';
import { AvailablePage } from './available/available';

@NgModule({
  declarations: [
    UserPage,
    IssuedPage,
    AvailablePage
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  exports:[
    IssuedPage,
    AvailablePage
  ]
})
export class UserPageModule {}
