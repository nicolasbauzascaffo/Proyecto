var texto = "hola soy un texto con comillas dobles";
console.log (texto);
var texto1 = `hola soy nicolas`
console.log (texto1)

let nombre = `Nicolas`;
let apellido = `Bauzá`;

console.log (`hola mi nombre es ${nombre} ${apellido}`)

let numeros = [1,2,3,4,5,6,7,8,9,10]

let nuevo = numeros.slice (0,3);
console.log (nuevo)

let col = numeros.splice (0,3);
console.log (col)

let surname = "Hola mi apellido es Bauza";
console.log (surname.replace ("Bauza", "Scaffo"));


let los = "Los dias lunes, me gusta comer los platanos que caen de los arboles";
console.log (los.replace(/los/g, "para"));

var contraseña = "pepe";
var contra = "Pepe";

console.log (contraseña.toLocaleUpperCase === contra.toLocaleUpperCase)
console.log (contraseña.toLocaleUpperCase === contra.toLocaleLowerCase)

console.log (contra.toLocaleUpperCase ())

console.log (contraseña.concat(contra));

var nicolas = "hola mi nombre es nicolas";
console.log (nicolas.length)
console.log (nicolas.charAt (0))

console.log ((nicolas.toLocaleUpperCase ()).charAt(0))
console.log ((nicolas.toLocaleUpperCase ()).charAt(1))
console.log ((nicolas.toLocaleUpperCase ()).charAt(2))
console.log ((nicolas.toLocaleUpperCase ()).charAt(3))
console.log ((nicolas.toLocaleUpperCase ()).charAt(4))

console.log (nicolas.lastIndexOf ("nombre"));
console.log (nicolas.charAt(8));

let texto = "Hola mi nombre es Nicolas Bauzá y me gustan los autos con los mejores motores de las automotoras; no me gusta no dormir";

console.log (texto.match(/los/g))

console.log (texto.includes("Nicolas"))

console.log (texto.startsWith("Hola"));
console.log (texto.endsWith("si."));