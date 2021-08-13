import { Component, OnInit } from '@angular/core';
import {ParqueaderoService} from '../service/parqueadero.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exit-vehicle',
  templateUrl: './exit-vehicle.page.html',
  styleUrls: ['./exit-vehicle.page.scss'],
})
export class ExitVehiclePage implements OnInit {

  constructor( private router:Router,
               private parquaderoService: ParqueaderoService,
               private  activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      const id = paramMap.get('id');
      this.parquaderoService.getVehicleByID(id).
      subscribe(res=>alert(`debes pagar : ${res}`),err => console.log(err));
    });
  }

}
