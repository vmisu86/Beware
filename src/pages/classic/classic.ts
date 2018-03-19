import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {PlacesService} from "../../services/places";
import {Geolocation} from "@ionic-native/geolocation";
import {WeatherProvider} from "../../providers/weather/weather";

/**
 * Generated class for the ClassicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classic',
  templateUrl: 'classic.html',
})
export class ClassicPage {

	places: Place[] = [];
  location:{
    city:string,
    state:string
  }
  weather:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private weatherProvider:WeatherProvider,
	            private placesService: PlacesService,
              private geoCtrl: Geolocation,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassicPage');
  }

  // ionViewWillEnter(){
  //   this.places = this.placesService.loadPlaces();
  //   this.places = this.placesService.loadPlaces();
  //   this.storage.get('location').then((val) => {
  //     if(val != null){
  //       this.location = JSON.parse(val);
  //     } else {
  //       this.location = {
  //         city: 'Nice',
  //         state: 'France'
  //       }
  //     }
  //
  //     this.weatherProvider.getWeather(this.location.city, this.location.state)  .subscribe(weather => {
  //       this.weather = weather.current_observation;
  //     });
  //   });
  // }

}
