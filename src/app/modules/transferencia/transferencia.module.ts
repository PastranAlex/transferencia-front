import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciaRoutingModule } from './transferencia-routing.module';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeTransferenciaComponent } from './home-transferencia/home-transferencia.component';


@NgModule({
  declarations: [
    NuevoDestinatarioComponent,
    NuevaTransferenciaComponent,
    HomeTransferenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransferenciaRoutingModule
  ]
})
export class TransferenciaModule { }
