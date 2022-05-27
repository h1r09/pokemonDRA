package com.hunor.pokemon.dto;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EstrategiaDto {

    public String tipo;
    public String efectivoContra;
    public String debilContra;

    public EstrategiaDto() {
    }

    public EstrategiaDto(String tipo, String efectivoContra, String debilContra) {
        this.tipo = tipo;
        this.efectivoContra = efectivoContra;
        this.debilContra = debilContra;
    }

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