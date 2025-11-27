
/*
LA PIEZA PERDIDA

La entrada estará compuesta de numerosos casos de prueba. Cada uno de ellos contiene la información de un puzzle en dos líneas.
La primera línea contiene el número de piezas totales del puzzle (al menos dos y como mucho 10.000), y la segunda contiene los
números de todas las piezas que había en la bolsa (no necesariamente en orden). La numeración de las piezas comienza por el número 1.
La entrada terminará con un puzzle de cero piezas, que no generará salida.

Para cada caso de prueba se debe escribir una línea con el número de la pieza que faltaba en la bolsa.
*/

import java.util.Scanner;
import java.util.Arrays;
public class AR168 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //Llegim els casos totals a tractar
        while(casosTotals != 0){
            int pieza;
            int[] puzzle = new int[casosTotals-1];
            for(int i=0; i<casosTotals-1; i++){
                pieza = scan.nextInt();
                puzzle[i] = pieza;
            }
            Arrays.sort(puzzle);
            int piezaFalta = 0;
            if(puzzle[0] != 1) piezaFalta = 1;
            else{
                piezaFalta = puzzle[puzzle.length-1]+1;
                for (int j=0; j<puzzle.length-1;j++){
                    int pieza1 = puzzle[j];
                    int pieza2 = puzzle[j+1];
                    if ((pieza2 - pieza1)>1){
                        piezaFalta = puzzle[j]+1;
                        break;
                    }
                }
            }
            System.out.println(piezaFalta);
            casosTotals = scan.nextInt();
        }
        scan.close();
    }
}
