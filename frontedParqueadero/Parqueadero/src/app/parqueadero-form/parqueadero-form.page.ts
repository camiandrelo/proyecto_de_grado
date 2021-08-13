import { Component, OnInit } from '@angular/core';
import {ParqueaderoService} from '../service/parqueadero.service';

@Component({
  selector: 'app-parqueadero-form',
  templateUrl: './parqueadero-form.page.html',
  styleUrls: ['./parqueadero-form.page.scss'],
})
export class ParqueaderoFormPage implements OnInit {

  constructor(private parqueaderoService:ParqueaderoService) { }

  ngOnInit() {
  }
  saveVehiculo(placa,tipovehiculo){
    console.log(placa.value,tipovehiculo.value);
    this.parqueaderoService.insertVehicleParqueadero(placa.value,tipovehiculo.value).
    subscribe(res=>alert("vehiculo insertado correctamente"),err =>  alert(err.error.error));
  }
}
