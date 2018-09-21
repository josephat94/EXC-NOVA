import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Parametros } from '../../app/Parametros';
import { Observable } from 'rxjs';

/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapsProvider {

  constructor(public http: Http, public httClient: HttpClient) {
    console.log('Hello MapsProvider Provider');
  }



  GetSites(parametros: Parametros){
    let URLMetodo= "https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=1&channel=rc&serviceID=getNearBranches&lat="+parametros.lat+"&lng="+parametros.lng+"&radio=2&officeTypeId="+parametros.officeTypeId
    let Params= parametros;
    let body = JSON.stringify(Params);
    console.log("Service: ", URLMetodo, "Parametros", Params);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.httClient.head("Content-Type");
    return this.httClient.post(URLMetodo + '', body)
    .map(data =>data)
    // .map((products: Response) => products.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}