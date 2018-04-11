import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeviceMotion, DeviceMotionAccelerationData} from '@ionic-native/device-motion';
import {NgProgressService} from "ng2-progressbar";

/**
 * Generated class for the SensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensor',
  templateUrl: 'sensor.html',
})
export class SensorPage {

  private lastX:number;
  private lastY:number;
  private deltaX:number;
  private deltaY:number;
  private moveCounter:number = 0;
  private epsilon:number = 1;
  private subscription:any;
  private buttonColor:string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private deviceMotion: DeviceMotion,
              private barService : NgProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorPage');
  }

  runBar(){
    this.barService.start();
    setTimeout(()=>{
      this.barService.done();
      this.stopWatching();
    },20000);
  }

  startWatching(){
    // Watch device acceleration
    this.buttonColor="beer";
    this.subscription = this.deviceMotion.watchAcceleration({frequency:1000}).subscribe((acc: DeviceMotionAccelerationData) => {
        this.runBar();
        console.log(acc);
        if(!this.lastX) {
          this.lastX = acc.x;
          this.lastY = acc.y;
          return;
        }

        this.deltaX=this.deltaY=0;
        this.deltaX = (acc.x-this.lastX);
        this.deltaY = (acc.y-this.lastY);

        if(Math.abs(this.deltaX)>this.epsilon || Math.abs(this.deltaY)>this.epsilon) {
          this.moveCounter--;
          this.buttonColor="danger";
        } else {
          this.moveCounter = Math.max(0, --this.moveCounter);
          this.buttonColor="beer";
        }

        /*
        if(this.moveCounter > 2) {
          this.buttonColor="danger";
          this.moveCounter=0;
        }
        */

        this.lastX = acc.x;
        this.lastY = acc.y;

    });
  }

  stopWatching(){
    // Stop watch
    this.buttonColor="";
    this.subscription.unsubscribe();
    this.deltaX=this.deltaY=0;
  }



}
