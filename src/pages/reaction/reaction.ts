import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatePipe} from "@angular/common";

/**
 * Generated class for the ReactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reaction',
  templateUrl: 'reaction.html',
})
export class ReactionPage {

  private cardColor:string = "dark";
  private colors:string[] = ["primary", "secondary","danger","beer"]
  private onStart:number=0;
  private onTap:number=0;
  private reactionTime:number = 0;
  private message:string = "Essayez pour verifier votre temps de réaction !";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactionPage');
  }

  startWatching(){
    setTimeout(() => {
      let color:string = this.colors[this.getRandomInt(4)];
      this.cardColor=color;
      this.reactionTime = 0;
      this.message= "Essayez pour verifier votre temps de réaction !";
      this.onStart=Date.now();
    },this.getRandomInt(8)*1000 + 1000);
  }

  stopWatching(){
    this.cardColor="dark";
    this.onTap = Date.now();
    this.reactionTime = this.precisionRound((this.onTap-this.onStart)*0.001, 4);

    if ((this.reactionTime * 10)<8){
      this.message="Votre temps de réaction est valide.";
    } else if ((this.reactionTime*10)<11){
      this.message="Votre temps de réaction est un peu élevé. Faite attention sur la route.";
    } else if ((this.reactionTime*10)<15){
      this.message="Votre temps de réaction est anormalement élevé. Vous ne devriez pas prendre la route.";
    } else {
      this.message="Impossible de prendre la route de cet état, risque très important.";
    }

  }

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

}
