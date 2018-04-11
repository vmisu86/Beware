import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController, ToastController} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../model/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";
import {UrgentPage} from "../urgent/urgent";
import {ClassicPage} from "../classic/classic";
import {WeatherPage} from "../weather/weather";
import {WeatherProvider} from "../../providers/weather/weather";
import {Storage} from "@ionic/storage";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';



declare const google;


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	addPlacePage = AddPlacePage;
	urgentPage = UrgentPage;
	classicPage = ClassicPage;
	weatherPage = WeatherPage;

	places: Place[] = [];
  weather:any;
  location:{
    city:string,
    state:string
  }
  address:string;
  city:string;
  country:string;

  @ViewChild('map') mapRef: ElementRef;

  //map: goog;
	constructor(public modalCtrl: ModalController,
              private weatherProvider:WeatherProvider,
              private storage:Storage,
	            private placesService: PlacesService,
              private geoCtrl: Geolocation,
              private loadingCtrl: LoadingController,
              public geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) {

	}

	ionViewDidLoad(){
	  this.showMap();
  }



  showMap(){
    // this is the place by default
    let posNice = { lat: 43.6871966, lng: 7.2266771 }
    let map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 12,
      //the current position on the center
      center: posNice,
      //the type of the map we can use Satelit or hybrid as well
      mapTypeId: 'roadmap'
    });
    let infoWindow = new google.maps.InfoWindow({ map: map });
    // Try HTML5 geolocation.

    this.nativeGeocoder.reverseGeocode(posNice.lat, posNice.lng)
      .then((result: NativeGeocoderReverseResult) => this.address = JSON.stringify(result))
      .catch((error: any) => console.log(error));



    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('You\'re here! ');


        this.nativeGeocoder.reverseGeocode(pos.lat, pos.lng)
          .then((result: NativeGeocoderReverseResult) => this.address = JSON.stringify(result))
          .catch((error: any) => console.log(error));




        let marker = new google.maps.Marker({
          position: pos,
          map: map
        });
        map.setCenter(pos);
      }, () => {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }
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

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }



}
