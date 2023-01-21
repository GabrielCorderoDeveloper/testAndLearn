//tu eleccion
let op1 = "piedra"
let op2 = "papel"
let op3 = "tijera"

var eleccion = op1
var maquina = op3;

function Game(mano){

    if(mano == maquina){
        console.log("Ha sido un empate!");
        //manos ganadoras a continuacion
    } else if(mano == "papel" && maquina == "piedra"){
        console.log(`Oh no, tu ${mano} ha derrotado a mi poderosa ${maquina}`);
    } else if(mano == "tijera" && maquina == "papel"){
        console.log(`Oh no, tu ${mano} ha derrotado a mi poderosa ${maquina}`)
    } else if(mano == "piedra" && maquina == "tijera"){
        console.log(`Oh no, tu ${mano} ha derrotado a mi poderosa ${maquina}`)
    } 
       //manos perdedoras a continuacion
    else if(mano == "piedra" && maquina == "papel"){
        console.log(`Tu ${mano} fue destruida por mi poderosa ${maquina}`);
    } else if(mano == "papel" && maquina == "tijera"){
        console.log(`Tu ${mano} fue destruida por mi poderosa ${maquina}`);
    } else if(mano == "tijera" && maquina == "piedra"){
        console.log(`Tu ${mano} fue destruida por mi poderosa ${maquina}`);
    } else{
        console.log("Invalido");
    }
}

Game(eleccion);