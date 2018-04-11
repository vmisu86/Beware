import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorPage } from './sensor';
import {NgProgressModule} from "ng2-progressbar";

@NgModule({
  declarations: [
    SensorPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorPage),
    NgProgressModule
  ],
})
export class SensorPageModule {}
