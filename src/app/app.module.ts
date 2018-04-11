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
import {SensorPage} from "../pages/sensor/sensor";
import {HttpModule} from "@angular/http";
import {SettingsPage} from "../pages/settings/settings";

import {AlcoholPage} from "../pages/alcohol/alcohol";
import {CallNumber} from "@ionic-native/call-number";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {DeviceMotion} from "@ionic-native/device-motion";
import {Secu1Page} from "../pages/secu1/secu1";
import {TextToSpeech} from "@ionic-native/text-to-speech";
import {Secu2Page} from "../pages/secu2/secu2";
import {Secu3Page} from "../pages/secu3/secu3";
import {NgProgressModule} from "ng2-progressbar";



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
    SettingsPage,
    SensorPage,
    Secu1Page,
    Secu2Page,
    Secu3Page
	],
	imports: [
		BrowserModule,
    HttpModule,
    NgProgressModule,
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
    SettingsPage,
    SensorPage,
    Secu1Page,
    Secu2Page,
    Secu3Page
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		Camera,
		PlacesService,
		File,
    WeatherProvider,
		CallNumber,
    NativeGeocoder,
    DeviceMotion,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {
}
