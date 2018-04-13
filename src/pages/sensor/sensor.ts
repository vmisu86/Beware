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
  public workoutProgressX:string = '50%';
  public workoutProgressNumX:number = 50;
  private messageProgressX: string = "OK";
  private buttonColorX:string="light";
  public workoutProgressY:string = '50%';
  public workoutProgressNumY:number = 50;
  private messageProgressY: string = "OK";
  private buttonColorY:string="light";
  private messageHead:string = "";
  private messageBody:string = "";

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
    },10000);
  }

  startWatching(){
    // Watch device acceleration
    this.buttonColor="beer";
    this.moveCounter=0;
    this.subscription = this.deviceMotion.watchAcceleration({frequency:300}).subscribe((acc: DeviceMotionAccelerationData) => {
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

      if (Math.abs(this.deltaX) > this.epsilon) {
        this.moveCounter++;
        this.buttonColor = "danger";
      } else if (Math.abs(this.deltaY) > this.epsilon) {
        this.moveCounter++;
        this.buttonColor = "danger";
      } else {
        this.buttonColor = "beer";
      }

      this.lastX = acc.x;
        this.lastY = acc.y;

        this.updateProgressX(this.deltaX*10+50);
        this.updateProgressY(this.deltaY*10+50);

    });
  }

  stopWatching(){
    // Stop watch

    if(this.moveCounter > 6) {
      this.messageHead="Attention !";
      this.messageBody="Votre état n'est pas optimal pour prendre la route.";
    }else{
      this.messageHead="Tout vas bien !";
      this.messageBody="Votre état est correct. Vous pouvez prendre la route.";
    }

    this.buttonColor="";
    this.subscription.unsubscribe();
    this.barService.done();
    this.deltaX=this.deltaY=0;

  }

  updateProgressX(val) {
    // Update percentage value where the above is a decimal
    this.workoutProgressNumX = this.precisionRound(Math.min( val, 100), 0);
    this.workoutProgressX = this.workoutProgressNumX.toString()+"%";
    if (40<this.workoutProgressNumX && this.workoutProgressNumX<61){
      this.messageProgressX = "OK";
      this.buttonColorX="light";
    }else{
      this.messageProgressX = "OUT";
      this.buttonColorX="danger";
    }
  }

  updateProgressY(val) {
    // Update percentage value where the above is a decimal
    this.workoutProgressNumY = this.precisionRound(Math.min( val, 100), 0);
    this.workoutProgressY = this.workoutProgressNumY.toString()+"%";
    if (40<this.workoutProgressNumY && this.workoutProgressNumY<61){
      this.messageProgressY = "OK";
      this.buttonColorY="light";
    }else{
      this.messageProgressY = "OUT";
      this.buttonColorY="danger";
    }
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

}
