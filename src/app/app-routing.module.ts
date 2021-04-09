import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'historial',
    loadChildren: () => import('./modules/historial/historial.module').then(m => m.HistorialModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./modules/transferencia/transferencia.module').then(m => m.TransferenciaModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
