import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueaderoFormPageRoutingModule } from './parqueadero-form-routing.module';

import { ParqueaderoFormPage } from './parqueadero-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueaderoFormPageRoutingModule
  ],
  declarations: [ParqueaderoFormPage]
})
export class ParqueaderoFormPageModule {}
