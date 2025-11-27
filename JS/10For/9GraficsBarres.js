"use strict";
alert("Rasen programador pro");

/*
Utilitza bucles for per dibuixar amb diferents símbols un gràfic de barres amb 3 valors.

El gràfic s'ha de dibuixar en horitzontal i les barres han de tenir amplada 2.

Opcional: intenta fer el gràfic en vertical i amb una amplada de 5 per cada barra.
Primer pots provar a fer-ho invertit (les barres cap avall) i després amb les barres cap amunt.
*/

//Preguntem i comprovem el valor 1
let val1=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val1) || val1<1 || val1>100){
    alert("Ha de ser un número entre 1 i 100");
    val1=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
}
//Preguntem i comprovem el valor 2
let val2=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val2) || val2<1 || val2>100){
    alert("Ha de ser un número entre 1 i 100");
    val2=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
}
//Preguntem i comprovem el valor 3
let val3=parseInt(prompt("Introdueix el valor 1(1-100)").trim());
while (isNaN(val3) || val3<1 || val3>100){
    alert("Ha de ser un número entre 1 i 100");
    val3=parseInt(prompt("Introddueix el valor 1(1-100)").trim());
}

let max=Math.max(val1,val2,val3);
let missatge="";

for(let i=0;i<max;i++){
  //Emplenem # o no
  for(let j=0;j<5;j++){
    if(i<val1) missatge += "#";
    else missatge += " ";
  }
  missatge += " ";

  if(i>val3 & i>val2) missatge += "\n"; //si ja no hem d' emplenar més O ni X fem salt de línia
  else{  //Emplenem O o no
    for(let k=0;k<5;k++){
      if(i<val2) missatge += "O";
      else missatge += " ";
    }
    missatge += " ";
  
    //X
    if(i>=val3) missatge += "\n"; //si ja no hem d' emplenar més X fem salt de línia
    else{
      for(let l=0;l<5;l++){
        if(i<val3) missatge += "X";
        else missatge += " ";
      }
       missatge += "\n";
    }
  }
}
console.log(missatge);


/*
for(let i=0;i<2;i++){
  for(let j=0;j<val1;j++){
    missatge += "#";
  }
  missatge += "\n";
}

for(let i=0;i<2;i++){
  for(let j=0;j<val2;j++){
    missatge += "O";
  }
  missatge += "\n";
}

for(let i=0;i<2;i++){
  for(let j=0;j<val3;j++){
    missatge += "X";
  }
  missatge += "\n";
}
*/





