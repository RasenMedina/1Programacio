/*
Calculadora amb funcions i try/catch
*/

"use strict";
alert("Rasen programador pro");


let n1 = llegirEnter();
let n2 = llegirEnter();
let op = llegirOperacio();

while (n1 != 0 && n2 != 0){
    try {
        if (op == "+" || op == "sumar"){
            return ("La suma és: " + sumar(n1,n2));
        }
        else if (op == "-" || op == "restar"){    
            return ("La resta és: " + restar(n1,n2));
            
        }
        else if (op == "*" || op == "multiplicar"){
            alert ("La multiplicació és: " + multiplicar(n1,n2));
        }
        else if (op == "/" || op == "dividir"){
            alert ("La divisió és: " + dividir(n1,n2));
        }
        else {
            alert ("Operació no vàlida, torna a introduir 2 números i 1 operació");
        }
    } 
    catch (e) { //Pots posar qualsevol lletra però ha de ser el mateix al alert 
        alert(e)
        if (isNaN(n1)){
            n1=llegirEnter();
            if (isNaN(n1)) alert ("Eres tonto, entra un número!!!")
        }
        if (isNaN(n2)){
            n2=llegirEnter();
            if (isNaN(n2)) alert ("Eres tonto, entra un número!!!")
        }
        if (n2 == 0 && (op == "-" || op == "dividir")){
            alert ("La divisió no es pot fer, torna a introduir 2 número i 1 operació")
        }
    }
    n1 = llegirEnter();
    n2 = llegirEnter();
    op = llegirOperacio();
}

function llegirEnter (){ //retorna un enter 
    return parseInt(prompt("Introdueix un número enter"));
} 

function llegirOperacio(){ //retorna una operaacio en forma d' String
    return prompt("Introdueix la operació que vols fer entre els dos nombres (+ , - , * , / )");
}

function sumar (n1, n2) { //donats dos valors, retorna la seva suma;
    let suma = n1 + n2;
    if (isNaN(suma)) throw new Error("Algun valor no és un número");
    return n1 + n2;
}

function restar (n1, n2) { //donats dos valors, retorna la resta del primer menys el segon
    return n1 - n2;
}

function multiplicar (n1, n2) { //donats dos valors, retorna la multiplicació entre els dos
    return n1 * n2;
}

function dividir (n1, n2) { //donats dos valors, retorna la divisió entre el primer dividit pel segon
    if (n2 == 0) throw new Error ("El segon número no pot 0");
    else return n1 / n2; 
}
