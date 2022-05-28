package com.hunor.pokemon.controller;

import com.hunor.pokemon.entity.Pokemon;
import com.hunor.pokemon.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

// Añadimos la anotación @RestController para indicar que esta clase es un controlador de servicios REST
// Añadimos la anotación @RequestMapping para indicar la ruta base del servicio REST
// Añadimos la anotación @CrossOrigin para permitir que se pueda acceder al servicio desde cualquier origen
@RestController
@RequestMapping("/pokemon")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class PokemonController {

    // Añadimos la anotación @Autowired para indicar que se debe inyectar el objeto
    // PokemonRepository
    @Autowired
    PokemonRepository repo;

    // Añadimos la anotacion @RequestMapping para indicar la ruta base del servicio
    // REST para obtener todos los pokemons de la base de datos
    @RequestMapping("")
    public ResponseEntity<Object> findPokemons() {
        return ResponseEntity.ok(repo.findAll());
    }

    // Añadimos la anotacion @PostMapping para indicar la ruta base del servicio
    // REST para crear un nuevo pokemon en la base de datos
    @PostMapping("")
    public Pokemon newPokemon(@RequestBody Pokemon pokemon) {
        return repo.save(pokemon);
    }

    // Añadimos la anotacion @GetMapping para indicar la ruta base del servicio REST
    // para obtener un pokemon de la base de datos
    @GetMapping("/{id}")
    public Pokemon one(@PathVariable long id) {
        return repo.findById(id).orElseThrow();
    }

    // Añadimos la anotacion @DeleteMapping para indicar la ruta base del servicio
    // REST para borrar un pokemon de la base de datos
    @DeleteMapping("/{id}")
    void deletePokemon(@PathVariable long id) {
        repo.deleteById(id);
    }
}
