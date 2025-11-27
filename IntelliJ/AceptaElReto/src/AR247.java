
/*
SALIENDO DE LA CRISIS

La entrada estará compuesta de distintos indicadores económicos, cada uno de ellos en dos líneas distintas.
La primera línea indica el número de muestras recogidas del indicador (0 < n ≤ 100).
La segunda línea contiene n números positivos con los valores económicos (entre 1 y 10.000.000) medidos desde
el día de la declaración de la abeja reina hasta el día de hoy.
La entrada termina con un indicador sin muestras (0) que no debe procesarse.

Por cada caso de prueba se dirá si según ese indicador la abeja reina tenía razón (SI) o las cosas no están tan
bien como ella cree (NO).
*/

import java.util.Scanner;
public class AR247 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int muestras = scan.nextInt(); //Llegim el nombre de mostres
        while (muestras != 0) { //Fem un bucle mentre les mostres no sigui 0
            boolean crecer = true;
            int indexAnterior = scan.nextInt();
            for (int i=1; i<muestras; i++){
                int indexActual = scan.nextInt();
                if (indexActual <= indexAnterior) crecer = false;
                indexAnterior = indexActual;
            }
            if (crecer) System.out.println("SI");
            else System.out.println("NO");
            muestras = scan.nextInt(); //Llegim el següent nombre de mostres
        }
        scan.close();
    }
}
