import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {
  API= 'http://localhost:3005/';

  constructor( private http : HttpClient) {

  }

  getParqueadero(){
    return this.http.get(this.API);
  }

  insertVehicleParqueadero( placa : string , typesVehicleId : string){
      return this.http.post(this.API,{
        placa, typesVehicleId
      });
  }

  getVehicleByID(id :string){
    return this.http.post(`${this.API}tarifa`,{
      id
    });
  }
}
