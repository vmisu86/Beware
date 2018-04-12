import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {AddPlacePage} from "../add-place/add-place";

export interface PageInterface {
  title:string;
  pageName: string;
  tabComponent?: any;
  index?:number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;




  pages: PageInterface[] = [
    {title: 'Urgent', pageName: 'TabsPage', tabComponent:'UrgentPage', index:0, icon:'medkit'},
    {title: 'Urgent', pageName: 'TabsPage', tabComponent:'WeatherPage', index:1, icon:'cloudy-night'},
    {title: 'Urgent', pageName: 'TabsPage', tabComponent:'AddPlacePage', index:2, icon:'add-circle'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
