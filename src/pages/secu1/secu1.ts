import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TextToSpeech} from "@ionic-native/text-to-speech";


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
    this.text = 'Signalez-vous et protégez vos passagers.' +
                'Enfilez un gilet rétro-réfléchissant.' +
                'sortez de la voiture et faites sortir vos passagers.  ' +
                'Veillez à couper le contact des véhicules accidentés et à serrer le frein à main.' +
                'Éclairez les véhicules accidentés la nuit. ' +
                'Alerter les secours et renseignez leurs type et nombre de véhicules accidentés.' +
                'circonstances de l’accident, nombre et état apparent les blessés. ' +
                'Secourir les blessés en desserant les vêtements, en les couvrants.' +
                'Retirez de leurs bouches tous les corps étrangers ' +
                'et pratiquez les gestes de premiers secours si vous en avez les compétences.';
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
