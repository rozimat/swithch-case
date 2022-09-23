var elCat = document.querySelector("#cat");
var elDog = document.querySelector("#dog");
var elCuala = document.querySelector("#cuala");
var elLion = document.querySelector("#lion");
var elZebra = document.querySelector("#zebra");
var elGirafa = document.querySelector("#girafa");
var elRabbit = document.querySelector("#rabbit");
var elSquirrel = document.querySelector("#squirrel");
var elSnake = document.querySelector("#snake");

var elSel = prompt("Hayvon tanla: ");
switch(elSel.toLocaleLowerCase()){
  case "cat":
  elCat.style.display= "block"; break;
  case "dog":
  elDog.style.display= "block"; break;
  case "cuala":
  elCuala.style.display= "block"; break;
  case "lion":
  elLion.style.display= "block"; break;
  case "zebra":
  elZebra.style.display= "block"; break;
  case "girafa":
  elGirafa.style.display= "block"; break;
  case "rabbit":
  elRabbit.style.display= "block"; break;
  case "squirrel":
  elSquirrel.style.display= "block"; break;
  case "snake":
  elSnake.style.display= "block"; break;
}

