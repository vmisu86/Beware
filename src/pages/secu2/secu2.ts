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
    this.text = 'En cas de perte de connaissance : Allongez la personne sur le sol' +
                'Retirez ou desserez tout vêtement serré' +
                'Si vous le pouvez, basculez en arrière la tête de la personne et ' +
                'placez-la en position latérale de sécurité ; ';
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
