import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPokemonComponent } from './listado-pokemon.component';

describe('ListadoPokemonComponent', () => {
  let component: ListadoPokemonComponent;
  let fixture: ComponentFixture<ListadoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
