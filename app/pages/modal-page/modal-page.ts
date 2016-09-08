import {Component} from '@angular/core';
import {Platform, NavController, ModalController, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-page/modal-page.html'
})
export class SaveModal {
  constructor(private navCtrl: NavController, public viewCtrl: ViewController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
