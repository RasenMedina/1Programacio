
/*
Constante de Kaprekar

La primera línea de la entrada contendrá el número de casos de prueba. Cada uno contendrá, en una única línea, un número a comprobar.

Para cada caso de prueba, el programa indicará el número de vueltas que se debe dar a la rutina de Kaprekar para alcanzar el 6174.
Para los números repdigits deberá escribir 8. Para la propia constante de Kaprekar deberá indicar 0.
*/

import java.util.Scanner;

public class AR100_b {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        for (int numero=0; numero<10000; numero++) { //Mirem cada número a tractar
            if (esRepdigits(numero)) System.out.print("8");
            else if (numero == 6174) System.out.print("0");
            else{
                int nVueltas = vueltasKaprekar (numero);
                System.out.print(nVueltas+",");
            }
        }
        scan.close();
    }

    public static boolean esRepdigits (int numero) { // retorna verdader si el número és Repdigits, fals altrament
        // Extraemos los 4 dígitos
        int d1 = numero / 1000;
        int d2 = (numero / 100) % 10;
        int d3 = (numero / 10) % 10;
        int d4 = numero % 10;

        // Comparamos todos
        return (d1 == d2 && d2 == d3 && d3 == d4);
    }

    public  static  int vueltasKaprekar (int n){ // retorna la quantitat d' iteracions per tal d' arribar al número de Kaprekar (6174)
            int iteracions = 0;
            while (n != 6174){
                n = completarConCeros (n);
                int ascendente = ordenarAscendente(n); //paso 2: colocar en orden ascendente y descendente
                int descendente = ordenarDescendente(n);
                n = descendente - ascendente; //paso 3: resta el menor al mayor
                iteracions++;
            }
            return iteracions;
    }

    public static int completarConCeros (int numero){
        String nConCeros = String.format("%04d", numero);
        return Integer.parseInt(nConCeros);
    }

    public static int ordenarAscendente (int numero){
        // Extraemos los 4 dígitos
        int d1 = numero / 1000;
        int d2 = (numero / 100) % 10;
        int d3 = (numero / 10) % 10;
        int d4 = numero % 10;

        // Ordenamos manualmente (método simple de intercambio)
        if (d1 > d2) { int t = d1; d1 = d2; d2 = t; }
        if (d2 > d3) { int t = d2; d2 = d3; d3 = t; }
        if (d3 > d4) { int t = d3; d3 = d4; d4 = t; }
        if (d1 > d2) { int t = d1; d1 = d2; d2 = t; }
        if (d2 > d3) { int t = d2; d2 = d3; d3 = t; }
        if (d1 > d2) { int t = d1; d1 = d2; d2 = t; }

        // Reconstruimos el número ordenado
        return d1 * 1000 + d2 * 100 + d3 * 10 + d4;
    }

    public  static  int ordenarDescendente (int numero){
        // Extraemos los 4 dígitos
        int d1 = numero / 1000;
        int d2 = (numero / 100) % 10;
        int d3 = (numero / 10) % 10;
        int d4 = numero % 10;

        // Ordenamos manualmente (burbuja simple)
        if (d1 < d2) { int t = d1; d1 = d2; d2 = t; }
        if (d2 < d3) { int t = d2; d2 = d3; d3 = t; }
        if (d3 < d4) { int t = d3; d3 = d4; d4 = t; }
        if (d1 < d2) { int t = d1; d1 = d2; d2 = t; }
        if (d2 < d3) { int t = d2; d2 = d3; d3 = t; }
        if (d1 < d2) { int t = d1; d1 = d2; d2 = t; }

        // Reconstruimos el número ordenado (de mayor a menor)
        return d1 * 1000 + d2 * 100 + d3 * 10 + d4;
    }
}
