import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { COLORSMAPS } from './MapTheme';
import { MapsProvider } from '../../providers/maps/maps';
import { Parametros } from '../../app/Parametros';
import { HTTP } from '@ionic-native/http';
import { SucursalModalPage } from '../sucursal-modal/sucursal-modal';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  MyLat;
MyLng;
map:any;
ismapLoaded=false;
Arre100=[];
Arre300=[];
Arre400=[];
Arre500=[];
hasRoute=false;
lang="eng";
 directionsDisplay:any;

directionsService:any;
@ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private _MapService: MapsProvider, private http: HTTP, private modalCtrl: ModalController) {
  
  this._MapService.getLang().then((res:any)=>{
  this.lang=res;
  })
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.MyLat= resp.coords.latitude;
      this.MyLng= resp.coords.longitude;
      this.directionsService = new google.maps.DirectionsService();
console.log("Position->", this.MyLat,this.MyLng);
      this.map= this.loadMap();
      this.CreateMarker();
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
    console.log('ionViewDidLoad MapPage');


  }

  ngDoCheck() {
        if(this._MapService.getlangcha()==true){
          this._MapService.setLang(false);
          console.log("SE ha cambiado el idioma")
          this._MapService.getLang().then((res:any)=>{
            this.lang=res;
            
            })
        }
  }


  CreateMarker(){

let iconoInicio='./assets/imgs/person.png';
    var myLatLng = {lat: this.MyLat, lng: this.MyLng};
this.Consumir();

    var inicio = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Inicio de recorrido!', 
      icon: iconoInicio
    });


   
  }


  loadMap() {

    var map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 14,
      center: { lat: this.MyLat, lng: this.MyLng },
      disableDefaultUI: false,
      styles: COLORSMAPS,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
    });
        return map;
  }

centrar(){


  this.map.setCenter({lat: this.MyLat, lng: this.MyLng });
  
}

Consumir(){
  this.ismapLoaded=true;
  let params= new Parametros();
  params.appID= "Demo";
  params.appver= ""+21.0;
  params.platformver= ""+21.0;
  params.platform= "Android";
  params.lang=""+(this.lang=='esp'?1:0);
  params.channel= "rc";
  params.serviceID="getNearBranches";
  params.lat=""+this.MyLat;
  params.lng= ""+this.MyLng;
  params.radio= ""+2;
  params.officeTypeId=""+100
this.get100(params);



   
}

goSettings(){
  this.navCtrl.push(SettingsPage);
}

get100(parametros:Parametros){

  this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang="+parametros.lang+"&channel=rc&serviceID=getNearBranches&lat="+parametros.lat+"&lng="+parametros.lng+"&radio=10&officeTypeId="+parametros.officeTypeId, {}, {})
  .then((data:any) => {
    let res= JSON.parse(data.data);
    this.Arre100= res.BranchesData;


    console.log("Arre 100->"+JSON.stringify(this.Arre100))
   // this.Arre100= res.BranchesData;
    console.log("status",data.status);
    console.log("data->",data.data); // data received by server
    console.log(data.headers);

parametros.officeTypeId=""+300;
    this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang="+parametros.lang+"&channel=rc&serviceID=getNearBranches&lat="+parametros.lat+"&lng="+parametros.lng+"&radio=10&officeTypeId="+parametros.officeTypeId, {}, {})
    .then((data:any) => {
      let res2= JSON.parse(data.data);
      this.Arre300= res2.BranchesData;
  
   // this.Arre300= res2.BranchesData;
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);


      parametros.officeTypeId=""+400;
      this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang="+parametros.lang+"&channel=rc&serviceID=getNearBranches&lat="+parametros.lat+"&lng="+parametros.lng+"&radio=10&officeTypeId="+parametros.officeTypeId, {}, {})
      .then((data:any) => {
        let res3= JSON.parse(data.data);
      this.Arre400= res3.BranchesData;
   //     this.Arre400= res3.BranchesData;
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);


        parametros.officeTypeId=""+500;
        this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang="+parametros.lang+"&channel=rc&serviceID=getNearBranches&lat="+parametros.lat+"&lng="+parametros.lng+"&radio=2&officeTypeId="+parametros.officeTypeId, {}, {})
        .then((data:any) => {
          let res4= JSON.parse(data.data);
          this.Arre500= res4.BranchesData;
       //   this.Arre500= res4.BranchesData;
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

          this.DrawAllMarkers();
         
        })
        .catch(error => {
      
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
      
        });
    
      })
      .catch(error => {
    
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });


  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });



  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });

}



DrawAllMarkers(){

  for(let space of this.Arre100){

this.drawMarker(space);
  }
  for(let space of this.Arre300){

    this.drawMarker(space);
      }

      for(let space of this.Arre400){

        this.drawMarker(space);
          }

          for(let space of this.Arre500){

            this.drawMarker(space);
              }


}
  

drawMarker(space:any){


      var myLatLng = {lat: parseFloat(space.lat), lng: parseFloat(space.lng)};
      let icono = space['id ']==100?'./assets/imgs/pin_rojo.png':'./assets/imgs/pin_azul.png'


  console.log(myLatLng);
      var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: ""+space.name, 
            icon: icono
          });

     
          marker.addListener('click',()=>{

            this.abrirModal(space);
          })
          

    }

abrirModal(space:any){

  let modal= this.modalCtrl.create(SucursalModalPage,{space: space});
  modal.present();

  modal.onDidDismiss(data=>{
    if(data){

   this.directionsDisplay=  this.trazarRuta(data.space);
    }
  });
}

trazarRuta(space){

  if(this.directionsDisplay!=null){
    this.limparRuta();
  }



  this.hasRoute=true;
  var directionsService = new google.maps.DirectionsService();
let startcoords= this.MyLat+ ", "+ this.MyLng;
let endcoords=space.lat+ ", "+space.lng;
  var start = startcoords;
  var end = endcoords;


let directionsDisplay = new google.maps.DirectionsRenderer();
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }

directionsDisplay.setMap(this.map);

  var start = startcoords;
  var end = endcoords;
  var request = {
    origin:start, 
    destination:end,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsDisplay.setOptions({suppressMarkers: true});
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(response);
      var myRoute = response.routes[0];
      var txtDir = '';
      for (var i=0; i<myRoute.legs[0].steps.length; i++) {
        txtDir += myRoute.legs[0].steps[i].instructions+"<br />";
      }
   
    }

  });
return directionsDisplay;
}


limparRuta(){
  this.directionsDisplay.setMap(null)


this.hasRoute=false;

}
}
