package objectes;

// "He implementat la mateixa estructura amb ArrayList i array per comprendre el funcionament intern de la gestió de memòria."

/**
 * Classe encarregada de gestionar una col·lecció d'alumnes
 * utilitzant un array estàtic de mida fixa.
 *
 * Aquesta implementació permet comprendre el funcionament intern
 * de les estructures de dades sense dependre de col·leccions dinàmiques
 * com {@link java.util.ArrayList}.
 *
 * La classe implementa operacions CRUD mantenint el control manual
 * sobre la capacitat i l'organització de la memòria.
 *
 * @author Rasen
 */
public class GestioAlumnesArray {

    /**
     * Capacitat màxima del sistema.
     */
    private static final int CAPACITAT = 30;

    /**
     * Array intern on es guarden els alumnes.
     */
    private Alumne[] alumnes;

    /**
     * Nombre actual d'alumnes registrats.
     */
    private int total;

    /**
     * Constructor per defecte.
     * Inicialitza l'array amb la capacitat definida.
     */
    public GestioAlumnesArray() {
        alumnes = new Alumne[CAPACITAT];
        total = 0;
    }

    // ---------- CREATE ----------

    /**
     * Afegeix un nou alumne al sistema.
     *
     * @param alumne alumne a registrar
     * @throws Exception si és null, ja existeix o no hi ha espai
     */
    public void afegirAlumne(Alumne alumne) throws Exception {

        if (alumne == null)
            throw new Exception("L'alumne no pot ser null.");

        if (total >= CAPACITAT)
            throw new Exception("Sistema ple. No es poden afegir més alumnes.");

        if (existeix(alumne.getCodiAlumne()))
            throw new Exception("Ja existeix un alumne amb aquest codi.");

        alumnes[total++] = new Alumne(alumne);
    }

    // ---------- READ ----------

    /**
     * Retorna una còpia de l'array amb els alumnes existents.
     *
     * @return array amb còpies dels alumnes
     * @throws Exception si hi ha error en copiar
     */
    public Alumne[] obtenirAlumnes() throws Exception {

        Alumne[] copia = new Alumne[total];

        for (int i = 0; i < total; i++) {
            copia[i] = new Alumne(alumnes[i]);
        }

        return copia;
    }

    /**
     * Cerca la posició d'un alumne pel seu codi.
     *
     * @param codi identificador
     * @return posició o -1 si no existeix
     */
    public int cercarPosicio(String codi) {

        if (codi == null)
            return -1;

        for (int i = 0; i < total; i++) {

            if (alumnes[i].getCodiAlumne()
                    .equalsIgnoreCase(codi)) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Indica si un alumne existeix.
     */
    public boolean existeix(String codi) {
        return cercarPosicio(codi) != -1;
    }

    /**
     * Retorna una còpia d'un alumne pel seu codi.
     */
    public Alumne cercarPerCodi(String codi) throws Exception {

        int pos = cercarPosicio(codi);

        if (pos == -1)
            throw new Exception("Alumne inexistent.");

        return new Alumne(alumnes[pos]);
    }

    /**
     * Genera un llistat textual dels alumnes.
     */
    public String llistarAlumnes() {

        if (total == 0)
            return "No hi ha alumnes registrats.";

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < total; i++) {
            sb.append(alumnes[i]).append("\n");
        }

        return sb.toString();
    }

    // ---------- UPDATE ----------

    /**
     * Actualitza la nota mitjana d'un alumne.
     */
    public void actualitzarNota(String codi, float novaNota) throws Exception {

        int pos = cercarPosicio(codi);

        if (pos == -1)
            throw new Exception("Alumne inexistent.");

        alumnes[pos].setNotaMitjana(novaNota);
    }

    // ---------- DELETE ----------

    /**
     * Elimina un alumne desplaçant els elements
     * per evitar espais buits dins l'array.
     */
    public void eliminarAlumne(String codi) throws Exception {

        int pos = cercarPosicio(codi);

        if (pos == -1)
            throw new Exception("No es pot eliminar: alumne inexistent.");

        for (int i = pos; i < total - 1; i++) {
            alumnes[i] = alumnes[i + 1];
        }

        alumnes[--total] = null;
    }

    // ---------- ALTRES ----------

    /**
     * Indica si el gestor està buit.
     */
    public boolean estaBuit() {
        return total == 0;
    }

    /**
     * Retorna el nombre d'alumnes registrats.
     */
    public int totalAlumnes() {
        return total;
    }
}

/**
 * Classe de prova per verificar el correcte funcionament
 * de {@link GestioAlumnesArray}.
 */
class TestGestioAlumnesArray {

    public static void main(String[] args) {

        try {

            GestioAlumnesArray gestio = new GestioAlumnesArray();

            // Afegim alguns alumnes
            for (int i = 1; i <= 5; i++) {

                Alumne a = new Alumne(
                        "1234567" + i + "A",
                        "Nom" + i,
                        "Cognom1",
                        "Cognom2",
                        "01-01-2000",
                        "60000000" + i,
                        "alumne" + i + "@gmail.com",
                        "Espanyola",
                        "Estudiant",
                        "ALU00" + i,
                        "1DAM",
                        6,
                        5 + i
                );

                gestio.afegirAlumne(a);
            }

            System.out.println("=== LLISTAT ===");
            System.out.println(gestio.llistarAlumnes());

            System.out.println("=== CERCAR ===");
            System.out.println(gestio.cercarPerCodi("ALU001"));

            System.out.println("=== ACTUALITZAR ===");
            gestio.actualitzarNota("ALU001", 9.5f);
            System.out.println(gestio.cercarPerCodi("ALU001"));

            System.out.println("=== ELIMINAR ===");
            gestio.eliminarAlumne("ALU002");

            System.out.println("Total alumnes: " + gestio.totalAlumnes());

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());
        }
    }
}

