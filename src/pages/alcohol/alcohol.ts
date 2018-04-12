import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlcoholPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alcohol',
  templateUrl: 'alcohol.html',
})
export class AlcoholPage {

  sexe:number;
  poids:number;
  niveau:number;
  volume:number;
  heurePasser:number;
  BAC: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlcoholPage');
    console.log(this.BAC);
  }

  calcule(){
    this.BAC = ((this.volume/this.niveau) * 5.14/this.poids * this.sexe) - .015 * this.heurePasser;
    console.log(this.BAC);
  }

}
