package objectes;

public class Ocell extends Animal{
    // Atributs
    private int profunditat;

    // Constructors
    public Ocell(String nom, int profunditat) {
        super(nom);
        this.profunditat = profunditat;
    }

    public Ocell(Animal a, int profunditat) {
        super(a);
        this.profunditat = profunditat;
    }

    // Getters
    public int getProfunditat() {
        return profunditat;
    }

    // Setters
    public void setProfunditat(int profunditat) {
        this.profunditat = profunditat;
    }

    @Override
    public String toString() {
        return "Ocell{" +
                "profunditat=" + profunditat +
                ", nom='" + nom + '\'' +
                '}';
    }
}

class TestOcell{
    public static void main(String[] args){
        Ocell o = new Ocell("Jack", 10);
        System.out.println(o);
    }
}
