package model;

/**
 * Classe que representa un producte tèxtil
 * Conté la composició del material
 *
 * Constructor complet
 * Constructor còpia
 * Getters i Setters de la composició
 * toString()
 *
 * @author Rasen
 */
public class Textil extends Producte{

    /** ATRIBUTS */
    private String composicio; /** Composició del teixit */

    /** CONSTRUCTORS */
    /**
     * Constructor complet
     * @param nom String que representa el nom del producte electrònic
     * @param preu double que representa el preu del producte electrònic
     * @param codiBarres String que representa el codi de barres del producte electrònic
     * @param composicio String que representa la composició del producte tèxtil
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Textil(String nom, double preu, String codiBarres, String composicio) throws Exception {
        super(nom, preu, codiBarres);
        setComposicio(composicio);
    }

    /**
     * Constructor còpia
     * @param t producte tèxtil a copiar
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Textil(Textil t) throws Exception {
        super(t.nom, t.preu, t.codiBarres);
        setComposicio(t.composicio);
    }

    /** GETTERS */
    /**
     * Getter de la composició
     * @return String que representa la composició del producte tèxtil
     */
    public String getComposicio() {
        return composicio;
    }

    /** SETTERS */
    /**
     * Setter de la composició
     * @param composicio String que representa la nova composició del producte tèxtil
     * @throws Exception si la composició és null o buit
     */
    public void setComposicio(String composicio) throws Exception {
        if (composicio == null || composicio.trim().isEmpty())
            throw new Exception("La composició no pot ser buida");
        this.composicio = composicio;
    }

    /** ALTRES MÈTODES */
    /**
     * Converteix el producte tèxtil en un String
     * @return String que representa el producte tèxtil
     */
    @Override
    public String toString() {
        return "Textil{" +
                "nom='" + nom + '\'' +
                ", preuBase=" + preu +
                ", codiBarres='" + codiBarres + '\'' +
                ", composicio='" + composicio + '\'' +
                '}';
    }
}
