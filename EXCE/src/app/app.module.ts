import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LangPage } from '../pages/lang/lang';
import { MapPage } from '../pages/map/map';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from '../providers/maps/maps';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage, LangPage, MapPage
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LangPage, MapPage
  ],
  providers: [
    StatusBar,Geolocation,HTTP,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapsProvider
  ]
})
export class AppModule {}
