import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {WeatherPage} from "../pages/weather/weather";
import {AddPlacePage} from "../pages/add-place/add-place";
import {ContactPage} from "../pages/contact/contact";
import {ClassicPage} from "../pages/classic/classic";
import {UrgentPage} from "../pages/urgent/urgent";

export interface PageInterface {
  title:string;
  pageName: string;
  component?: any;
  index?:number;
  icon: string;
}

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
	rootPage: any = TabsPage;
  pages: PageInterface[] = [
      { title: 'Home',pageName:'TabsPage', component: HomePage,index:0, icon: "home"},
      { title: 'Begin',pageName:'TabsPage', component: ClassicPage,index:1, icon: "car" },
      { title: 'Weather',pageName:'TabsPage',component: WeatherPage,index:2, icon: "cloudy-night" },
      { title: 'Incident',pageName:'TabsPage', component: AddPlacePage,index:3, icon: "add-circle"}
  ]

	

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    

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
    let params = {};
    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }else{
      this.nav.setRoot(page.pageName, params);
    }

  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();
    if (childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.component){
        return 'primary';
      }
      return;
    }
  }
}
