import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit {
  public destinatarioSeleccionado: any;
  public destinatarios: any;
  public transferencia: any;
  public valido = false;
  public loading = false;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.setTransferenciaForm();
  }

  getUsuarios() {
    this.loading = true;
    this.api.getUsers().subscribe(data => {
      this.destinatarios = data;
      this.loading = false;

    })
  }

  setTransferenciaForm() {
    this.transferencia = this.fb.group({
      monto: [ null , [Validators.required]],
    });
  }

  selectDestinatario(evento: any) {
    this.destinatarioSeleccionado = this.destinatarios.find((destinatario: any )=> destinatario.rut === evento.target.value);
  }

  validateForm() {
    if ( this.transferencia.controls.monto.value > 0 && this.destinatarioSeleccionado ) { this.valido = true}
  }

  onSubmit() {
    this.loading = true;
    const bodyHistorial = {
      nombreDestinatario: this.destinatarioSeleccionado.nombre,
      rutDestinatario: this.destinatarioSeleccionado.rut,
      bancoDestinatario: this.destinatarioSeleccionado.banco,
      tipoCuentaDestinatario: this.destinatarioSeleccionado.tipoCuenta,
      monto: this.transferencia.controls.monto.value
    }
    this.api.postHistory(bodyHistorial).pipe(take(1)).subscribe(data => {
      this.router.navigate(['/historial'])
    })
  }

}
