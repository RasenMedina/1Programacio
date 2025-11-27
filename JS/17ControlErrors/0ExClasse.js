/*
CONTROL D' ERRORS
*/

"use strict";
alert("Rasen programador pro");

try {
    f1();
    console.log("Hem acabat el try");
} catch (e) { //Pots posar qualsevol lletra però ha de ser el mateix al alert 
    alert(e)
    let element = document.createElement("div");
    document.body.appendChild(element);
    element.innerHTML = "ADEU";
}


function f1() {
    f2();
    console.log("f1 executada");
}

function f2() {
    f3();
    console.log("f2 executada");
}

function f3() {
    f4();
    console.log("f3 executada");
}

function f4() {
    let element = document.getElementById("termina");
    if (element == null) throw new Error("ERROOOOOOOR!!!!!");
    element.innerHTML = "hola";
    console.log("Tot Ok f4 executada");
}


console.log("Programa finalitzat correctament");