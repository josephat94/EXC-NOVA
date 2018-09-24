import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MapsProvider } from '../../providers/maps/maps';

/**
 * Generated class for the SucursalModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sucursal-modal',
  templateUrl: 'sucursal-modal.html',
})
export class SucursalModalPage {
Sucursal:any;
phones:any;lang=""
  constructor(public navCtrl: NavController, public navParams: NavParams, public _MapService: MapsProvider,public viewCtrl: ViewController ) {
    this._MapService.getLang().then((res:any)=>{
      this.lang=res;
      })
    this.Sucursal= navParams.get("space");
    console.log(JSON.stringify(this.Sucursal));
  this.phones= this.Sucursal.phone.split("y");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucursalModalPage');
  }


  regresar(){
  
this.viewCtrl.dismiss(null);  

  }

  trazarRuta(){
    let data= {'space': this.Sucursal}

    this.viewCtrl.dismiss(data);  

  }
}
