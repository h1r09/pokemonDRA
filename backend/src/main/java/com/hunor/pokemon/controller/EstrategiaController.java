package com.hunor.pokemon.controller;

import com.hunor.pokemon.dto.EstrategiaDto;
import com.hunor.pokemon.services.EstrategiaService;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
    // Inyección del servicio de la clase DietaService
    private EstrategiaService estrategiaService;

    // Mapeo del endpoint /dieta
    @GetMapping("/data")
    public ResponseEntity<List<EstrategiaDto>> getDieta() throws IOException {
        // Se llama al método retrieveDieta() del servicio
        List<EstrategiaDto> estrategiaData = estrategiaService.retrieveFrase();
        // Se devuelve el resultado de la llamada al servicio
        return new ResponseEntity<>(estrategiaData, HttpStatus.OK);
    }

}
