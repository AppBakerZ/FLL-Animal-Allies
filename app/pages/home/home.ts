import {Component} from '@angular/core';
import {Platform, NavController, AlertController} from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController, public alertCtrl: AlertController) {
  }
  showInfo() {
    let alert = this.alertCtrl.create({
      title: 'Dummy Friend!',
      subTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley
       of type and scrambled it to make a type specimen book
      It has survived not only five centuries but also the leap into electronic
       typesetting remaining essentially unchanged.
      It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum`,

      buttons: ['OK']
    });
    alert.present();
  }
  saveScore() {
    let prompt = this.alertCtrl.create({
      title: 'Save Score',
      inputs: [
        {
          name: 'Comment (optional)',
          placeholder: 'Comment (optional)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  referencePoints() {
    let prompt = this.alertCtrl.create({
      title: 'Reference Points',
      subTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley`,
      inputs: [
        {
          name: 'Reference Points ' +
          ')',
          placeholder: 'Reference Points'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  showReset() {
    let prompt = this.alertCtrl.create({
      title: 'Save Score',
      message: "The Timer and all mision will be reseted",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log('Reset clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  otherShare(){
    SocialSharing.share("Genral Share Sheet",null/*Subject*/,null/*File*/ /*,"http://pointdeveloper.com"*/)
      .then(()=>{
      },
      ()=>{
      })

  }

}
