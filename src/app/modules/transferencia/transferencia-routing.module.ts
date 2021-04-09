import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTransferenciaComponent } from './home-transferencia/home-transferencia.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTransferenciaComponent
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent
  },
  {
    path: 'nuevo-destinatario',
    component: NuevoDestinatarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciaRoutingModule { }
