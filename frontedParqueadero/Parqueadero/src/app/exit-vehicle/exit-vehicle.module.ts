import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitVehiclePageRoutingModule } from './exit-vehicle-routing.module';

import { ExitVehiclePage } from './exit-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitVehiclePageRoutingModule
  ],
  declarations: [ExitVehiclePage]
})
export class ExitVehiclePageModule {}
