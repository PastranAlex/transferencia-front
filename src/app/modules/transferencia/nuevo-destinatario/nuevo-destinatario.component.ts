import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit, OnDestroy {
  public user: any;
  public bancos: any;
  public bancosSubs!: Subscription;
  public loading = false;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getDataBancos();
    this.setUserForm();
  }

  setUserForm() {
    this.user = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      rut: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      banco: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
    });
  }

  getDataBancos() {
    this.loading = true;
    this.bancosSubs = this.api.getBanks().pipe(take(1)).subscribe(bancos => {
      this.bancos = bancos
      this.loading = false;
    })

  }

  onSubmit() {
    this.loading = true;
    const bodyUSer = this.user.value;
    this.api.postUser(bodyUSer).pipe(take(1)).subscribe(data => {
      this.router.navigate(['/transferencia'])
    })
  }

  ngOnDestroy() {
    this.bancosSubs.unsubscribe()
  }

}
