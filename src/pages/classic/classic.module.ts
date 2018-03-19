import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicPage } from './classic';
import {WeatherProvider} from "../providers/weather/weather";
import {WeatherPage} from "../pages/weather/weather";

@NgModule({
  declarations: [
    ClassicPage,
    WeatherPage
  ],
  imports: [
    IonicPageModule.forChild(ClassicPage),
  ],
	bootstrap: [ IonicApp ],
	entryComponents: [
    WeatherPage
})
export class ClassicPageModule {}
