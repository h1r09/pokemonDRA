package com.hunor.pokemon.controller;

import com.hunor.pokemon.dto.EstrategiaDto;
import com.hunor.pokemon.services.EstrategiaService;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/estrategia")
public class EstrategiaController {

    @Autowired(required = true)
    // Se declara una variable de tipo EstrategiaService para poder utilizar el
    // método retrieveEstrategia() de la clase EstrategiaService.
    private EstrategiaService estrategiaService;

    // Método que devuelve una lista de estrategias
    @GetMapping("/data")
    public ResponseEntity<List<EstrategiaDto>> getEstrategia() throws IOException {
        // Se llama al método del servicio
        List<EstrategiaDto> estrategiaData = estrategiaService.retrieveEstrategia();
        // Se devuelve la lista de estrategias
        return new ResponseEntity<>(estrategiaData, HttpStatus.OK);
    }

}
