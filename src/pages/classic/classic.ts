import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {PlacesService} from "../../services/places";
import {Place} from "../../model/place";
import {WeatherProvider} from "../../providers/weather/weather";
import {Storage} from "@ionic/storage";
import {AlcoholPage} from "../alcohol/alcohol";
import {SensorPage} from "../sensor/sensor";
import {ReactionPage} from "../reaction/reaction";


@IonicPage()
@Component({
  selector: 'page-classic',
  templateUrl: 'classic.html',
})
export class ClassicPage {

  alcoholPage = AlcoholPage;
  sensorPage = SensorPage;
  reactionPage = ReactionPage;
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
              private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassicPage');
  }

  ionViewWillEnter(){
    this.places = this.placesService.loadPlaces();
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Nice',
          state: 'France'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.state)  .subscribe(weather => {
        this.weather = weather.current_observation;
      });
    });
  }

}
