import {Component} from '@angular/core';
import {Platform, ModalController, ViewController, MenuController, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { SaveModal } from './pages/modal-page/modal-page';

@Component({
  template: `
  <ion-menu [content]="appContent">
  <ion-content>
    <ion-list>
      <button menuClose ion-item detail-none full>FAQ</button>
      <button menuClose ion-item detail-none full>www.first-lego-league.org</button>
      <button menuClose ion-item detail-none full>Mission Video</button>
      <button menuClose ion-item detail-none full >Imprint</button>
      <button menuClose ion-item detail-none full (click)="saveModal()">Saved</button>
    </ion-list>
  </ion-content>
</ion-menu>
  <ion-nav #appContent [root]="rootPage"></ion-nav>`
})

export class App {

  private rootPage: any;

  constructor(private platform: Platform, public menuCtrl: MenuController, public modalCtrl: ModalController ) {
    this.rootPage = HomePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  saveModal() {
    let modal = this.modalCtrl.create(SaveModal);
    modal.present();
  }


}

ionicBootstrap(App);
