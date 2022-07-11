var cafecito = require("express");
var aplication = cafecito();

//http://192.168.1.51:8989 esa es la ip

aplication.get("/", inicio);
aplication.get("/cursos", cursos)

function inicio(peticion, resultado)
{
    resultado.send("Dame <strong>dinero $$$</strong>")
}

function cursos(peticion, resultado)
{
    resultado.send("Comprame <strong>tesla</strong>")
}

aplication.listen(8989);