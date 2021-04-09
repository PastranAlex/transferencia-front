import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit, OnDestroy {
  public historyData: any;
  public historySubs!: Subscription;
  public loading = false;
  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.getHistorial();

  }

  getHistorial(){
    this.loading = true;
    this.historySubs = this.api.getHistory().subscribe(data => {
      this.historyData = data
      this.loading = false;
    })
  }

  ngOnDestroy() {
    this.historySubs.unsubscribe()
  }

}
