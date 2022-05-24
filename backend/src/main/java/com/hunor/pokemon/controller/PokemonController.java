package com.hunor.pokemon.controller;

import com.hunor.pokemon.entity.Pokemon;
import com.hunor.pokemon.repository.PokemonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/pokemons")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PokemonController {
    
    @Autowired
    PokemonRepository repo;

    @RequestMapping("")
    public ResponseEntity<Object> findPokemons() {
        return ResponseEntity.ok(repo.findAll());
    }

    @PostMapping("")
    public Pokemon newPokemon(@RequestBody Pokemon pokemon) {
        return repo.save(pokemon);
    }

    @GetMapping("/{id}")
    public Pokemon one(@PathVariable long id) {
        return repo.findById(id).orElseThrow();
    }

    @DeleteMapping("/{id}")
    void deletePokemon(@PathVariable long id) {
        repo.deleteById(id);
    }
}
