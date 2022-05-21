import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ListadoPokemonComponent } from './listado-pokemon/listado-pokemon.component';
const routes: Routes = [

  { path: 'pokedex', component: PokedexComponent },
  { path: '', component: ListadoPokemonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
