import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicPage } from './classic';

@NgModule({
  declarations: [
    ClassicPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassicPage),
  ],
})
export class ClassicPageModule {}
