package com.hunor.pokemon.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pokemon")

public class Pokemon {

    // Añadimos la anotación @Id para indicar que es el identificador de la tabla
    // pokemon pero no se genera automáticamente, sino que se genera al insertar el
    // registro ya que es el mismo id que el id del pokemon.
    @Id
    private long id;

    public Pokemon() {
    }

    // Constructor que recibe el id del pokemon.
    public Pokemon(int id) {
        this.id = id;
    }

    // Getters y setters de los atributos de la clase.
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Pokemon [idPokemon= " + id + "]";
    }
}
