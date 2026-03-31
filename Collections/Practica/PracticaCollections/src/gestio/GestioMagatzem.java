package gestio;

import model.*;

import java.util.*;

/**
 * Classe que gestiona el magatzem de productes
 * Utilitza un Map per guardar els productes
 * La clau serà el codi de barres i el valor serà el producte
 */
public class GestioMagatzem {

    /** ATRIBUTS */
    private Map<String, Producte> magatzem; /** Map de productes del magatzem: informació del producte */
    private Map<String, Integer> stock; /** Map amb l'stock de cada producte: unitats de cada producte */
    private List<String> historialTiquets; /** Llista d'historials de tiquets */

    /** CONSTRUCTORS */
    /** Constructor per defecte */
    public GestioMagatzem(){
        magatzem = new HashMap<>();
        stock = new HashMap<>();
        historialTiquets = new ArrayList<>();
    }

    /** MÈTODES */
    /**
     * Afageix un producte al magatzem
     * @param p producte a afegir
     * @throws Exception si el producte és null o si ja existeix el codi de barres
     */
    public void afegirProducte(Producte p) throws Exception{
        if(p==null) throw new Exception("El producte no pot ser null"); //comprovem que producte no sigui null
        String codi = p.getCodiBarres();
        if(magatzem.containsKey(codi)){ //si el producte ja existeix al magatzem, augmentem l'stock
            stock.put(codi, stock.get(codi)+1);
        }
        else{ //si el producte no existeix, afegim el producte al magatzem i posem l'stock inicial
            magatzem.put(codi,p);
            stock.put(codi,1);
        }
    }

    /**
     * Busca un producte pel codi de barres (sense streams)
     * @param codi codi de barres
     * @return Producte o null si no existeix
     */
    public Producte buscarPerCodi(String codi){
        return magatzem.get(codi); //Perquè la clau ja és el codi
    }

    /**
     * Busca un producte pel codi de barres (fem servir streams)
     * @param codi codi de barres
     * @return Producte o null si no existeix
     */
    public Producte buscarPerCodiStream(String codi){
        return magatzem.values() //obtenim tots els productes del Map
                .stream()  //convertim la col·lecció en un stream
                .filter(p -> p.getCodiBarres().equalsIgnoreCase(codi)) //filtrem només el producte que té aquest codi
                .findFirst() //agafem el primer resultat trobat
                .orElse(null); //si no existeix, retornem null
    }

    /**
     * Retorna una llista amb tots els productes d'alimentació ordenats per data de caducitat
     */
    public List<Alimentacio> getAlimentacioOrdenada(){
        List<Alimentacio> llista = new ArrayList<>();

        magatzem.values().forEach(p -> {
            if (p instanceof Alimentacio) {  //filtrem només els productes d'alimentació
                llista.add((Alimentacio) p); //fem un cast perquè Java sàpiga que és un producte Alimentacio
            }
        });

        //ordenem per data de caducitat
        llista.sort(new Comparator<Alimentacio>() { //estem creant una classe anònima
            @Override
            public int compare(Alimentacio a1, Alimentacio a2) {
                return a1.getDataCaducitat().compareTo(a2.getDataCaducitat());
            }
        });

        return llista;
    }

    /**
     * Retorna una llista amb tots els productes tèxtils ordenats per la seva composició
     */
    public List<Textil> getTextilsOrdenats(){
        List<Textil> llista = new ArrayList<>();

        magatzem.values().forEach(p -> {
            if (p instanceof Textil) { //filtrem només els productes tèxtils
                llista.add((Textil) p); //fem un cast perquè Java sàpiga que és un producte Textil
            }
        });

        llista.sort(new ComparatorTextil()); //ordenem per composició utilitzant la classe Comparator que implementa el mètode compare()

        return llista;
    }

    /**
     * Retorna una llista amb tots els productes electrònics ordenats per dies de garantia
     */
    public List<Electronica> getElectronicaOrdenada(){
        List<Electronica> llista = new ArrayList<>();

        magatzem.values().forEach(p -> {
            if (p instanceof Electronica) { //filtrem només els productes electrònics
                llista.add((Electronica) p); //fem un cast perquè Java sàpiga que és un producte Electronica
            }
        });

        //ordenem per dies de garantia
        llista.sort(new Comparator<Electronica>() { //estem creant una classe anònima
            @Override
            public int compare(Electronica e1, Electronica e2) {
                return Integer.compare(e1.getDiesGarantia(), e2.getDiesGarantia());
            }
        });

        return llista;
    }

    /**
     * Guarda un tiquet a l'historial
     * @param tiquet String que representa el tiquet a afegir
     */
    public void guardarTiquet(String tiquet){
        historialTiquets.add(tiquet);
    }

    /**
     * Getter de l'historial de tiquets
     */
    public List<String> getHistorialTiquets(){
        return historialTiquets;
    }

    /**
     * Getter stock d'un product
     * @param codi codi del producte
     * @return int que representa el nombre d'unitats del producte
     */
    public int getStock(String codi) {
        if(stock.containsKey(codi)){
            return stock.get(codi);
        }else{
            return 0;
        }
        //return stock.getOrDefault(codi, 0); "Dona’m el valor associat a la clau… i si no existeix, dona’m 0”
    }
}
