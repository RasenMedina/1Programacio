package objectes;

public class Peix extends Animal{
    // Atributs
    private boolean vola;

    // Constructors
    public Peix(String nom, boolean vola) {
        super(nom);
        this.vola = vola;
    }

    public Peix(Animal a, boolean vola) {
        super(a);
        this.vola = vola;
    }

    //Getters
    public boolean isVola() {
        return vola;
    }

    // Setters
    public void setVola(boolean vola) {
        this.vola = vola;
    }

    //Altres


    @Override
    public String toString() {
        return "Peix{" +
                "vola=" + vola +
                ", nom='" + nom + '\'' +
                '}';
    }
}

class TestPeix{
    public static void main(String[] args){
        Peix p = new Peix("Nemo", fa);
        System.out.println(o);
    }
}
