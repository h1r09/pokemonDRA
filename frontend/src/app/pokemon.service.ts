import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  // Métodos para obetener los pokemon desde la API

  // Método para obtener todos los pokemons, según veo en la API de pokeapi en 2021 el total de pokemons es 898 y de 18 tipos diferntes
  getAllPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  }

  getSomePokemons(limit: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  }

  // Método para obtener un pokemon por su id
  getPokemonById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  // Método para obtener un pokemon por su nombre
  getPokemonByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  // Método para obtener todos los tipos de pokemon
  getAllTypes() {
    return this.http.get('https://pokeapi.co/api/v2/type/');
  }

  // Método para obtener un tipo de pokemon por su id
  getTypeById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/type/${id}`);
  }

  // Método para obtener un tipo de pokemon por su nombre
  getTypeByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/type/${name}`);
  }

}
