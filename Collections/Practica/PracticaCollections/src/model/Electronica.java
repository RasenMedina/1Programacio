package model;

import java.util.Objects;

/**
 * Classe que representa un producte electrònic
 * Té uns dies de garantia i el seu preu varia segons els dies de garantia
 *
 * Constructor complet
 * Constructor còpia
 * Getters i Setters dels dies de garantia
 * toString
 * calcularPreuFinal
 *
 * @author Rasen
 */
public class Electronica extends Producte{
    /** ATRIBUTS */
    private int diesGarantia; /** Dies de garantia */

    /** CONSTRUCTORS */
    /**
     * Constructor complet
     * @param nom String que representa el nom del producte electrònic
     * @param preu double que representa el preu del producte electrònic
     * @param codiBarres String que representa el codi de barres del producte electrònic
     * @param diesGarantia int que representa els dies de garantia
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Electronica(String nom, double preu, String codiBarres, int diesGarantia) throws Exception{
        super(nom, preu, codiBarres);
        setDiesGarantia(diesGarantia);
    }

    /**
     * Constructor còpia
     * @param e producte electrònic a copiar
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Electronica(Electronica e) throws Exception{
        super(e.nom, e.preu, e.codiBarres);
        setDiesGarantia(e.diesGarantia);
    }

    /** GETTERS */

    /**
     * Getter dels dies de garantia
     * @return int que representa els dies de garantia del producte tèxtil
     */
    public int getDiesGarantia() {
        return diesGarantia;
    }

    /** SETTERS */

    /**
     * Setter dels dies de garantia
     * @param diesGarantia int que representa els nous dies de garantia del producte tèxtil
     * @throws Exception si els dies de garantia són negatius
     */
    public void setDiesGarantia(int diesGarantia) throws Exception{
        if(diesGarantia<0)
            throw new Exception("Els dies de garantia no poden ser negatius");
        this.diesGarantia = diesGarantia;
    }

    /** ALTRES MÈTODES */

    /**
     * Converteix el producte electrònic en un String
     * @return String que representa el producte electrònic
     */
    @Override
    public String toString(){
        return "Electronica{" +
                "nom='" + nom + '\'' +
                ", preuBase=" + preu +
                ", codiBarres='" + codiBarres + '\'' +
                ", diesGarantia=" + diesGarantia +
                '}';
    }

    /**
     * Calcula el preu final segons la garantia
     * @return double que representa el preu total del producte electrònic
     */
    public double calcularPreuFinal(){
        return preu + preu * (diesGarantia / 365.0) * 0.1; //el preu varia en funció dels dies que té de garantia segons la fórmula descrita
    }
}
