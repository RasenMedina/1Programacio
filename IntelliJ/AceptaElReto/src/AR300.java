//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
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
