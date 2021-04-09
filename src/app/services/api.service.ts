import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = environment.api;
  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get( `${this.url}historial`)
  }

  getBanks() {
    return this.http.get( `${this.url}bancos`)
  }

  getUsers() {
    return this.http.get( `${this.url}usuario`)
  }

  postHistory( body: object ) {
    return this.http.post( `${this.url}historial`, body)
  }

  postUser( body: object ) {
    return this.http.post( `${this.url}usuario`, body)
  }
}
