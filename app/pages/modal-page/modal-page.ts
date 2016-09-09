import {Component} from '@angular/core';
import {Platform, NavController, ModalController, ViewController, AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-page/modal-page.html'
})
export class SaveModal {
  constructor(private navCtrl: NavController, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }
  showComment() {
    let alert = this.alertCtrl.create({
      title: 'Comment',
      subTitle: ` Lorem Ipsum passages and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum`,

      buttons: ['OK']
    });
    alert.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
