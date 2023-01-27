// const natalia = {
//     name: "Natalia",
//     edad: 20,
//     cursosAprobados: [
//         "Curso definitivo html y css",
//         "Curso practico html y css"
//     ],
//     aprobarCurso(NuevoCurso) {
//         this.cursosAprobados.push(NuevoCurso);
//     }
// }

//Hacer que natalia apruebe otro curso
// console.log(natalia);
// natalia.aprobarCurso("Flex box")
// console.log(natalia);

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita Alejandra",
    18,
    [
        "Css grid",
        "Html basico"
    ]
);

console.log(juanita);

//Prototipos con sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student2(
    'Miguel',
    28,
    [
        "Analisis de negocios",
        "Principios de visualizacion de datos",
    ]
)
