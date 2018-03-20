import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AgmCoreModule} from '@agm/core';
import {Geolocation} from "@ionic-native/geolocation";
import {Camera} from "@ionic-native/camera";
import {File} from "@ionic-native/file";
import {IonicStorageModule} from '@ionic/storage';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AddPlacePage} from "../pages/add-place/add-place";
import {PlacePage} from "../pages/place/place";
import {SetLocationPage} from "../pages/set-location/set-location";
import * as keys from '../keys/keys.json'
import {PlacesService} from "../services/places";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {TabsPage} from "../pages/tabs/tabs";
import {UrgentPage} from "../pages/urgent/urgent";
import {ClassicPage} from "../pages/classic/classic";
import {WeatherProvider} from "../providers/weather/weather";
import {WeatherPage} from "../pages/weather/weather";
import {HttpModule} from "@angular/http";
import {SettingsPage} from "../pages/settings/settings";
import {GoogleMaps} from "@ionic-native/google-maps";
import {AlcoholPage} from "../pages/alcohol/alcohol";
import {CallNumber} from "@ionic-native/call-number";

console.log('api key: %s', keys[ 'googleMaps' ]);

@NgModule({
	declarations: [
		MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
		AddPlacePage,
		PlacePage,
		SetLocationPage,
    UrgentPage,
    ClassicPage,
    WeatherPage,
		AlcoholPage,
    SettingsPage
	],
	imports: [
		BrowserModule,
    HttpModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
		AgmCoreModule.forRoot({apiKey: keys[ 'googleMaps' ]})
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
		AddPlacePage,
		PlacePage,
		SetLocationPage,
    UrgentPage,
    ClassicPage,
    WeatherPage,
		AlcoholPage,
    SettingsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		Camera,
		PlacesService,
		File,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
		CallNumber
	]
})
export class AppModule {
}
