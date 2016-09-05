import {Component} from '@angular/core';
import {Platform, MenuController, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: `
  <ion-menu [content]="appContent">
  <ion-content>
    <ion-list>
      <button menuClose ion-item detail-none>Close Menu</button>
    </ion-list>
  </ion-content>
</ion-menu>
  <ion-nav #appContent [root]="rootPage"></ion-nav>`
})

export class App {

  private rootPage: any;

  constructor(private platform: Platform, public menuCtrl: MenuController ) {
    this.rootPage = TabsPage;

     platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
