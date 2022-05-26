package com.hunor.pokemon.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "pokemon")

public class Pokemon {
    
    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
  
    // Creo un id secundario para el idPokemon ya que si empleo el id de la tabla pokemon, me ha dado varios errores.
    // @NotNull(message = "Name is mandatory")
    // private Number idPokemon;

    public Pokemon() {}

    public Pokemon(int id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    // public Number getIdPokemon() {
    //     return this.idPokemon;
    // }

    // public void setIdPokemon(int idPokemon) {
    //     this.idPokemon = idPokemon;
    // }


    @Override
    public String toString() {
        return "Pokemon [idPokemon= " + id + "]";
    }
}
