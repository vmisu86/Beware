import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TextToSpeech} from "@ionic-native/text-to-speech";

/**
 * Generated class for the Secu1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secu1',
  templateUrl: 'secu1.html',
})
export class Secu1Page {

  text:string;
  rate: number;
  locale:string;


  constructor(private tts:TextToSpeech ,public navCtrl: NavController, public navParams: NavParams) {
    this.text = 'Des plans d\'opérations ont été présentés à Emmanuel Macron par les chefs militaires dans l\'éventualité où la France s\'associerait à des frappes contre Bachar al-Assad.';
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
    console.log('ionViewDidLoad Secu1Page');
  }

}
