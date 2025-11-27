import java.util.Scanner;

/*
FINAL DE MES
El programa recibirá, por la entrada estándar, un conjunto de casos de prueba, cada uno en una línea. 
Cada caso de prueba estará compuesto de un número de vivienda. Se garantiza que nunca será mayor que 1.000.
El último caso, que no deberá procesarse, será el número 0.

Para cada caso de prueba el programa escribirá "IZQUIERDA" (sin las comillas) si la vivienda está situada a la izquierda de la calle, 
y "DERECHA" si está a la derecha.
*/


public class AR217{
    
    public static void main (String[] args){
        Scanner scan = new Scanner (System.in);
        int n = scan.nextInt();
        while (n>0){
            if (n%2==0) System.out.println("DERECHA");
            else System.out.println("IZQUIERDA");
            n = scan.nextInt();
        }
        scan.close();
    }
} 

