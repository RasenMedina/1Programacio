"use strict";
alert("Rasen programador pro");

/*
El programa recibirá, por la entrada estándar, un conjunto de casos de prueba, cada uno en una línea. Cada caso de prueba estará compuesto de un número de vivienda. Se garantiza que nunca será mayor que 1.000.
El último caso, que no deberá procesarse, será el número 0.
Para cada caso de prueba el programa escribirá "IZQUIERDA" (sin las comillas) si la vivienda está situada a la izquierda de la calle, y "DERECHA" si está a la derecha.
*/

let n = parseInt(prompt("Introdueix un número <1000 (0 per acabar)"));
let missatge = "";

while (n > 0){
  if (n % 2 == 0) missatge += "DERECHA";
  else missatge += "IZQUIERDA";
  missatge += "\n";
  n = parseInt(prompt("Introdueix un número <1000 (0 per acabar)"));
} 

  console.log(missatge);


/*
import java.util.Scanner;

public classic Hola Mundo {

int n = Scanner();

while (n > 0){
  if (n % 2 == 0) missatge += "DERECHA";
  else missatge += "IZQUIERDA";
  missatge += "\n";
  n = parseInt(prompt("Introdueix un número <1000 (0 per acabar)"));
} 



}




*/