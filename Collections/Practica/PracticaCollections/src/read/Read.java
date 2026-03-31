package read;

import view.View;
import java.time.LocalDate;
import java.util.Scanner;

/**
 * Aquest és el read del programa, encarregada de la lectura de dades
 *
 * llegir (String) --> mostra missatge, retorna String no null ni buit
 * llegirBoolean (String) --> s/S == true, n/N == false
 * llegirInt (String) --> enter
 * llegirFloat (String) --> float
 * llegirDouble (String) --> double
 * llegirOpcio (min, max) --> opció (enter)
 * llegirData (String) --> LocalData
 *
 * @author Rasen Mediñà i Masdeu
 */
public class Read {

    /** Scanner utilitzat per llegir dades del teclat */
    private static final Scanner scan = new Scanner(System.in);

    /**
     * Llegeix un text introduït per l'usuari.
     * @param missatge Text que es mostra per indicar què ha d'introduir l'usuari
     * @return Cadena de text introduïda (no buida)
     */
    public static String llegir(String missatge) {

        while (true) {

            View.mostrarMissatge(missatge);
            String text = scan.nextLine();

            if (text != null && !text.trim().isEmpty()) {
                return text;
            }

            View.mostrarError("El text no pot estar buit.");
        }
    }

    /**
     * Llegeix un valor booleà (S/N).
     * @param missatge Text que es mostra a l'usuari
     * @return true si és S, false si és N
     */
    public static boolean llegirBoolean(String missatge) {

        while (true) {
            String resposta = llegir(missatge + " (S/N)").toUpperCase();

            if (resposta.equals("S")) return true;
            if (resposta.equals("N")) return false;

            else View.mostrarError("Resposta no vàlida. Escriu S o N.");
        }
    }


    /**
     * Llegeix un nombre enter introduït per l'usuari.
     * @param missatge Text que es mostra a l'usuari
     * @return Valor enter introduït
     */
    public static int llegirInt(String missatge){
        while (true) {
            try {
                return Integer.parseInt(llegir(missatge));
            } catch (Exception e) {
                View.mostrarError("Has d'introduir un número enter vàlid.");
            }
        }
    }

    /**
     * Llegeix un nombre decimal (float) introduït per l'usuari.
     * @param missatge Text que es mostra a l'usuari
     * @return Valor float introduït
     */
    public static float llegirFloat(String missatge){
        while (true) {
            try {
                return Float.parseFloat(llegir(missatge));
            } catch (Exception e) {
                View.mostrarError("Has d'introduir un número decimal vàlid.");
            }
        }
    }

    /**
     * Llegeix un nombre decimal (double) introduït per l'usuari.
     * @param missatge Text que es mostra a l'usuari
     * @return Valor double introduït
     */
    public static double llegirDouble(String missatge){
        while (true) {
            try {
                return Double.parseDouble(llegir(missatge));
            } catch (Exception e) {
                View.mostrarError("Has d'introduir un número decimal vàlid.");
            }
        }

    }

    /**
     * Demana a l'usuari que seleccioni una opció del menú.
     * @param missatge Text que es mostra a l'usuari
     * @param opcioMin valor mínim possible de l'opció
     * @param opcioMax valor màxim possible de l'opció
     * @return Número corresponent a l'opció escollida
     */
    public static int llegirOpcio(String missatge, int opcioMin, int opcioMax){
        while (true) {
            int opcio = llegirInt(missatge);

            if (opcio >= opcioMin && opcio <= opcioMax) {
                return opcio;
            }

            View.mostrarError("L'opció ha d'estar entre " + opcioMin + " i " + opcioMax);
        }
    }

    /**
     * Llegeix una data amb format yyyy-MM-dd.
     * Valida el format manualment i evita dates futures.
     * @param missatge Missatge que es mostra a l'usuari
     * @return LocalDate vàlid
     */
    public static LocalDate llegirData(String missatge) {

        while (true) {
            try {
                String text = llegir(missatge);

                // comprovem estructura bàsica
                if (!text.matches("\\d{4}-\\d{2}-\\d{2}")) {
                    View.mostrarError("Format incorrecte. Usa yyyy-MM-dd");
                    continue;
                }

                String[] parts = text.split("-");

                if (parts.length != 3) { // protecció extra
                    View.mostrarError("Format incorrecte.");
                    continue;
                }

                int any = Integer.parseInt(parts[0]);
                int mes = Integer.parseInt(parts[1]);
                int dia = Integer.parseInt(parts[2]);

                LocalDate data = LocalDate.of(any, mes, dia); // Si la data no existeix (ex: 2024-02-30) → excepció automàtica

                return data;

            } catch (NumberFormatException e) {

                View.mostrarError("La data conté valors no numèrics.");

            } catch (Exception e) {

                View.mostrarError("La data introduïda no és vàlida.");
            }
        }
    }
}

