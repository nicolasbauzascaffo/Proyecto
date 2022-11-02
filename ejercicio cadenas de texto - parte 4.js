let nombre = "Nicolas";
console.log (nombre)
let apellido = "Bauzá";
console.log (apellido)
let estudiante = nombre + " " + apellido;
console.log (estudiante);
let estudianteMayus = (estudiante.toLocaleUpperCase());
console.log (estudianteMayus);
let estudianteMinus = (estudiante.toLocaleLowerCase());
console.log (estudianteMinus);
var numerodeletras = estudiante.length;
console.log (numerodeletras)
var primeraletra = estudiante.charAt (0);
console.log (primeraletra);
var ultimaletra = estudiante.charAt (12);
console.log (ultimaletra);
var eliminarEspaciado = (estudiante.trim());
var contienenombre = (estudiante.includes ("Nicolas"));
console.log (contienenombre)
