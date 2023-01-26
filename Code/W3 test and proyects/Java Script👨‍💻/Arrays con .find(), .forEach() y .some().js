var articulos =[ 
    { nombre: "Tv", costo: 600},
    { nombre: "Tv 4k", costo: 900},
    { nombre: "Laptop", costo: 400},
    { nombre: "Laptop gamer", costo: 1200},
    { nombre: "Iphone x", costo: 800},
    { nombre: "Iphone 14", costo: 1100},
    { nombre: "Bici", costo: 300},
    { nombre: "Nevera", costo: 600}
];

/*
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});