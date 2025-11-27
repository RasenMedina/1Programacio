
/*
PALABRAS PENTAVOCÁLICAS

La entrada comienza con un número que indica la cantidad de casos de prueba que vienen a continuación. 
Cada caso consiste en una palabra de no más de 30 letras de la a a la z (todas minúsculas, sin tilde y excluída la letra ñ).

Para cada caso de prueba, el programa escribirá SI si la palabra es pentavocálica y NO en caso contrario.
 */

import java.util.Scanner;
public class AR300 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //LLEGIM ELS CASOS TOTALS
        String palabra;
        for (int i = 0; i < casosTotals; i++) { //LLEGIM CADA PARAULA I DIEM SI ÉS PENTAVOCALIC O NO
            palabra = scan.next();
            if (esPentavocalic(palabra)) System.out.println("SI");
            else System.out.println("NO");
        }
        scan.close ();
    }

    public static boolean esPentavocalic(String paraula) { //retorna true si és pentavocalic, fals altrament
        boolean vocalA = false;
        boolean vocalE = false;
        boolean vocalI = false;
        boolean vocalO = false;
        boolean vocalU = false;
        
        for (int i = 0; i < paraula.length(); i++) {
            char c = paraula.toUpperCase().charAt(i);
            switch (c){
                case 'A': vocalA = true; break;
                case 'E': vocalE = true; break;
                case 'I': vocalI = true; break; 
                case 'O': vocalO = true; break;
                case 'U': vocalU = true; break; 
            }
        }
        return (vocalA && vocalE && vocalI && vocalO && vocalU);
    }
}
