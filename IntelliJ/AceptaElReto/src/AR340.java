
/*
CUADRADOS CON CERILLAS

La entrada comienza con un número que indica cuántos casos de prueba vendrán a continuación, cada uno en una línea.
Cada caso de prueba contiene dos números indicando el número de cuadrados que se quieren formar en horizontal y vertical respectivamente.
Ambos son mayores que 0 y menores que 1.000.

Para cada caso de prueba se escribirá una línea indicando el número de cerillas necesarias para construir el tablero solicitado.
*/

import java.util.Scanner;
public class AR340 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //LLEGIM ELS CASOS TOTAL
        for (int i = 0; i < casosTotals; i++) { //LLEGIM ELS CUADRATS EN HORITZONTAL I VERTICAL I DIEM EL NOMBRE DE CERILLAS NECESSÀRIES
            int cuadradoHorizontal = scan.nextInt();
            int cuadradoVertical = scan.nextInt();
            int nCerillas = 2 * cuadradoVertical * cuadradoHorizontal + cuadradoVertical + cuadradoHorizontal;
            System.out.println(nCerillas);
        }
        scan.close();
    }
}
