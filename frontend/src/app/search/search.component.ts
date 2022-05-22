import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() emitSearch: EventEmitter<string> = new EventEmitter();
  name: string | undefined;
  constructor(private http: PokemonService) { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.emitSearch.emit(value);
  }
}
