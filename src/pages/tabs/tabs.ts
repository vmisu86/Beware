import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {AddPlacePage} from "../add-place/add-place";
import {ClassicPage} from "../classic/classic";
import {UrgentPage} from "../urgent/urgent";
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UrgentPage;
  tab3Root = ClassicPage;
  tab4Root = WeatherPage;
  tab5Root = AddPlacePage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
