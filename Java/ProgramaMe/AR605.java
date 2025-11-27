
/*
ORDENANDO EL ARMARIO

El programa deberá procesar varios casos de prueba, cada uno en una línea.
Cada caso de prueba es una sucesión de letras "V", "I" o "A" indicando, respectivamente, 
que una prenda es de verano, de invierno o que sirve para ambas estaciones indistintamente. La sucesión termina con un punto (".").
El último caso de prueba, que no debe procesarse, es una lista sin prendas.

Para cada caso de prueba el programa escribirá "VERANO", "INVIERNO" o "EMPATE" dependiendo de la estación para la que más ropa tengas.
 */

import java.util.Scanner;
public class AR605 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); 
        String lineaLetras = scan.next();
        while (!(lineaLetras.equals("."))){ //bucle de líneas de letras 
            int nPrendasVerano = 0; //contador prendas de verano
            int nPrendasInvierno = 0; //contador prendas de invierno
            String letra = lineaLetras;
            while (!(letra.equals("."))){ //bucle de letras en una misma línea
                if (letra.equals("V")) nPrendasVerano++;
                else if (letra.equals("I")) nPrendasInvierno++;
                letra = scan.next();
            }
            if (nPrendasVerano>nPrendasInvierno) System.out.println("VERANO");
            else if (nPrendasVerano<nPrendasInvierno) System.out.println("INVIERNO");
            else System.out.println("EMPATE");
            lineaLetras = scan.next();
        }
        scan.close ();
    }
}
