package objectes;

public class TestPersona {
    public static void main(String[] args) {
        Persona p1 = new Persona ("Pere");
        Persona p2 = new Persona ("Pere", 35, "psanchez@sapalomera.cat", "123456789");
        Persona p3 = new Persona ("Pere", 35, "psanchez@sapalomera.cat", "123456789");
        System.out.println(p1);

        modificarNom(p2, "Anna");
        p1 = p2;
        modificarNom(p1,"Pepito");


        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
    }

    public static void modificarNom(Persona p, String nom){
        try{
            p.setNom(nom);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}
