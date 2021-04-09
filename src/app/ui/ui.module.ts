import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { TransferenciaRoutingModule } from '../modules/transferencia/transferencia-routing.module';
import { HistorialRoutingModule } from '../modules/historial/historial-routing.module';


@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TransferenciaRoutingModule,
    HistorialRoutingModule
  ],
  exports:[
    NavBarComponent,
    TableComponent
  ]
})
export class UiModule { }
