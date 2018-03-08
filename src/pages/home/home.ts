import {Component, OnInit} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../model/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";
import {UrgentPage} from "../urgent/urgent";
import {ClassicPage} from "../classic/classic";
import {WeatherProvider} from "../../providers/weather/weather";
import {Storage} from "@ionic/storage";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	addPlacePage = AddPlacePage;
	urgentPage = UrgentPage;
	classicPage = ClassicPage;
	places: Place[] = [];
  weather:any;
  location:{
    city:string,
    state:string
  }

	constructor(public modalCtrl: ModalController,
              private weatherProvider:WeatherProvider,
              private storage:Storage,
	            private placesService: PlacesService) {

	}

	ngOnInit(){
		this.placesService.fetchPlaces()
			.then(
				(places: Place[]) => this.places = places
			)
	}

	onOpenPlace(place: Place, index: number) {
		const modal = this.modalCtrl.create(PlacePage, {place: place, index: index});
		modal.present();

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
