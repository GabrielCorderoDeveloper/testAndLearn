const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
};

const obj2 = {};

/* Este for copia el valor de cada propiedad y lo pone en el objeto 2
El problema es que no funciona bien si el obj1 tiene otro objeto dentro de si,
esto es shallow copy(copia superficial)  */
for (prop in obj1)  {
    obj2[prop] = obj1[prop];
}

//Este metodo tiene el mismo problema que el for
const obj3 = Object.assign({}, obj1);

//En este metodo no hay ningun problema
const obj4 = Object.create(obj1);