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

function identificacion(evento){
    evento.preventDefault();
    let object = evento.target.classList[1];
    carrito.push(new merchandaise(object, 1))
    console.log(carrito);
}