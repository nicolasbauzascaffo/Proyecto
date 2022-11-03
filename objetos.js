const nicolas = {
        nombre: "Nicolás",
        apellido: "Bauzá",
        edad: 29,
        altura: 1.89,
        eresDesarrollador: true
};

var edad= nicolas.edad;
console.log (edad);

const amigos = [
        {nombre: "Nicolás", apellido: "Bauzá", edad: 29, altura: 1.89, esDesarrollador: true},
        {nombre: "Nicolás", apellido: "Mondelli", edad: 28, altura: 1.82, esDesarrollador: false},
        {nombre: "Santiago", apellido: "Smeding", edad: 29, altura: 1.75, esDesarrollador: false},
]

const ordenada = amigos.sort (function (a,b) {
    return (b.edad) - (a.edad)
 })

console.log (ordenada)
