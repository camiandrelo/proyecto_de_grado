import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'parqueadero',
    pathMatch: 'full'
  },
  {
    path: 'parqueadero',
    loadChildren: () => import('./parqueadero/parqueadero.module').then( m => m.ParqueaderoPageModule)
  },
  {
    path: 'parqueadero-form',
    loadChildren: () => import('./parqueadero-form/parqueadero-form.module').then( m => m.ParqueaderoFormPageModule)
  },
  {
    path: 'exit-vehicle',
    loadChildren: () => import('./exit-vehicle/exit-vehicle.module').then( m => m.ExitVehiclePageModule)
  },
  {
    path: 'exit-vehicle/:id',
    loadChildren: () => import('./exit-vehicle/exit-vehicle.module').then( m => m.ExitVehiclePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
