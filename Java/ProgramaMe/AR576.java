
/*
LEYENDO EL DICCIONARIO

Cada caso de prueba comienza con un número que indica cuántos segundos necesita el padre de Mafalda
para leer la definición de una palabra del diccionario. A continuación, aparece una línea con la cantidad 
de definiciones que hay en cada una de las páginas. La lista termina con un 0.
La entrada acaba con un 0, que no debe procesarse.

Por cada caso de prueba, se escribirá cuánto tardará el padre de Mafalda en leerse el diccionario completo, 
utilizando el formato HH:MM:SS (horas, minutos y segundos). El tiempo debe ser correcto 
(no más de 59 segundos ni más de 59 minutos) y usar dos dígitos para cada elemento. Se garantiza que el 
tiempo será menor a un día completo.
 */
import java.util.Scanner;

public class AR576 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int segNecesita = scan.nextInt();
        while (segNecesita != 0) {
            int definicion = scan.nextInt();
            int total = 0;
            while (definicion != 0) {
                total += definicion;
                definicion = scan.nextInt();
            }
            total *= segNecesita;
            int hores = total / 3600;
            total -= hores * 3600;
            int min = total / 60;
            int seg = total % 60;

            String hores2, min2, seg2;

            if (hores < 10) {
                hores2 = "0" + hores; 
            }else {
                hores2 = "" + hores;
            }
            if (min < 10) {
                min2 = "0" + min; 
            }else {
                min2 = "" + min;
            }
            if (seg < 10) {
                seg2 = "0" + seg; 
            }else {
                seg2 = "" + seg;
            }
            System.out.println(hores2 + ":" + min2 + ":" + seg2);

            segNecesita = scan.nextInt();
        }
        scan.close();
    }
}
