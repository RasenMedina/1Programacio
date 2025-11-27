"use strict";

// Inputs per introduir el nom i l'edat
const iPreuInicial = document.getElementById("preu");
const iDescompte = document.getElementById("dte");
const iIVA = document.getElementById("IVA");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let preu = iPreuInicial.value;
    let descompte = iDescompte.value;
    let IVA = iIVA.value;

    // Adaptar i processar les dades
    preu= parseFloat(preu.replace(",","."));
    descompte= parseFloat(descompte.replace(",","."));
    IVA= parseFloat(IVA.replace(",","."));
    
    //let preuDte = preu - preu * descompte / 100;      // Se li aplica el descompte al preu del producte
    //let preuIVA = preuDte + preuDte * IVA / 100;                    // Se li suma l' IVA després d' haver-li fet el descompte

    if (preu>=500){
        preu -= preu / 10; //Si el preu és majo a 500 fem descompte de 10%
    }
    
    if (preu<20){
        preu += 5; //Si el preu és superior a 20, s' afageix 5 per transport.
    }

    

    // Mostrar el resultat
    terminal.innerHTML += "Rasen guapo";
    //terminal.innerHTML += "<br> Preu introduït: " + preu; //mostra el preu introduït
    //terminal.innerHTML += "<br> Descompte introduït: " + descompte; //mostra el descompte introduït 
    //terminal.innerHTML += "<br> IVA introduït: " + IVA; //mostra l' IVA introduït 
    terminal.innerHTML += "<br> El preu de Dte és: " + preu; 
    /*
    let preu = prompt("Introdueix el preu");
    preu = parseFloat(preu);

    // Aplicar descompte
    if (preu >= 500) {
        preu -= preu * 10 / 100;
    }

    // Afegir transport
    if (preu < 20) {
        preu += 5;
    }

    alert("El preu final és " + preu);
    */
}