import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer'
import { HomePage } from '../pages/home/home';
import { LangPage } from '../pages/lang/lang';
import { MapPage } from '../pages/map/map';
import { Storage } from '@ionic/storage';
import { MapsProvider } from '../providers/maps/maps';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MapPage;
  title="Maps"
  lang="";
  SplashScreen:boolean=true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public _MapService: MapsProvider, public storage: Storage) {
  platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     this.storage.get('lang').then((val) => {
      console.log('Your lang is->', val);

      if(val){
        this.lang=val;
        this.rootPage=MapPage;

      }else{
        this.rootPage=LangPage;
      }
    });

      statusBar.styleDefault();
      splashScreen.hide();
   //   timer(1000).subscribe(()=>this.SplashScreen=false)
      timer(5700).subscribe(()=>this.SplashScreen=false)
    });
  }
}
