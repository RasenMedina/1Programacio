
/*
VA DE MODAS

La entrada consta de una serie de casos de prueba.
Cada caso comienza con un número que representa el número de valores que tiene el conjunto, que nunca será mayor de 25.000.
En la siguiente línea se proporcionan, separados por espacio, los valores de todos los elementos del conjunto.
Todos ellos serán números enteros.
La entrada terminará con una serie de 0 valores.

Para cada caso de prueba se mostrará la moda de la distribución, es decir el número que más se repite.
Se garantiza que ningún caso de prueba contendrá más de una moda, es decir únicamente habrá un valor que aparezca el mayor número de veces.
*/

import java.util.Arrays;
import java.util.Scanner;
public class AR152 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //Llegim els casos totals a tractar
        while(casosTotals != 0){
            int[] numeros = new int[casosTotals];
            for(int i=0; i<casosTotals; i++){
                numeros[i] = scan.nextInt();
            }
            Arrays.sort(numeros);
            int moda = numeros[0];
            int contadorModa = 1;
            int contadorActual = 1;
            for (int i = 1; i < numeros.length; i++) {
                if (numeros[i] == numeros[i - 1]) {
                    contadorActual++;
                    if (contadorActual > contadorModa) {
                        contadorModa = contadorActual;
                        moda = numeros[i];
                    }
                } 
                else {
                    if (contadorActual > contadorModa) {
                        contadorModa = contadorActual;
                        moda = numeros[i-1];
                      }
                    contadorActual = 1;
                } 
            }
            System.out.println(moda);
            casosTotals = scan.nextInt();
        }
        scan.close();
    }
}
