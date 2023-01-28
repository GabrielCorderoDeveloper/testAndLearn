//Prototipos con sintaxis de clases

class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
         aprobarCurso(NuevoCurso) {
         this.cursosAprobados.push(NuevoCurso);
     }
}


const miguelito = new Student2({
        name: "Miguel",
        age: 23,
        email: "miguelito@platzi.com",
    });

   