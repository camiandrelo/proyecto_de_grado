import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../service/parqueadero.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.page.html',
  styleUrls: ['./parqueadero.page.scss'],
})
export class ParqueaderoPage implements OnInit {
  parqueaderoo: any = [];
  lat: number;
  lon: number;
  constructor(private parqueaderoService: ParqueaderoService, public geolocation: Geolocation) { }

  ngOnInit() {
    this.parqueaderoService.getParqueadero().subscribe((res) => {
      this.parqueaderoo = res;
    }, (err) => console.log(err));
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon =  resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  editVehiculo(id: String){
    console.log(id);
  }
  ionViewWillEnter(){
    this.getGeolocation();
    this.parqueaderoService.getParqueadero().subscribe((res) => {
      this.parqueaderoo = res;
    }, (err) => console.log(err));
  }
}
