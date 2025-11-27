
/*
DONER SOSPECHOSO

La entrada comienza con un número que indica cuántos casos de prueba habrá que procesar.
Un caso de prueba está compuesto por dos números enteros entre 0 y 100 con el número de kilos de conejo y de caballo
respectivamente que se han mezclado para preparar la carne que da vueltas en el asador. Se garantiza que la suma será mayor que cero.

Por cada caso de prueba, el programa escribirá el porcentaje de conejo que hay en la mezcla.
El resultado se escribirá sin decimales, redondeado hacia abajo.
*/

import java.util.Scanner;
public class AR512 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //Llegim els casos totals a tractar
        for (int i=0; i<casosTotals; ++i) { //Calculem i mostrem el porcentatge de kilos de conill
            int kgConejo = scan.nextInt();
            int kgCaballo = scan.nextInt();
            System.out.println((kgConejo)*100/(kgConejo+kgCaballo));
        }
        scan.close();
    }
}
