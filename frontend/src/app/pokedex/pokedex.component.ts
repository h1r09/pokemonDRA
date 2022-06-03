import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemon?: Pokemon;
  pokemons: any[] = [];
  private AllPokemons: any = this.pokemons;
  name: string | undefined;
  vistos: any[] = [];

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

  constructor(private http: PokemonService, private backHttp: BackendService) {}

  ngOnInit(): void {
    this.http.getSomePokemons(20).subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.http
          .getPokemonByName(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
          });
      });
    });
    this.getPokemons();
  }

  searchPokemon(name: string) {
    this.pokemons = this.AllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  mostrarTodos(): void {
    this.pokemons = [];
    this.http.getAllPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.http
          .getPokemonByName(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
          });
      });
    });
    this.AllPokemons = this.pokemons;
  }

  comprobarVisto(pokemon: any) {
    if (this.vistos.includes(pokemon.id)) {
      return true;
    } else {
      return false;
    }
  }
  getPokemons(): void {
    this.vistos = [];
    this.backHttp.getViewedPokemons().subscribe((response: any) => {
      response.forEach((pokemon: any) => {
        this.vistos.push(pokemon.id);
      });
    });
  }

  savePokemon(id: number): void {
    this.backHttp.savePokemon({ id } as Pokemon).subscribe((poke) => {
      this.vistos.push(poke);
    });
    // window.location.reload();
    setTimeout(() => {
      this.getPokemons();
    }, 1000);
  }

  removePokemon(pokemon: any): void {
    this.backHttp
      .removePokemon(pokemon.id)
      .subscribe();
      setTimeout(() => {
        this.getPokemons();
      }, 1000);
  }
}
