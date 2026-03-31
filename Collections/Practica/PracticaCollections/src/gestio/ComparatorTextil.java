package gestio;

import model.Textil;

import java.util.Comparator;

/**
 * Comparator per ordenar productes tèxtils segons la seva composició
 * Ho farem servir quan necessiem comparat productes tèxtils per la seva composició:
 * Collections.sort(llistaTextils, new ComparatorTextil());
 */
public class ComparatorTextil implements Comparator<Textil> {

    @Override
    public int compare(Textil t1, Textil t2) {

        if (t1 == null && t2 == null) return 0; //iguals perquè els dos són null
        if (t1 == null) return -1; //t1 va abans perquè és null
        if (t2 == null) return 1; //t2 va abans perquè és null
        //per evitar l'excepció NullPointerException

        return t1.getComposicio().compareToIgnoreCase(t2.getComposicio()); //credem al compareToIgnoreCase de la classe String
    }
}
