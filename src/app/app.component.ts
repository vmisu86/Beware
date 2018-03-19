import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {WeatherPage} from "../pages/weather/weather";
import {AddPlacePage} from "../pages/add-place/add-place";
import {ContactPage} from "../pages/contact/contact";
import {AboutPage} from "../pages/about/about";


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
	rootPage: any = TabsPage;

	pages: Array<{title: string, component: any, icon: string}>;

	// constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
	// 	platform.ready().then(() => {
	// 		// Okay, so the platform is ready and our plugins are available.
	// 		// Here you can do any higher level native things you might need.
	// 		statusBar.styleDefault();
	// 		splashScreen.hide();
	// 	});
	// }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home"},
      { title: 'Help', component: AboutPage, icon: "medkit" },
      { title: 'Begin', component: ContactPage, icon: "car" },
      { title: 'Weather', component: WeatherPage, icon: "cloudy-night" },
      { title: 'Incident', component: AddPlacePage, icon: "add-circle"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
