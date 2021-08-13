import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitVehiclePage } from './exit-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ExitVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitVehiclePageRoutingModule {}
