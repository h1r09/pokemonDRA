import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service'; // Importamos el servicio de pokemon para poder usar sus métodos

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss']
})
export class ListadoPokemonComponent implements OnInit {

  pokemons: any[] = []
  private AllPokemons:any = this.pokemons
  name: string | undefined

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


// result: { pokemon: {name: string;}}}}

// result: any

// result.pokemon.name

 filtrarPokemon(id: number){

 }


  searchPokemon(name: string) {
    this.pokemons = this.AllPokemons.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    })
  }
}
