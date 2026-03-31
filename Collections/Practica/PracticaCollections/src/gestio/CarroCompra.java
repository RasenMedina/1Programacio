package gestio;

import model.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Classe que representa el carro de la compra
 * Utilitza un Map per guardar els productes i la seva quantitat
 * El Map garanteix que no hi hagi productes duplicats, ja que la clau (Producte) és única (equals + hashCode)
 * Permet afegir, mostrar i buidar el carro
 *
 * Clau: Producte
 * Valor: Integer (unitats)
 *
 * afegirProducte()
 * calcularTotal()
 * mostrarCarro()
 * generarTiquet()
 * getCarro()
 * buidarCarro()
 *
 * @author Rasen
 */
public class CarroCompra {

    /** ATRIBUTS */
    private Map<Producte, Integer> carro; /** Map que guarda els productes i les seves unitats */

    /** CONSTRUCTORS */
    /**
     * Constructor per defecte
     */
    public CarroCompra(){
        carro = new HashMap<>();
    }

    /** MÈTODES */

    /**
     * Afegeix un producte al carro
     * Si el producte ja existeix en el carro, només augmentem les unitats
     * @param p producte a afegir
     */
    public void afegirProducte(Producte p) throws Exception{
        if(p==null) throw new Exception("El producte que es vol afegir no pot ser null"); //validem que és un producte
        if(carro.containsKey(p)){ //si el producte ja està en el carro
            carro.put(p,carro.get(p)+1); //busquem el valor associat al Map amb el get (unitats actuals) i augmentem les seves unitats en 1
        }
        else{ //si el producte encara no està en el carro
            carro.put(p,1); //el posem en el carro amb 1 unitat
        }
    }

    /**
     * Calcula el total a pagar del carro tot utilitzant el preu final de cada producte (amb expressió lambda)
     * @return double que representa el total a pagar
     */
    public double calcularTotal(){
        double[] total = {0}; //necessitem un array perquè les expressions lambda no permeten modificar variables locals
        carro.forEach((producte, unitats) -> { //per cada perella (Producte, unitats)
            total[0] += producte.calcularPreuFinal()*unitats; //afegim al total el preu final de cada tipus de producte per les unitats respectives
        });
        return total[0];
    }


    /**
     * Mostra el contingut del carro (sense preus).
     * Si hi ha productes repetits, es mostren agrupats
     * Sense expressions lambda per tal de poder retornar un missatge.
     * @return String amb el contingut del carro
     */
    public String mostrarCarro(){
        if(carro.isEmpty()){ //primer comprovem si el carro està buit
            return "El carro està buit";
        }
        String missatge="=== CARRO DE LA COMPRA ===\n";
        for(Map.Entry<Producte, Integer> entry : carro.entrySet()){ //entry és una parella (clau,valor) i entrySet és tot el conjunt de parelles (K,V)
            Producte p = entry.getKey(); //obtenim producte(getKey)
            int unitats = entry.getValue(); //obtenim la quantitat d'unitats(getValue)
            missatge += p.getNom()+" -> " + unitats+" unitats\n"; //obtenim el nom del producte(getNom)
        }
        return missatge;
    }

    /**
     * Genera el tiquet de compra per pantalla
     * Mostra producte, unitats, preu unitari i total
     * @return String amb el tiquet de la compra
     */
    public String generarTiquet(){
        if(carro.isEmpty()){ //primer comprovem si el carro està buit
            return "No hi ha productes al carro";
        }
        String missatge="=== TIQUET DE COMPRA ===\n";
        for (Map.Entry<Producte, Integer> entry : carro.entrySet()){ //entry és una parella (clau,valor) i entrySet és tot el conjunt de parelles (K,V)

            Producte p = entry.getKey(); //obtenim producte(getKey)
            int unitats = entry.getValue(); //obtenim la quantitat d'unitats(getValue)

            double preuUnitari = p.calcularPreuFinal(); //calculem el preu final del producte
            double subtotal = preuUnitari * unitats; //el subtotal del producte corresponent

            missatge += p.getNom() +
                    " | unitats: " + unitats +
                    " | preu unitari: " + String.format("%.2f", preuUnitari) + //2 decimals
                    " | total: " + String.format("%.2f", subtotal) + "\n"; //afegim una línia al tiquet
        }
        double total=calcularTotal(); //calculem el total a pagar
        missatge += "---------------------\n"; //separador visual
        missatge += "TOTAL: " + String.format("%.2f", total); //afegim el total amb 2 decimals

        return missatge;
    }

    /**
     * Retorna una còpia del Map del carro
     * @return Map<Producte, Integer>
     */
    public Map<Producte, Integer> getCarro() {
        return new HashMap<>(carro); //utilitzem el constructor de còpia de HashMap
    }

    /**
     * Buida el carro de la compra
     */
    public void buidarCarro(){
        carro.clear(); //mètode de Map (Collections): elimina tot el contingut
    }

}

/*
new HashMap<>() -> constructor de Map
Map.containsKey(valor) -> si el valor ja existeix en el Map
Map.put(clau, valor) -> actualitzar
Map.get(clau) -> dona el valor associat a una clau
forEach lambda -> recorregut modern
Map.Entry<clau, valor> entry -> recorregut clàssic
Map.entrySet() -> retorna una col.lecció de parelles clau, valor
entry.getKey() -> obtenir la clau (dins del bucle)
entry.getValue() -> obtenir el valor (dins del bucle)
clear() -> buidar
StringBuilder -> concatenar bé
 */