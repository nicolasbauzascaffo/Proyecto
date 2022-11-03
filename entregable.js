function saludar () {
    console.log ("Hola")
}

saludar ();

function cincosegundos () {
    setTimeout(() => {
        console.log ("Hola soy una promesa")
    }, 5000);
}

cincosegundos ();


function* generarID () {
    let id = 0;
    while (true) {
        id = id+2
        if ( id > 100) {
            return
        }
        yield id
    }
}

const gen = generarID ();

console.log (gen.next())
console.log (gen.next())
console.log (gen.next())
console.log (gen.next())
console.log (gen.next())
console.log (gen.next())
console.log (gen.next())
console.log (gen.next())