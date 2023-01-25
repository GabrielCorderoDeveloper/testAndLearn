var objetos = [];

function crearObjetos() {
    var objeto1 = {nombre: "objeto1", valor: 1};
    var objeto2 = {nombre: "objeto2", valor: 2};
    var objeto3 = {nombre: "objeto3", valor: 3};
  }

  function verObjetos(objetos) {
    for (var i = 0; i < objetos.length; i++) {
      console.log(objetos[i].nombre);
    }
  }


crearObjetos();
verObjetos(objetos);