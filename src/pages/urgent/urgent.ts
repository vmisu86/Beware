import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {Secu1Page} from "../secu1/secu1";
import {Secu2Page} from "../secu2/secu2";
import {Secu3Page} from "../secu3/secu3";


/**
 * Generated class for the UrgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urgent',
  templateUrl: 'urgent.html',
})
export class UrgentPage {
  secu1Page = Secu1Page;
  secu2Page = Secu2Page;
  secu3Page = Secu3Page

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private callNumber: CallNumber) {
    this.countryCode = navParams.get('id');
  }

  countryCode:string;
  countryName:string;
  postalCode:string;
  city:string;
  street:string;
  streetNumber:string;

  ionViewDidLoad() {
    this.countryCode = this.navParams.get('countryCode');
    this.countryName = this.navParams.get('countryName');
    this.postalCode = this.navParams.get('postalCode');
    this.city = this.navParams.get('city');
    this.street = this.navParams.get('street');
    this.streetNumber = this.navParams.get('streetNumber');
  }

  callPolice() {
    try {
      this.callNumber.callNumber("+33785924985", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    catch(e){
      console.error(e);
    }

  }

  callPompier() {
    this.callNumber.callNumber("18", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  callSAMU() {
    this.callNumber.callNumber("15", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }


  showConfirmPolice() {
    let confirm = this.alertCtrl.create({
      title: 'Appeler le numéro 17 ?',
      message: "Attention, en appelant ce numéro, vous confirmez que êtes maitre de vos actes et vous seul êtes responsable d'eventuels poursuites",
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.callPolice();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmPompier() {
    let confirm = this.alertCtrl.create({
      title: 'Appeler le numéro 18 ?',
      message: "Attention, en appelant ce numéro, vous confirmez que êtes maitre de vos actes et vous seul êtes responsable d'eventuels poursuites",
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.callPompier();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmSAMU() {
    let confirm = this.alertCtrl.create({
      title: 'Appeler le numéro 15 ?',
      message: "Attention, en appelant ce numéro, vous confirmez que êtes maitre de vos actes et vous seul êtes responsable d'eventuels poursuites",
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.callSAMU();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
