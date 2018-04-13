import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ResultPage} from "../result/result";


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
    let cons =(this.volume*(this.niveau/100)*0.8);
    let demol=(this.sexe*this.heurePasser*0.85);
    this.BAC = ((cons-demol)/this.poids);



    let data = {
      bac: this.BAC.toFixed(2)
    };

    this.navCtrl.push(ResultPage, data);


  }

}
