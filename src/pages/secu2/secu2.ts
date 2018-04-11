import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TextToSpeech} from "@ionic-native/text-to-speech";

/**
 * Generated class for the Secu2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secu2',
  templateUrl: 'secu2.html',
})
export class Secu2Page {

  text:string;
  rate: number;
  locale:string;

  constructor(private tts:TextToSpeech ,public navCtrl: NavController, public navParams: NavParams) {
    this.text = ' En psychanalyse, le concept de l\'Inconscient, au sens descriptif, désigne les contenus (représentants de la pulsion), régis par les processus primaires, et inaccessibles au champ actuel de la conscience. Au sens topique, l\'inconscient désigne un des trois systèmes (Inc/Prec/Cons) de l\'appareil psychique constitué de contenus refoulés à la suite de l’action du refoulement1.';
    this.locale = 'fr-FR';
    this.rate = 10;
  }

  playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Secu2Page');
  }

}
