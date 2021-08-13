import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderoFormPage } from './parqueadero-form.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoFormPageRoutingModule {}
