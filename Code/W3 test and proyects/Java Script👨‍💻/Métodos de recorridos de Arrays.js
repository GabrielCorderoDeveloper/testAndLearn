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

var articulosFilrados = articulos.filter(function(articulo){
    return articulo.costo <= 800
});

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});