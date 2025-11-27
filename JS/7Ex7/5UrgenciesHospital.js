"use strict";
alert("Rasen programador pro");

/*
A Urgències de l'hospital comarcal, abans d'atendre els pacients fan un procés de cribatge per determinar el grau d'urgència i el tipus de problema per fer-lo entrar abans o després, i per derivar-lo a un especialista o un altre.

Les observacions que ha de fer el metge de cribatge són (s'ha de comprovar que les dades introduïdes siguin correctes):

Temperatura: el termòmetre pot mesurar temperatures entre entre 25 i 45
Tos: No, Seca, Expectorant
Presió màxima: entre 80 i 180
A partir d'aquestes dades s'assigna al pacient una de les següents categories (aquesta primera part s'ha de fer amb "if"):

M: si la temperatura està per sota de 32 o per sobre de 42 o la presió està per sota de 100.
E: si la temperatura està entre 35 i 38, no té tos i la presió està entre 120 i 140.
D: si la temperatura està per sobre de 38 i té tos expectorant.
C: si la temperatura està per sobre de 38 i té tos seca.
B: Si la temperatura està entre 35 i 38, no té tos i la presió està per sota de 120 o per sobre de 140.
A: en qualsevol altre cas
Ara, a partir de la categoria que se li ha assignat, s'ha de mostrar un missatge indicant què s'ha de fer amb ell (aquesta part s'ha de fer amb "switch"):

M: "No hi ha res a fer."
E o M: "Que esperi sentat... o estirat."
D: "L'ha de visitar el neumòleg d'urgències."
C: "Envia'l a la planta COVID."
B: "Ràpid! Que vingui un cardiòleg!"
A: "Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'."
*/

// Lectura de dades
let temperatura = parseFloat(prompt("Introdueix la temperatura (25-45)").trim().replace(",","."));
let tos = prompt("Introdueix el tipus de tos (No, Seca o Expectorant)").trim().toUpperCase();
let presio = parseInt (prompt("Introdueix la presió").trim());
let categoria;

//Verificació de dades
//Verificacio temperatura
if (isNaN(temperatura) || isNaN(presio)){
    alert ("La temperatura o la pressió no són valors numèrics");
    return;
}
if (temperatura<25 || temperatura>45){
    alert("Temperatura incorrecta: " + temperatura + "\nLa temperatura ha d'estar entre 25 i 45");
    return;
}

//Verificacio tos
//if (!(tos=="NO" || tos=="SECA" || tos=="EXPECTORANT"))
if (tos!="No" && tos!="SECA" && tos!="EXPECTORANT"){
    alert("Tipus de tos incorrecte: " + tos + "\nEl tipus de tos pot ser No, Seca o Expectorant");
    return;
}

//Verificacio presio
if (presio < 80 || presio > 180) {
    alert("Presio incorrecta: " + presio + "\nLa presió ha d'estar entre 80 i 180");
    return;
}

// Assignar categoria
if (temperatura < 32 || temperatura > 42 || presio < 100) {
    categoria = 'M';
} else if (temperatura >= 35 && temperatura <= 38 && tos == "NO" && presio >= 120 && presio <= 140) {
    categoria = 'E';
} else if (temperatura > 38 && tos == "EXPECTORANT") {
    categoria = 'D';
} else if (temperatura > 38 && tos == "SECA") {
    categoria = 'C';
} else if (temperatura >= 35 && temperatura <= 38 && tos == "NO" && (presio < 120 || presio > 140)) {
    categoria = 'B';
} else {
    categoria = 'A';
}

// Acció que cal prendre
switch (categoria) {
    case 'M':
        alert("No hi ha res a fer.");
        // NO POSAR break; !!!
    case 'E':
        alert("Que esperi sentat... o estirat.");
        break;
    case 'D':
        alert("L'ha de visitar el neumòleg d'urgències.");
        break;
    case 'C':
        alert("Envia'l a la planta COVID.");
        break;
    case 'B':
        alert("Ràpid! Que vingui un cardiòleg!");
        break;
    case 'A':
        alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.");
        break;  // No imprescindible però convenient
                //  per si més endavant s'afegeixen casos o default
}