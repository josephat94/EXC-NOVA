import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MapPage } from '../map/map';

/**
 * Generated class for the LangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html',
})
export class LangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LangPage');
  }
setSpanish(){
  this.storage.set('lang', 'esp');
  this.navCtrl.setRoot(MapPage);

}

setEnglish(){
  this.storage.set('lang', 'eng');
  
  this.storage.get('lang').then((val) => {
    console.log('Your lang is->', val);

    if(val){
      this.navCtrl.setRoot(MapPage,{'lang': val});

    }else{
      this.navCtrl.setRoot(MapPage,{'lang': 'eng'});
    }
  });


}
}
