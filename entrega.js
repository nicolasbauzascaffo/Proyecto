var compra = ["Leche", "Manteca", "Dulce de Leche", "Pan", "Cerveza"];
compra.push("aceite");
console.log (compra);
compra.pop ();
console.log (compra);

const pelicula = [
    {Titulo: "Harry Potter", Director: "David Yates" , Fecha: 2001},
    {Titulo: "Predator", Director: "John McTiernan" , Fecha: 2018},
    {Titulo: "El Exorcista", Director: "William Friedkin" , Fecha: 1973},
];

const anterior2010 = pelicula.filter (function (nom) {
    if (nom.Fecha < 2010) {
        return true
    }
})

console.log (anterior2010);

let nombres = pelicula.map (function (a,b,c) {
    return a.Director
})
console.log (nombres)

let pelis = pelicula.map (function (a,b,c) {
    return a.Titulo
})

console.log (pelis);



const contactenada = nombres.concat (pelis);
console.log (contactenada);

console.log  (...contactenada);
