import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestedPage } from './requested';

@NgModule({
  declarations: [
    RequestedPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestedPage),
  ],
})
export class RequestedPageModule {}
