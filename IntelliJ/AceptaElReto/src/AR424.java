
/*
AHORRO INFANTIL

El programa debe procesar múltiples casos de prueba, que llegarán por
la entrada estándar. Cada caso de prueba comienza con un número n
indicando la cantidad de operaciones realizadas sobre los ahorros.
A continuación aparecerán n valores; un número positivo indicará un
aumento en los ahorros, y un número negativo un gasto. Todos los
números serán enteros (puedes considerar que se miden en céntimos).

Por cada caso de prueba el programa escribirá la cantidad de dinero
a la que asciende el capital de las niñas, también en céntimos,
así como el máximo al que ha llegado. Puedes asumir, sin temor a
equivocarte, que los ahorros no llegan en ningún momento a los
231 céntimos.

*/

import java.util.Scanner;
public class AR424 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //Llegim els casos totals a tractar
        while (casosTotals != 0) { //Llegim les monedes i guardem totals i màxims
            int centims = scan.nextInt();
            int total = centims;
            int maxim = total;
            for (int i=1; i<casosTotals; i++){
                centims = scan.nextInt();
                total += centims;
                if (total>maxim) maxim = total;
            }
            System.out.println(total + " " + maxim);
            casosTotals = scan.nextInt(); //Tornem a llegir els casos totals a tractar
        }
        scan.close();
    }
}
