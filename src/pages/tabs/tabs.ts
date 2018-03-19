import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {AddPlacePage} from "../add-place/add-place";
import {ClassicPage} from "../classic/classic";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ClassicPage;
  tab4Root = WeatherPage;
  tab5Root = AddPlacePage;

  constructor() {

  }
}
