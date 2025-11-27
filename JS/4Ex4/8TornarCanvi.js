"use strict";

// Inputs per introduir el nom i l'edat
const iPreu = document.getElementById("preu");
const iDiners = document.getElementById("diners");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let preu = iPreu.value; //l' import a pagar, el preu del producte comprat
    let diners = iDiners.value; //els diners que has donat per pagar

    //Convertim les dades a tipus float, canviem (".") per (",") i delimitem 2 decimals
    preu = parseFloat(preu.replace(",","."));
    diners = parseFloat (diners.replace(",","."));
    preu = preu.toFixed(2);
    diners = diners.toFixed(2);

    //Calculem el canvi que hem de donar
    let canvi = diners-preu; 
    

    // Processar les dades
    if (canvi<0){
        terminal.innerHTML += "Els diners introduïts no són suficients!";
    }
    else {
        terminal.innerHTML += "Gràcies per la compra! <br> El canvi és: " + canvi + " €<br>";
        canvi *= 100; //convertim € en cèntims
        
        if (canvi>=50000){
            terminal.innerHTML += "Donem 1 bitllet de 500€<br>";
           canvi-= 50000;
        }
        if (canvi>=40000){
            terminal.innerHTML += "Donem 2 bitllets de 200€<br>";
            canvi-= 40000;
        }
        if (canvi>=20000){
            terminal.innerHTML += "Donem 1 bitllet de 200€<br>";
            canvi-= 20000;
        }
        if (canvi>=10000){
            terminal.innerHTML += "Donem 1 bitllet de 100€<br>";
            canvi-= 10000;
        }
         if (canvi>=5000){
            terminal.innerHTML += "Donem 1 bitllet de 50€<br>";
            canvi-= 5000;
        }
         if (canvi>=4000){
            terminal.innerHTML += "Donem 2 bitllets de 20€<br>";
            canvi-= 4000;
        }
         if (canvi>=2000){
            terminal.innerHTML += "Donem 1 bitllet de 20€<br>";
            canvi-= 2000;
        }
         if (canvi>=1000){
            terminal.innerHTML += "Donem 1 bitllet de 10€<br>";
            canvi-= 1000;
        }
         if (canvi>=500){
            terminal.innerHTML += "Donem 1 bitllet de 5€<br>";
            canvi-= 500;
        }
        if (canvi>=400){
            terminal.innerHTML += "Donem 2 monedes de 2€<br>";
            canvi-= 400;
        }
        if (canvi>=200){
            terminal.innerHTML += "Donem 1 moneda de 2€<br>";
            canvi-= 200;
        }
        if (canvi>=100){
            terminal.innerHTML += "Donem 1 moneda de 1€<br>";
            canvi-= 100;
        }
        if (canvi>=50){
            terminal.innerHTML += "Donem 1 moneda de 50 cèntims<br>";
            canvi-= 50;
        } 
        if (canvi>=40){
            terminal.innerHTML += "Donem 2 monedes de 20 cèntims<br>";
            canvi-= 40;
        }
        if (canvi>=20){
            terminal.innerHTML += "Donem 1 moneda de 20 cèntims<br>";
            canvi-= 20;
        }
        if (canvi>=10){
            terminal.innerHTML += "Donem 1 moneda de 10 cèntims<br>";
            canvi-= 10;
        }
        if (canvi>=5){
            terminal.innerHTML += "Donem 1 moneda de 5 cèntims<br>";
            canvi-= 5;
        }
        if (canvi>=4){
            terminal.innerHTML += "Donem 2 monedes de 2 cèntims<br>";
            canvi-= 4;
        }
        if (canvi>=2){
            terminal.innerHTML += "Donem 1 moneda de 2 cèntims<br>";
            canvi-= 2;
        }
        if (canvi==1){
            terminal.innerHTML += "Donem 1 moneda de 1 cèntims<br>";
            canvi-= 2;
        }
    }
}
    
    
    
    
    /*
    let monedes = Math.trunc(canviCentims / 200);
    canviCentims %= 200;
    if (monedes > 0) {
        if (monedes == 1) resultat.innerHTML += "1 moneda de 2 euros<br>";
        else resultat.innerHTML += monedes.toFixed(0) + " monedes de 2 euros<br>";
    }

    monedes = Math.trunc(canviCentims / 100);
    canviCentims %= 100;
    if (monedes > 0) {
        if (monedes == 1) resultat.innerHTML += "1 moneda de 1 euro<br>";
        else resultat.innerHTML += monedes.toFixed(0) + " monedes de 1 euro<br>";
    }

    monedes = Math.trunc(canviCentims / 50);
    canviCentims %= 50;
    if (monedes > 0) {
        if (monedes == 1) resultat.innerHTML += "1 moneda de 50 cent<br>"
        else resultat.innerHTML += monedes.toFixed(0) + " monedes de 50 cent<br>";
    }

    monedes = Math.trunc(canviCentims / 20);
    canviCentims %= 20;
    if (monedes > 0) {
        if (monedes == 1) resultat.innerHTML += ("1 moneda de 20 cent<br>";
        else resultat.innerHTML += monedes.toFixed(0) + " monedes de 20 cent<br>";
    }

    monedes = Math.trunc(canviCentims / 10);
    //canviCentims %= 10; // No és necessari si no cal 5, 2 i 1 ctm
    if (monedes > 0) {
        if (monedes == 1) resultat.innerHTML += "1 moneda de 10 cent<br>";
        else resultat.innerHTML += monedes.toFixed(0) + " monedes de 10 cent<br>";
    }
    */   