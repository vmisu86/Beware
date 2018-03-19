import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlcoholPage } from './alcohol';

@NgModule({
  declarations: [
    AlcoholPage,
  ],
  imports: [
    IonicPageModule.forChild(AlcoholPage),
  ],
})
export class AlcoholPageModule {}
