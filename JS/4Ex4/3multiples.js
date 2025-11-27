"use strict";

// Inputs per introduir el nom i l'edat
const iNum1 = document.getElementById("n1");
const iNum2 = document.getElementById("n2");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let num1 = iNum1.value;
    let num2 = iNum2.value;


    // Processar les dades

    num1= parseInt(num1);
    num2= parseInt(num2);


    if (num1%num2 == 0){                        //Si el residu de número 1 / número 2 és igual a 0
        terminal.innerHTML = "És múltiple";
    } else {                                    //Si el residu de número 1 / número 2 no és igual a 0 
        terminal.innerHTML = "No és múltiple";
    }


}