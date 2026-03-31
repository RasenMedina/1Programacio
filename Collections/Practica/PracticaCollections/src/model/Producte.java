package model;

import java.util.Objects;

/**
 * Classe que representa un producte del supermercat
 * Conté els atributs comuns a tots els productes: nom, preu, codi de barres
 * Implementa Comparable per definir una ordenació natural
 *
 * Constructor complet
 * Constructor còpia
 * Getters i Setters de nom, preu, codi de barres
 * toString
 * equals
 * compareTo
 * hashCode
 * calcularPreuFinal
 *
 * @author Rasen
 */
public class Producte implements Comparable<Producte> {

    /** ATRIBUTS */
    protected String nom; /** Nom del producte */
    protected double preu; /** Preu base del producte */
    protected String codiBarres; /** Codi de barres (identificador únic) */

    /** CONSTRUCTORS */

    /**
     * Constructor complet
     * @param nom String que representa el nom del producte
     * @param preu double que representa el preu del producte
     * @param codiBarres String que representa el codi de barres del producte
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Producte(String nom, double preu, String codiBarres) throws Exception{
        inicialitzar(nom, preu, codiBarres);
    }

    /**
     * Constructor de còpia
     * @param p producte a copiar
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    public Producte(Producte p) throws Exception{
        inicialitzar(p.nom, p.preu, p.codiBarres);
    }

    /**
     * Inicialitza els atributs utilitzant els setters
     * @param nom String que representa el nom del producte
     * @param preu double que representa el preu del producte
     * @param codiBarres String que representa el codi de barres del producte
     * @throws Exception si ha tingut algun problema durant l'execució
     */
    private void inicialitzar(String nom, double preu, String codiBarres) throws Exception{
        setNom(nom);
        setPreu(preu);
        setCodiBarres(codiBarres);
    }

    /** GETTERS */

    /**
     * Getter de nom
     * @return String nom
     */
    public String getNom(){
        return nom;
    }
    /**
     * Getter de preu
     * @return double preu
     */
    public double getPreu(){
        return preu;
    }
    /**
     * Getter del codi de barres
     * @return String codiBarres
     */
    public String getCodiBarres(){
        return codiBarres;
    }

    /** SETTERS */

    /**
     * Setter de nom
     * @param nom String que representa el nou nom del producte
     * @throws Exception si el nom és null o buit
     */
    public void setNom(String nom) throws Exception{
        if(nom==null || nom.trim().isEmpty())
            throw new Exception("Nom del producte no vàlid");
        this.nom = nom.trim();
    }

    /**
     * Setter de preu
     * @param preu double que representa el nou preu del producte
     * @throws Exception si el preu és negatiu
     */
    public void setPreu(double preu) throws Exception{
        if(preu<0)
            throw new Exception("El preu no pot ser negatiu");
        this.preu = preu;
    }

    /**
     * Setter del codi de barres
     * @param codiBarres String que representa el nou codi de barres del producte
     * @throws Exception si el codi de barres és null o buit
     */
    public void setCodiBarres(String codiBarres) throws Exception{
        if(codiBarres==null || codiBarres.trim().isEmpty())
            throw new Exception("El codi de barres no pot ser buit");
        this.codiBarres = codiBarres;
    }

    /** ALTRES MÈTODES */

    /**
     * Coonverteix el producte amb un String
     * @return String que representa el producte
     */
    @Override
    public String toString() {
        return "Producte{" +
                "nom='" + nom + '\'' +
                ", preuBase=" + preu +
                ", codiBarres='" + codiBarres + '\'' +
                '}';
    }

    /**
     * Compara dos productes
     * Dos productes són iguals si tenen el mateix codi de barres
     * @param o referència de l'objecte amb el qual es vol comparar
     * @return true en cas que siguin iguals, fals altrament
     */
    @Override
    public boolean equals(Object o) {
        if(this == o) return true; //són el mateix objecte
        if(!(o instanceof Producte)) return false; //si és null o no és un Producte
        Producte altre = (Producte) o; //fem un cast
        return this.codiBarres.equalsIgnoreCase(altre.codiBarres); //equals de la classe String (ignorem majúscules i minúscules)
    }

    /**
     * Mètode que implementa la interfície Comparable
     * Ordenació natural per codi de barres
     * @param p Producte a comparar
     * @return un enter positiu si és més gran, negatiu altrament
     */
    @Override
    public int compareTo(Producte p) {
        return this.codiBarres.compareTo(p.codiBarres); //cridem el compareTo de la classe String
    }

    /**
     * Mètode per poder fer servir Map
     * @return int del codi de barres que serà el hash
     */
    @Override
    public int hashCode() {
        return codiBarres.toLowerCase().hashCode(); //fem que el codi de barres sigui el hash del Map
    }

    /**
     * Retorna el preu base del producte.
     * Les subclasses poden sobreescriure aquest mètode
     * @return double que representa el preu del producte
     */
    public double calcularPreuFinal() {
        return preu;
    }
}
