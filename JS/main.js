const userName = prompt("Ingresa tu nombre");
let userAge = parseInt(prompt("Ingresa tu edad"));

function welcome(a, b) {
    if (b >= 18) {
        alert(a + ", ¡bienvenid@ a Jabones Shaddai!");
    } else {
        alert(a + ", antes de comprar pide permiso a tus padres.")
    }
}

welcome(userName, userAge)

function comprar() {
    let products=parseInt(prompt("¿Cuántos productos deseas comprar?"));
    let options = ""
    for (i = 1; i <= products; i++) {
        alert("Introduce la opción deseada para añadir a carrito");
        options = prompt("a) Jabón para manos \nb) Jabón para cara \nc) Jabón corporal");
        switch(options){
            case("a"):
            alert("Agregaste jabón para manos");
            break;
            case("b"):
            alert("Agregaste jabón para cara");
            break;
            case("c"):
            alert("Agregaste jabón corporal");
            break;
            default:
            alert("Selecciona una opción adecuada");
        }
    }
    alert("En tu carrito hay " + products + " productos.");
}

comprar();

