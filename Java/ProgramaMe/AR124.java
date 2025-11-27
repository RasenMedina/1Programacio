
/*
CUÁNTAS ME LLEVO

La entrada estará compuesta de numerosos casos de prueba, cada uno de ellos en una línea. 
En cada línea apareceran dos números positivos separados por un espacio. Se garantiza que los números 
no tendrán más de 1000 dígitos.
Los casos de prueba terminan con el caso especial 0 0, que no provocará salida.

Para cada caso de prueba hay que escribir en una línea el número de veces que hay "acarreo" en la suma.
 */
import java.util.Scanner;
public class AR124 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String num1 = scan.next(); //escanegem el primer operand
        String num2 = scan.next(); //escanegem el segon operand

        while (!(num1.equals("0")) || !(num2.equals("0"))) { //bucle dels casos (mentre no entrin dos 0)
            // Afegim 0
            if (num1.length() < num2.length()) {
                num1 = afegirZeros(num1, (num2.length() - num1.length())); 
            }else if (num2.length() < num1.length()) {
                num2 = afegirZeros(num2, (num1.length() - num2.length()));
            }

            //comptem les vegades que hem hagut de fer acarreo
            int nAcarreo = quantitatAcarreo(num1, num2);

            // Mostrem el nombre de vegades que tenim acarreo
            System.out.println(nAcarreo);

            // Tornem a llegir operands
            num1 = scan.next();
            num2 = scan.next();
        }
        scan.close ();
    }
        
    public static String afegirZeros(String num1, int  nZeros) { //Afageix al num1 el nombre de zeros (nZeros)
        String numNou = "";
        for (int i = 0; i<nZeros; i++){
            numNou += "0";
        }
        numNou += num1;
        return numNou;  
    }

    public static int quantitatAcarreo(String operand1, String operand2) { //calcula la quantita d' acarreos
        int nAcarreo = 0;
        int acarreoAnterior = 0;
        for (int i = operand1.length()-1; i >= 0; i--) {
            int acarreoSuma = sumaDigit(operand1.charAt(i), operand2.charAt(i), acarreoAnterior);
            if (acarreoSuma > 0) {
                nAcarreo++;
            }
            acarreoAnterior = acarreoSuma;
        }

        return nAcarreo;
    }

    public static int sumaDigit (char caracter1, char caracter2, int extra) { //suma 2 dígits i retorna 1 si hi ha acarreo, 0 altrament
        int digit1 = Character.getNumericValue(caracter1);
        int digit2 = Character.getNumericValue(caracter2);
        int suma = digit1 + digit2 + extra;
        if (suma > 9) {
            return 1; 
        }
        else {
            return 0; 
        }
    }
}
