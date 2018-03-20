import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { CallNumber } from '@ionic-native/call-number';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController
              // ,private callNumber: CallNumber
            ) {
  }

  callPolice() {
    // try {
    //   await this.callNumber.callNumber("001700", true)
    //   .then(res => console.log('Launched dialer!', res))
    //   .catch(err => console.log('Error launching dialer', err));
    // }
    // catch(e){
    //   console.error(e);
    // }

  }

  callPompier() {
    // this.callNumber.callNumber("001800", true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  }

  callSAMU() {
    // this.callNumber.callNumber("001500", true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrgentPage');
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
            // callPolice();
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
            // callPompier();
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
            //callSAMU();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
