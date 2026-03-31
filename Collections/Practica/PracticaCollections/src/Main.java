import model.*;
import gestio.*;
import read.Read;
import view.View;

import java.time.LocalDate;
import java.util.List;

/**
 * Classe principal de la pràctica de Collections i Excepcions
 * Mostra un menú que permet executar opcions relacionades amb productes d'un supermercat
 *
 * gestionarMenuPrincipal() --> bucle principal
 * mostrarMenuPrincipal(int) --> menú principal
 * gestionarMenuProducte() --> bucle de productes
 * mostrarMenuProducte(int) --> menú de productes
 *
 * @author Rasen
 */
public class Main {

    /** ATRIBUTS GLOBALS */
    private static CarroCompra carro = new CarroCompra();
    private static GestioMagatzem magatzem = new GestioMagatzem();

    /** FUNCIÓ PRINCIPAL DEL PROGRAMA */
    public static void main(String[] args) {
        View.mostrarIniciPrograma(); // Missatge d'inici
        View.mostrarMissatgeLn("BENVINGUT AL SAPAMERCAT");
        View.mostrarSeparador();
        gestionarMenuPrincipal();
        View.mostrarFiPrograma(); // Missatge final
    }

    /**
     * *********************************************************
     * 0 - FUNCIONS GENÈRIQUES
     ***********************************************************/

    /**
     * Bucle principal del programa
     */
    private static void gestionarMenuPrincipal(){
        int opcio;
        do{
           opcio = mostrarMenuPrincipal(); // Mostra menú i llegeix opció
           switch (opcio){
               case 1:
                   gestionarMagatzem();
                   break;
               case 2:
                   gestionarMenuProducte();
                   break;
               case 3:
                   String tiquet = carro.generarTiquet(); //generm el tiquet
                   View.mostrarMissatgeLn(tiquet); //el mostrem
                   magatzem.guardarTiquet(tiquet); //el guardem al magatzem
                   carro.buidarCarro(); //buidem el carro
                   break;
               case 4:
                   View.mostrarMissatgeLn(carro.mostrarCarro()); //mostrem el carro
                   break;
               case 0:
                   View.mostrarInfo("Fins aviat!");
                   break;
               default:
                   View.mostrarError("Opció no vàlida");
           }
        } while(opcio!=0);
    }

    /**
     * Mostra el menú principal amb les 4 opcions de la pràctica.
     * Demana a l'usuari que introdueixi una opció entre 0 i 4.
     * @return opció escollida per l'usuari (0-4)
     */
    private static int mostrarMenuPrincipal(){
        // Array amb totes les opcions de la pràctica
        String[] opcions = {
                "Gestió Magatzem i Compres",
                "Introduir producte",
                "Passar per caixa",
                "Mostrar carro de la compra",
                "Sortir",
        };

        // Mostrem el títol
        View.mostrarTitol("Inici");
        // Mostrem les opcions numerades
        View.mostrarOpcions(opcions);

        // Llegim l'opció de l'usuari
        return Read.llegirOpcio("Entra una opció (0-4): ", 0, 4);
    }


    /**
     * *********************************************************
     * 1 - GESTIÓ MAGATZEM I COMPRES
     ***********************************************************/

    /**
     * Permet gestionar el magatzem i mostrar llistes de productes i tiquets
     */
    private static void gestionarMagatzem() {
        int opcio;
        do {
            String[] opcions = {
                    "Caducitat",
                    "Tiquets de compra",
                    "Composició tèxtil",
                    "Tornar"
            };

            View.mostrarTitol("Gestió Magatzem");
            View.mostrarOpcions(opcions);

            opcio = Read.llegirOpcio("Opció: ", 0, 3);

            switch (opcio) {
                case 1:
                    mostrarAlimentacioOrdenada();
                    break;
                case 2:
                    mostrarTiquets();
                    break;
                case 3:
                    mostrarTextilsOrdenats();
                    break;
            }

        } while (opcio != 0);
    }

    /**
     * Mostrem els productes d'alimentació ordenats per la data de caducitat
     */
    private static void mostrarAlimentacioOrdenada() {
        List<Alimentacio> llista = magatzem.getAlimentacioOrdenada();

        View.mostrarTitol("Alimentació per caducitat");

        for (Alimentacio a : llista) {
            View.mostrarMissatgeLn(a.toString());
        }
    }

    /**
     * Mostrem els tiquets del magatzem
     */
    private static void mostrarTiquets() {
        List<String> tiquets = magatzem.getHistorialTiquets();

        if (tiquets.isEmpty()) {
            View.mostrarInfo("No hi ha tiquets");
            return;
        }

        for (String t : tiquets) {
            View.mostrarMissatgeLn(t);
            View.mostrarSeparador();
        }
    }

    /**
     * Mostrem els productes tèxtils ordenats per la seva composició
     */
    private static void mostrarTextilsOrdenats() {
        List<Textil> llista = magatzem.getTextilsOrdenats();

        View.mostrarTitol("Tèxtils ordenats");

        for (Textil t : llista) {
            View.mostrarMissatgeLn(t.toString());
        }
    }


    /**
     * *********************************************************
     * 2 - INTRODUIR PRODUCTE
     ***********************************************************/

    /**
     * Bucle per gestionar els productes
     */
    private static void gestionarMenuProducte() {
        int opcio;
        do {
            opcio = Main.mostrarMenuProducte(); // Mostra menú i llegeix opció
            switch (opcio) {
                case 1:
                    try {
                        afegirAlimentacio();
                    } catch (Exception e) {
                        View.mostrarError(e.getMessage());
                    }
                    break;
                case 2:
                    try {
                        afegirTextil();
                    } catch (Exception e) {
                        View.mostrarError(e.getMessage());
                    }
                    break;
                case 3:
                    try {
                        afegirElectronica();
                    } catch (Exception e) {
                        View.mostrarError(e.getMessage());
                    }
                    break;
                case 0:
                    break;
                default:
                    View.mostrarError("Opció no vàlida");
            }
        } while (opcio != 0);
    }

    /**
     * Mostra el menú principal amb les 3 opcions per introduir un producte
     * Demana a l'usuari que introdueixi una opció entre 0 i 3.
     * @return opció escollida per l'usuari (0-3)
     */
    private static int mostrarMenuProducte(){
        // Array amb totes les opcions per introduir un producte
        String[] opcions = {
                "Alimentació",
                "Tèxtil",
                "Electrònica",
                "Tornar",
        };

        // Mostrem el títol
        View.mostrarTitol("Producte");
        // Mostrem les opcions numerades
        View.mostrarOpcions(opcions);

        // Llegim l'opció de l'usuari
        return Read.llegirOpcio("Entra una opció (0-3): ", 0, 3);
    }

    /**
     * Afegim un nou producte d'alimentació al magatzem i al carro
     * @throws Exception si hi ha hagut algun error
     */
    private static void afegirAlimentacio() throws Exception {
        String nom = Read.llegir("Nom: ");
        double preu = Read.llegirDouble("Preu: ");
        String codi = Read.llegir("Codi de barres: ");
        LocalDate data = Read.llegirData("Data caducitat (yyyy-MM-dd): ");

        Alimentacio a = new Alimentacio(nom, preu, codi, data);

        magatzem.afegirProducte(a);
        carro.afegirProducte(a);

        View.mostrarConfirmacio("Producte d'alimentació afegit");
    }

    /**
     * Afegim un nou producte tèxtil al magatzem i al carro
     * @throws Exception si hi ha hagut algun error
     */
    private static void afegirTextil() throws Exception {
        String nom = Read.llegir("Nom: ");
        double preu = Read.llegirDouble("Preu: ");
        String codi = Read.llegir("Codi de barres: ");
        String comp = Read.llegir("Composició: ");

        Textil t = new Textil(nom, preu, codi, comp);

        magatzem.afegirProducte(t);
        carro.afegirProducte(t);

        View.mostrarConfirmacio("Producte tèxtil afegit");
    }

    /**
     * Afegim un nou producte electrònic al magatzem i al carro
     * @throws Exception si hi ha hagut algun error
     */
    private static void afegirElectronica() throws Exception {
        String nom = Read.llegir("Nom: ");
        double preu = Read.llegirDouble("Preu: ");
        String codi = Read.llegir("Codi de barres: ");
        int dies = Read.llegirInt("Dies garantia: ");

        Electronica e = new Electronica(nom, preu, codi, dies);

        magatzem.afegirProducte(e);
        carro.afegirProducte(e);

        View.mostrarConfirmacio("Producte electrònic afegit");
    }
}





