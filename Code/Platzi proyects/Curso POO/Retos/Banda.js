let bateristaLimite = 1;
let bateristas = 0;

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if (integranteNuevo.instrumento == "Bateria") {
            bateristas += 1;
        } 

        if (integranteNuevo.instrumento == "Bateria" && bateristas > bateristaLimite ) {
            console.warn(`Lo sentimos, ${integranteNuevo.nombre} no puede unirse a la banda debido a
            que ya tenemos un beterista.`);
        } else {
            this.integrantes.push(integranteNuevo);
        }
    }
  }
  
const data = {
    nombre: "Los jack's",
    generos: ["Pop", "Rock"],
    integrantes: [],
}
const grupo = new Banda(data);

  //Crear clase Integrante
class Integrante {
    constructor({
        nombre,
        instrumento,
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
  }

  //integrantes
grupo.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }));
grupo.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }));
grupo.agregarIntegrante(new Integrante({ nombre: "Juan", instrumento: "Piano" }));
grupo.agregarIntegrante(new Integrante({ nombre: "Carlos", instrumento: "Bateria" }));
