import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { BackendService } from '../backend.service';
import { Pokemon } from '../pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss'],
})
export class ListadoPokemonComponent implements OnInit {
  pokemon?: Pokemon;
  pokemons: any[] = [];
  private AllPokemons: any = this.pokemons;
  name: string | undefined;

  //declaro e inicializo un array de id de pokemons
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
    // this.pokemons = [];
    // this.vistos = [];
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
          });
      });
    });
    this.AllPokemons = this.pokemons;
  }

  //  getVistos(): void {
  //   this.vistos = [];
  //   this.backHttp.getViewedPokemons().subscribe((response: any) => {
  //     response.pokemon.forEach((pokemon: any) => {
  //       this.vistos.push(pokemon.pokemon.id);
  //     });
  //   });
  // }

  searchPokemon(name: string) {
    this.pokemons = this.AllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  comprobarVisto(pokemon: any) {
    if (this.vistos.includes(pokemon.id)) {
      return true;
    } else {
      return false;
    }
  }

  comprobarVisto3(pokemon: any) {
    if (this.vistos.find((p) => p.id === pokemon.id)) {
      return true;
    }
    return false;
  }
  // comprobarVisto2(pokemon: any) {
  //   if (this.vistos2.find((p) => p === pokemon.id)) {
  //     return true;
  //   }
  //   return false;
  // }

  // addVisto(pokemon: any) {
  //   this.vistos2.push(pokemon.id);
  //   this.backHttp.save(pokemon).subscribe();
  // }

  //metodo para guardar un pokemon en la base de datos
  savePokemon(id: number): void {
    this.backHttp.savePokemon({ id } as Pokemon).subscribe((poke) => {
      this.vistos.push(poke);
    });
    window.location.reload();
  }

  removePokemon(pokemon: any): void {
    this.backHttp.removePokemon(pokemon.id).subscribe();
    window.location.reload();
  }

  getPokemons(): void {
    this.backHttp.getViewedPokemons().subscribe((response: any) => {
      response.forEach((pokemon: any) => {
        this.vistos.push(pokemon.id);
      });
    });
  }

  // getPokemons(): void {
  //   this.backHttp.getViewedPokemons().subscribe((response: any) => {
  //     this.vistos = response.results.map((pokemon: any) => {
  //       return {
  //         id: pokemon.id

  //       };
  //   });
  // } );}
}
