package com.hunor.pokemon.services;

import java.util.ArrayList;
import java.util.List;

import com.hunor.pokemon.dto.EstrategiaDto;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EstrategiaService {
    
    public List<EstrategiaDto> retrieveFrase() {
        List<EstrategiaDto> estrategias = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://alfabetajuega.com/guia/pokemon-go-mejores-contra-tipo-agua-psiquico-veneno-roca").get();
            // Element tbody = webPage.getElementById("covid-19-cases-deaths-and-rates-by-location").getElementsByTag("tbody").get(0);
            Element tbody = webPage.getElementsByTag("tbody").get(0);
            List<Element> rows = tbody.children().subList(2, tbody.children().size());

            for (Element row : rows) {
                Element tipo = row.getElementsByTag("td").get(0);
                Element efectivoContra = row.getElementsByTag("td").get(1);
                Element debilContra = row.getElementsByTag("td").get(2);

                estrategias.add(new EstrategiaDto(tipo.text(), efectivoContra.text(), debilContra.text()));
            }

            return estrategias;
        } catch (Exception e) {
             e.printStackTrace();
        }

        return null;
    }

}
