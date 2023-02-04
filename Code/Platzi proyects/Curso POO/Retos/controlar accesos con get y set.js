class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }

    get name(){
      return this._name;
    }

    set name(nuevoNombre) {
      if (typeof nuevoNombre == "string") {
        nuevoNombre = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.slice(1);
        this._name = nuevoNombre;
      } else {
        console.warn("No es un string asi que el nombre del curso no cambia");
        setTimeout(() => { console.warn(`El nombre actual es ${cursoDefinitivoHTML.name}`)}, 1000)
      }
  }

}
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });


  cursoDefinitivoHTML.name = 5;
  console.log("Output: " + cursoDefinitivoHTML.name);

  
  