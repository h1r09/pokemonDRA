import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstrategiaService {
  private url = 'http://localhost:8081/api/estrategia/data';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }

  // Devuelve las frases guardadas en la base de datos
  getEstrategias(): Observable<any> {
    return this.http.get(this.url);
  }
}
