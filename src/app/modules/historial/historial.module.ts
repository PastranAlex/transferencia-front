import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './historial.component';
import { UiModule } from 'src/app/ui/ui.module';


@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    UiModule
  ]
})
export class HistorialModule { }
