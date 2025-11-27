
/*
LOS SALTOS DE MARIO

El primer valor de la entrada es un número que indica la cantidad de casos de prueba a evaluar. 
Cada caso de prueba comienza con un entero mayor que cero y no mayor que 109 que indica el número 
de muros del escenario (recuerda que Mario se encuentra situado en la parte de arriba del primero). 
A continuación se proporciona la serie de enteros que indican la altura de cada uno de ellos.

Para cada caso de prueba se mostrará una línea en la que aparecerán dos enteros, uno con los saltos 
hacia arriba y otro con los saltos hacia abajo, separados por un espacio.

 */

import java.util.Scanner;
public class AR158 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //nombre de casos
        int casos=0;
        while (casos<casosTotals){ //bucle dels casos
            int saltosArriba = 0; // contador saltos arriba
            int saltosAbajo = 0; //contador saltos abajo

            int altura;
            int nMuros = scan.nextInt(); //nombre de murs
            int alturaAnterior = scan.nextInt(); //guardem l' altura del primer mur
            int mur = 1;
            while (mur<nMuros){ //bucle de la altura dels murs
                altura = scan.nextInt(); //llegim el següent mur
                if (altura > alturaAnterior) saltosArriba++;
                else if (altura < alturaAnterior) saltosAbajo++;
                alturaAnterior = altura;
                mur ++;
            }
            System.out.println(saltosArriba + " " + saltosAbajo);
            casos++;
        }
        scan.close();
    }
}