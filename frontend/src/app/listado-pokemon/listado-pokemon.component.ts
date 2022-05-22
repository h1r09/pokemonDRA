import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service'; // Importamos el servicio de pokemon para poder usar sus métodos

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss'],
})
export class ListadoPokemonComponent implements OnInit {
  pokemons: any[] = [];
  private AllPokemons: any = this.pokemons;
  name: string | undefined;

  tipos: any[] = [
    'tipoNORMAL',
    'tipoFIGHTING',
    'tipoFLYING',
    'tipoPOISON',
    'tipoGROUND',
    'tipoROCK',
    'tipoBUG',
    'tipoGHOST',
    'tipoSTEEL',
    'tipoFIRE',
    'tipoWATER',
    'tipoGRASS',
    'tipoELECTRIC',
    'tipoPSYCHIC',
    'tipoICE',
    'tipoDRAGON',
    'tipoDARK',
    'tipoFAIRY',
  ];

  constructor(private http: PokemonService) {}

  ngOnInit(): void {
    // this.pokemons = [];
    this.http.getSomePokemons(20).subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.http
          .getPokemonByName(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
  }

  recargarPagina(): void {
    window.location.reload();
  }

  mostrarTodos(): void {
    this.pokemons = [];
    this.http.getAllPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.http
          .getPokemonByName(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
    this.AllPokemons = this.pokemons;
  }

  filtrarPokemon(id: number) {
    this.pokemons = [];
    this.http.getTypeById(id).subscribe((response: any) => {
      response.pokemon.forEach((pokemon: any) => {
        this.http
          .getPokemonByName(pokemon.pokemon.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          });
      });
    });
    this.AllPokemons = this.pokemons;
    // window.location.reload();
  }

  searchPokemon(name: string) {
    this.pokemons = this.AllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    });
  }
}
