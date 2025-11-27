
/*
K BITS A UNO

La entrada está formada por una serie de consultas, cada una en una línea independiente.
Las líneas tendrán dos números mayores o iguales que 0; el primero, n, indica el número de dígitos total del número y el segundo,
k, el número de bits a 1 por el que se pregunta. Ninguno de los dos valores será superior a 1.000.
La consulta 0 0 marca el final de la entrada y no debe procesarse.

Para cada caso de prueba se mostrará en una línea la cantidad de números binarios de n bits que tienen k bits a 1 módulo 1.000.000.007.
*/

import java.util.Scanner;

public class AR202 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int nDigitos = scan.nextInt(); //LLEGIM El PRIMER NÚMERO
        int nBits = scan.nextInt(); //LLEGIM El PRIMER NÚMERO

        while (nDigitos != 0 && nBits != 0) { //FEM EL BUCLE MENTRE NO ENS ENTRIN DOS 0
            int cuadradoHorizontal = scan.nextInt();
            int cuadradoVertical = scan.nextInt();
            int nCerillas = 2 * cuadradoVertical * cuadradoHorizontal + cuadradoVertical + cuadradoHorizontal;
            System.out.println(nCerillas);
        }
        scan.close();
    }
}
