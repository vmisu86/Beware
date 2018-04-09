import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../model/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";
import {UrgentPage} from "../urgent/urgent";
import {ClassicPage} from "../classic/classic";
import {WeatherPage} from "../weather/weather";
import {WeatherProvider} from "../../providers/weather/weather";
import {Storage} from "@ionic/storage";
import {Geolocation} from "@ionic-native/geolocation";
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
  addressFixe:string;

  @ViewChild('map') mapRef: ElementRef;
  //map: goog;
	constructor(public modalCtrl: ModalController,
              private weatherProvider:WeatherProvider,
              private storage:Storage,
	            private placesService: PlacesService,
              private geoCtrl: Geolocation,
              private loadingCtrl: LoadingController,
              private nativeGeocoder: NativeGeocoder) {

	}

	ionViewDidLoad(){
	  this.showMap();
  }

  showMap(){
	 //  const location = new google.maps.LatLng(43.690929, 7.237377);
    //
	 //  const options = {
	 //    center: location,
    //   zoom: 20,
    //   mapTypeId: 'roadmap'
    // };
    // const map = new google.maps.Map(this.mapRef.nativeElement, options);
    //
    // //this.addMarker(location, map);

    let posNice = { lat: 43.690929, lng: 7.237377 }
    let map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 12,
      center: posNice,
      mapTypeId: 'roadmap'
    });
    let infoWindow = new google.maps.InfoWindow({ map: map });
    this.addressFixe = "Antibes"
    // Try HTML5 geolocation.



    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('You\'re here! ');

        this.nativeGeocoder.reverseGeocode(pos.lat, pos.lng)
          .then((result: NativeGeocoderReverseResult) => this.addressFixe = JSON.stringify(result))
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

  // addMarker(position, map){
	//   return new google.maps.Marker({
  //     position,
  //     map
  //   });
  // }


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
