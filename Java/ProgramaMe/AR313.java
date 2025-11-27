
import java.util.Scanner;


/*
QUÉ LADO
La entrada comienza con un número que indica cuántos casos de prueba vendrán a continuación. Cada caso contiene dos números, 
−10.000 ≤ s,c ≤ 10.000 indicando, respectivamente, el saldo en mi cuenta bancaria el primer día del mes, y el cambio estimado (ingresos menos gastos) durante el mes.
Para cada caso de prueba, se escribirá "SI" si llego a fin de mes con saldo mayor o igual que cero, y "NO" en otro caso.
*/


public class AR313 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int casos = scan.nextInt();

        for (int i = 0; i < casos; i++) {
            int saldo = scan.nextInt();
            int cambio = scan.nextInt();
            if (saldo + cambio >= 0) {
                System.out.println("SI"); 
            }else {
                System.out.println("NO");
            }
        }
        scan.close();
    }
}
