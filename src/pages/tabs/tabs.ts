import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {AddPlacePage} from "../add-place/add-place";
import {ClassicPage} from "../classic/classic";
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ClassicPage;
  tab4Root = WeatherPage;
  tab5Root = AddPlacePage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
