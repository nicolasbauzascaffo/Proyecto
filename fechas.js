const hoy = new Date ();
console.log (hoy);

const nacimiento = new Date (1993,9,26);
console.log (nacimiento);

var comparacion = (hoy.getTime(hoy) > nacimiento.getTime(nacimiento));

console.log (comparacion);

var mes = (nacimiento.getMonth() + 1);

console.log (mes);

var año = (nacimiento.getFullYear());

console.log (año);

