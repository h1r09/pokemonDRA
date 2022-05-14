import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: any[] = []
  private AllPokemons:any = this.pokemons
  name: string | undefined

   pokemon: Pokemon = {
     id: 1,
     name: 'Bulbasaur',
     image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
     type: 'Grass'
   };


  constructor() { }

  ngOnInit(): void {

  }



}
