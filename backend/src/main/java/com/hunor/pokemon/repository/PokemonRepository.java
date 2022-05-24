package com.hunor.pokemon.repository;

import com.hunor.pokemon.entity.Pokemon;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource
public interface PokemonRepository extends CrudRepository<Pokemon, Long> {
}
    

