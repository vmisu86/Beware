import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicPage } from './classic';
import {UrgentPage} from "../urgent/urgent";

@NgModule({
  declarations: [
    ClassicPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassicPage),
  ],
})
export class ClassicModule {}

