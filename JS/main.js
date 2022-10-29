carrito = []

// Función de registro de usuario
// const userValidation = () => {
//     const userName = prompt("Ingresa tu nombre de usuario");
//     let userAge = parseInt(prompt("Ingresa tu edad"));
//     if (userAge >= 18) {
//         Swal.fire(
//             `¡Bienvenid@ ${userName}!`,
//             'Disfruta mucho tu visita',
//             'success'
//         )
//     } else {
//         Swal.fire(
//             `${userName}`,
//             'Antes de comprar pide permiso a tus padres',
//             'info'
//         )
//     }
//     localStorage.setItem('username', userName);
// }

//userValidation ()

//Control de eventos en DOM
let buttonsCart = document.querySelectorAll(".addToCart");
buttonsCart.forEach((element) => {
    element.addEventListener("click", identificacion);
})

function identificacion(evento) {
    evento.preventDefault();
    let element = evento.target.classList[1];
    carrito.push(new Item(element, 1));
    agregar();
}

function agregar() {
    console.log(carrito)
    let nameItem
    let itemCant
    for (item of carrito) {
        nameItem = item.merchandise
        itemCant = item.amount
    }

    let table = document.getElementById("cart")
    let row = document.createElement("tr");
    let data = document.createElement("td");
    data.innerHTML = `Jabón de ${nameItem}`;
    row.append(data);

    //Control celdas de cantidad
    data = document.createElement("td");
    let buttonLess = document.createElement("button"); //Boton disminuir cantidad
    buttonLess.innerText = "-"
    buttonLess.className = "less"

    let buttonPlus = document.createElement("button");
    buttonPlus.innerText = "+"
    buttonPlus.className = "plus"
    data.append(buttonLess)
    data.append(itemCant)
    data.append(buttonPlus)
    row.append(data);

    data = document.createElement("td");
    for(element of stock){
        if(nameItem == element.name){
            data.innerText = element.price
        }
   }
    row.append(data);

    table.append(row);
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Control de botones de cantidad.
