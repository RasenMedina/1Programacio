// Model pel joc d'endevinar un número

public class ModelEndevinarNumero {
    public static int numeroPensat = (int) Math.floor(Math.random()*101);
    public static int intents = 0;
    public static int sumar (int n1, int n2) {
        return n1+n2;
    }
    public static int comprovarNumero(int numeroUsuari){
        if  (numeroUsuari == numeroPensat) return 0;
        else if (numeroUsuari < numeroPensat) return 1;
        else{ //numeroUsuari > numeroPensat
            return -1;
        }
    }
}
