import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer'
import { HomePage } from '../pages/home/home';
import { LangPage } from '../pages/lang/lang';
import { MapPage } from '../pages/map/map';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MapPage;
  title="Maps"
  SplashScreen:boolean=true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(1000).subscribe(()=>this.SplashScreen=false)
     // timer(5700).subscribe(()=>this.SplashScreen=false)
    });
  }
}
