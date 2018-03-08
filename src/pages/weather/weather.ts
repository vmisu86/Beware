import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";
import {Storage} from "@ionic/storage";
import {SettingsPage} from "../settings/settings";


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  settingsPage = SettingsPage;
  weather:any;
  location:{
    city:string,
    state:string
  }

  constructor(
    public navCtrl: NavController,
    private weatherProvider:WeatherProvider,
    private storage:Storage) {

  }

  ionViewWillEnter(){
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
