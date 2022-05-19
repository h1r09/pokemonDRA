import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service'; // Importamos el servicio de pokemon para poder usar sus métodos

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = []
  private AllPokemons:any = this.pokemons
  name: string | undefined
  vistos: any[] = [1,4,6,7,16]

  constructor(private http: PokemonService) { }

  ngOnInit(): void {
    this.http.getAllPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result: { name: string; }) => {
        this.http.getPokemonByName(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        });
      });
    })
  }

  searchPokemon(name: string) {
    this.pokemons = this.AllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    })
  }

  //compruebo si el pokemon ya esta en la lista de vistos
  comprobarVisto(pokemon: any){
    if(this.vistos.includes(pokemon.id)){
      return true
    }else{
      return false
    }
  }
}
