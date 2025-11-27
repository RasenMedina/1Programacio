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
    let preuInicial = iPreuInicial.value;
    let descompte = iDescompte.value;
    let IVA = iIVA.value;

    // Adaptar i processar les dades
    preuInicial= parseFloat(preuInicial.replace(",","."));
    descompte= parseFloat(descompte.replace(",","."));
    IVA= parseFloat(IVA.replace(",","."));
    
    let preuDTE = preuInicial - preuInicial * descompte / 100;      // Se li aplica el descompte al preu del producte
    let preuIVA = preuDTE + preuDTE * IVA / 100;                    // Se li suma l' IVA després d' haver-li fet el descompte

    // Mostrar el resultat
    terminal.innerHTML += "Rasen guapo";
    terminal.innerHTML += "<br> Preu introduït: " + preuInicial; //mostra el preu introduït
    terminal.innerHTML += "<br> Descompte introduït: " + descompte; //mostra el descompte introduït 
    terminal.innerHTML += "<br> IVA introduït: " + IVA; //mostra l' IVA introduït 
    terminal.innerHTML += "<br> El preu després d'aplicar el descompte és: " + preuDTE; 
    terminal.innerHTML += "<br> El preu després d'aplicar el descompte i l' IVA és: " + preuIVA;
    
}