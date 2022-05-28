package com.hunor.pokemon.dto;

import org.springframework.boot.autoconfigure.SpringBootApplication;

// Añadimos la anotación @SpringBootApplication para indicar que esta clase es una 
// aplicación Spring Boot y que se debe ejecutar con Spring Boot ya que si no no funcionará el proyecto de forma correcta.
@SpringBootApplication
public class EstrategiaDto {

    // Declaro las variables que voy a utilizar para almacenar los datos de la
    // estrategia
    public String tipo;
    public String efectivoContra;
    public String debilContra;

    public EstrategiaDto() {
    }

    // Constructor que recibe los datos de la estrategia
    public EstrategiaDto(String tipo, String efectivoContra, String debilContra) {
        this.tipo = tipo;
        this.efectivoContra = efectivoContra;
        this.debilContra = debilContra;
    }

    // Métodos getter y setter de las variables de la estrategia
    public String getTipo() {
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getEfectivoContra() {
        return this.efectivoContra;
    }

    public void setEfectivoContra(String efectivoContra) {
        this.efectivoContra = efectivoContra;
    }

    public String getDebilContra() {
        return this.debilContra;
    }

    public void setDebilContra(String debilContra) {
        this.debilContra = debilContra;
    }

}