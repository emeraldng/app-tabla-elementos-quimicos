import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  private elementos: any[] = [];

  constructor( private http: HttpClient) { }

  getElementos() {
   this.http.get('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
   .subscribe( elementos => {

   });
  }
}
