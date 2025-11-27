
/*
LA ABUELA MARÍA

La entrada estará formada por distintos casos de prueba, cada uno representando la configuración de dientes de un día
en la vida de la abuela María. El número total de casos aparece en la primera línea de la entrada.
Los casos siguen a continuación, cada uno formado por dos líneas. La primera contiene el alto de los seis dientes
superiores responsables de la sonrisa (incisivos y caninos) de izquierda a derecha. De forma equivalente, la segunda
línea contiene la información de los seis inferiores. Todos ellos son números enteros entre 0 y 2.000.

Para cada caso de prueba se escribirá SI si los dientes de arriba encajan perfectamente con los de abajo y no quedan
huecos entre ninguno de ellos, o NO en caso contrario.
*/

import java.util.Arrays;
import java.util.Scanner;
public class AR337 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casosTotals = scan.nextInt(); //Llegim els casos totals a tractar
        for (int i=0; i<casosTotals; i++){
            int[] dentsDalt = new int[6];
            for(int i=0; i<6; i++){
                dentsDalt[i] = scan.nextInt();
            }
            int[] dentsBaix = new int[6];
            for(int i=0; i<6; i++){
                dentsBaix[i] = scan.nextInt();
            }
            boolean encaixa = false;



            if (encaixa) System.out.println("SI");
            else System.out.println("NO");


        }
        scan.close();
    }
}
