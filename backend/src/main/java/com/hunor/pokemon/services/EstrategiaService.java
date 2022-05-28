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

    public List<EstrategiaDto> retrieveEstrategia() {
        // Se crea una lista de tipo EstrategiaDto para almacenar los datos de las
        // estrategias
        List<EstrategiaDto> estrategias = new ArrayList<>();
        // Se crea una variable de tipo Document para almacenar el contenido de la
        // página web
        try {
            Document webPage = Jsoup
                    .connect("https://alfabetajuega.com/guia/pokemon-go-mejores-contra-tipo-agua-psiquico-veneno-roca")
                    .get();
            // Se obtiene el elemento tbody de la página web ya que no tiene un id, pero es
            // la única tabla de la página web.
            Element tbody = webPage.getElementsByTag("tbody").get(0);
            // Se obtiene la lista de elementos tr de la página web
            List<Element> rows = tbody.children().subList(2, tbody.children().size());

            // Se recorre la lista de elementos tr de la página web para obtener los datos
            // de las estrategias
            for (Element row : rows) {

                Element tipo = row.getElementsByTag("td").get(0);
                Element efectivoContra = row.getElementsByTag("td").get(1);
                Element debilContra = row.getElementsByTag("td").get(2);
                // Se añaden los datos de las estrategias a la lista de estrategias
                estrategias.add(new EstrategiaDto(tipo.text(), efectivoContra.text(), debilContra.text()));
            }

            return estrategias;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

}
