package model;

import java.time.LocalDate;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;
import java.util.Objects;

/**
 * Classe que representa un producte d'alimentació
 * Té data de caducitat i el seu preu varia segons els dies restants
 *
 * Constructor complet
 * Constructor còpia
 * Getters i Setters de la data de caducitat
 * toString
 * calcularPreuFinal
 *
 * @author Rasen
 */
public class Alimentacio extends Producte{

    /** ATRIBUTS */
    private LocalDate dataCaducitat; /** Data de caducitat del producte */

    /** CONSTRUCTORS */

    /**
     * Constructor complet
     * @param nom String que representa el nom del producte d'alimentació
     * @param preu double que representa el preu del producte d'alimentació
     * @param codiBarres String que representa el codi de barres del producte d'alimentació
     * @param dataCaducitat LocalData que representa la data de caducitat del producte d'alimentació
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Alimentacio(String nom, double preu, String codiBarres, LocalDate dataCaducitat) throws Exception{
        super(nom, preu, codiBarres);
        setDataCaducitat(dataCaducitat);
    }

    /**
     *
     * @param a producte d'alimentació a copiar
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Alimentacio(Alimentacio a) throws Exception{
        super(a.nom, a.preu, a.codiBarres);
        setDataCaducitat(a.dataCaducitat);
    }

    /** GETTERS */

    /**
     * Getter de la data de caducitat
     * @return LocalDate que representa la data de caducitat del producte d'alimentació
     */
    public LocalDate getDataCaducitat(){
        return dataCaducitat;
    }

    /** SETTERS */

    /**
     * Setter de la data de caducitat
     * @param dataCaducitat LocalDate que representa la nova data de caducitat del producte d'alimentació
     * @throws Exception si la data de caducitat és antiga o null
     */
    public void setDataCaducitat(LocalDate dataCaducitat) throws Exception{
        if(dataCaducitat==null)
            throw new Exception("La data de caducitat no pot ser null");
        this.dataCaducitat = dataCaducitat;
    }

    /** ALTRES MÈTODES */

    /**
     * Converteix el producte d'alimentació en un String
     * @return String que representa el producte d'alimentació
     */
    @Override
    public String toString() {
        return "Alimentacio{" +
                "nom='" + nom + '\'' +
                ", preuBase=" + preu +
                ", codiBarres='" + codiBarres + '\'' +
                ", dataCaducitat=" + dataCaducitat +
                '}';
    }

    /**
     * Calcula el preu final segons els dies que falten per caducar
     * @return double que representa el preu total del producte d'alimentació
     */
    public double calcularPreuFinal(){
        long dies = ChronoUnit.DAYS.between(LocalDate.now(), dataCaducitat); //diferència de dies entre la data actual i la de caducitat -> long
        if (dies < 0) dies = 0; //si ja ha caducat fem que sigui 0 (per la divisió de la fórmula)
        return preu-preu*(1.0/(dies+1)) + (preu*0.1); //el preu varia en funció dels dies que falten per caducar segons la fórmula descrita
    }
}
