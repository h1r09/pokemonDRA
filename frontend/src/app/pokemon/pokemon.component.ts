import { Component, OnInit } from '@angular/core';
import { EstrategiaService } from '../estrategia.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  // Declaro los arrays de estrategias
  estrategias: any[] = [];

  constructor(private http: EstrategiaService) {}

  ngOnInit(): void {
    this.http.getEstrategias().subscribe((data) => {
      this.estrategias = data;
      console.log(this.estrategias);
    });
  }
}
