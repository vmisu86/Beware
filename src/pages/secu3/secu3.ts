import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TextToSpeech} from "@ionic-native/text-to-speech";

/**
 * Generated class for the Secu3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secu3',
  templateUrl: 'secu3.html',
})
export class Secu3Page {

  text:string;
  rate: number;
  locale:string;

  constructor(private tts:TextToSpeech ,public navCtrl: NavController, public navParams: NavParams) {
    this.text ='En cas de saignement,' +
               ' Evitez, si possible, tout contact avec le sang de la victime ;' +
                ' demandez-lui de comprimer elle-même sa blessure.' +
                'Sinon, exercez une pression directement sur la plaie avec vos mains protégées ' +
                'Allongez la victime en position horizontale.' +
                'Demandez à une personne présente d\'alerter les secours ' +
                'ou faites-le vous-même si vous êtes seul.' +
                'Poursuivez la compression sur la plaie jusqu\'à l\'arrivée des secours.';
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
    console.log('ionViewDidLoad Secu3Page');
  }

}
