package view;

/**
 * Aquesta és la vista del programa, encarregada de la visualització del programa
 *
 * mostrarMissatge(String) --> Sense salt de línia
 * mostrarMissatgeLn(String) --> Amb salt de línia
 * mostrarError(String) --> Errors ❌
 * mostrarInfo(String) --> Informació ℹ️
 * mostrarIniciPrograma() --> Inici de programa 👍😉
 * mostrarFiPrograma() --> Final de programa 😊👍
 * mostrarConfirmacio(String) --> Confirmació acció ✅
 * mostrarTitol(String) --> Títols
 * mostrarSeparador() --> Línia separadora
 * mostrarOpcions(String[]) --> Menú
 *
 * @author Rasen
 */
public class View {

    /**
     * CONSTANTS GENÈRIQUES
     */
    /**
     * Modes possibles, accesibles des de fora de la classe.
     */
    public static final String MODE_CONSOLA = "CONSOLA";
    public static final String MODE_UPPER = "UPPERCASE";
    public static final String MODE_LOWER = "LOWERCASE";
    public static final String MODE_HTML = "HTML";

    /**
     * ATRIBUTS
     */
    /**
     * Atribut per controlar la manera en la qual es mostren les dades; per defecte en mode "CONSOLA".
     */
    private static String modeV = MODE_CONSOLA;

    /**
     * GETTER & SETTER
     */
    /**
     * Retorna el mode de visualització actual.
     */
    public static String getMode() {
        return modeV;
    }

    /**
     * Assigna el mode de visualització.
     * @param mode nou mode
     */
    public static void setMode(String mode) {

        if (mode == null) {
            mostrarError("El mode no pot ser null.");
            return;
        }

        mode = mode.toUpperCase();

        switch (mode) {
            case MODE_CONSOLA:
            case MODE_UPPER:
            case MODE_LOWER:
            case MODE_HTML:
                modeV = mode;
                break;

            default:
                mostrarError("Mode de visualització no vàlid.");
        }
    }

    /**
     * MÈTODES ESTÀTICS
     */
    /**
     * Aplica el format segons el mode actual.
     */
    private static String format(String text) {

        if (text == null) return "";

        switch (modeV) {

            case MODE_UPPER:
                return text.toUpperCase();

            case MODE_LOWER:
                return text.toLowerCase();

            case MODE_HTML:
                return "<p>" + text + "</p>";

            default:
                return text;
        }
    }

    /**
     * Mostra un missatge sense salt de línia.
     * @param missatge text a mostrar
     */
    public static void mostrarMissatge(String missatge) {
        System.out.print(format(missatge));
    }

    /**
     * Mostra un missatge amb salt de línia.
     * @param missatge text a mostrar
     */
    public static void mostrarMissatgeLn(String missatge) {
        System.out.println(format(missatge));
    }

    /**
     * Mostra un missatge d'error estàndard.
     * @param error Missatge d'error a mostrar
     */
    public static void mostrarError(String error) {
        mostrarMissatgeLn("❌ ERROR: " + error);
    }

    /**
     * Mostra un missatge informatiu
     * @param info Missatge informatiu
     */
    public static void mostrarInfo(String info) {
        mostrarMissatgeLn("ℹ️ " + info);
    }

    /**
     * Mostra el missatge d'inici del programa.
     */
    public static void mostrarIniciPrograma() {
        mostrarMissatgeLn("Inici del programa 👍😉\n");
    }

    /**
     * Mostra el missatge de finalització del programa.
     */
    public static void mostrarFiPrograma() {
        mostrarMissatgeLn("\nPrograma finalitzat correctament 😊👍");
    }

    /**
     * Mostra un missatge de confirmació: després de realitzar una acció correctament.
     * @param accio Descripció de l'acció realitzada
     */
    public static void mostrarConfirmacio(String accio) {
        mostrarMissatgeLn("✅ " + accio);
    }

    /**
     * Mostra un títol destacat per pantalla per separar seccions del programa.
     * El text es mostra en majúscules i envoltat de línies per millorar la llegibilitat.
     * @param titol Text que es vol mostrar com a títol
     */
    public static void mostrarTitol(String titol) {
        mostrarMissatgeLn("\n===== " + titol.toUpperCase() + " =====");
    }

    /**
     * Mostra una línia separadora per millorar l'organització visual de la sortida.
     */
    public static void mostrarSeparador() {
        mostrarMissatgeLn("----------------------------------");
    }

    /**
     * Mostra les opcions d'un menú per pantalla.
     * @param opcions Array amb les diferents opcions del menú
     */
    public static void mostrarOpcions(String[] opcions) {
        for (int i = 0; i < opcions.length - 1; i++) {
            mostrarMissatgeLn((i+1) + ". " + opcions[i]);
        }
        mostrarMissatgeLn("0. " + opcions[opcions.length-1]);
    }


}

