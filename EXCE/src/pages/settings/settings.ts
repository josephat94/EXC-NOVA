import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MapsProvider } from '../../providers/maps/maps';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
lang='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public _MapService: MapsProvider, public alertCtrl: AlertController) {
    this._MapService.getLang().then((res:any)=>{
      this.lang=res;
      })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
cambiarIdioma(){
  let title=this.lang=='esp'?'Cambiar idioma': 'Change language';
  let text=this.lang=='esp'?'Selecciona tu idioma': 'Select your language';
  let alert = this.alertCtrl.create({
    title: title,
    message: text,
    buttons: [
      {
        text: 'Español',
       
        handler: () => {
    
          this.storage.set('lang', 'esp');
          this.lang="esp"
          this._MapService.setLang(true);
        }
      },
      {
        text: 'English',
        handler: () => {
          this.storage.set('lang', 'eng');
          this.lang="eng"
          this._MapService.setLang(true);
  
        }
      }
    ]
  });
  alert.present();

}
}
