import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private url = 'http://localhost:8081/api/pokemon'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getViewedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  //obtengo un array de ids de pokemons de la api en un array de ids de pokemons
  getViewedPokemonsIds(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  // guardo un pokemon en la api con el id del pokemon que se le pasa
  savePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.url, pokemon, this.httpOptions);
  }

  // se elimina un pokemon de la api con el id del pokemon que se le pasa
  removePokemon(id: number): Observable<Pokemon> {
    return this.http.delete<Pokemon>(this.url + '/' + id, this.httpOptions);
  }
}
