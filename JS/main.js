//const userName = prompt("Ingresa tu nombre");
//let userAge = parseInt(prompt("Ingresa tu edad"));
const carrito = []
const stock = [
  { id: 1, name: "glicerina", price: 60 },
  { id: 2, name: "caléndula", price: 50 },
  { id: 3, name: "avena", pice: 70 },
  { id: 4, name: "café", price: 70 }
];


function welcome(a, b) {
    if (b >= 18) {
        Swal.fire({
          title: `¡Bienvenid@ ${a}!`,
          text: 'Disfruta tu visita',
            icon: 'success',
            confirmButtonText: 'Avanzar'
          })
          // alert(a + ", ¡bienvenid@ a Jabones Shaddai!");
        } else {
          Swal.fire({
        title: `¡Bienvenid@ ${a}!`,
        text: 'Antes de comprar pide permiso a tus padres',
        icon: 'info',
        confirmButtonText: 'Avanzar'
      })
    }
  }
  
  //welcome(userName, userAge)

  let seguir 
  let select
  let total= 0
  
  
  function agregarACarrito(carrito){
    do {
      select = parseInt(prompt("Ingresa la opción que quieres agregar a tu carrito" + "\n"
      + "1. Jabón de glicerina (60 MXN)" + "\n" 
      + "2. Jabón de caléndula (50 MXN)" + "\n"
      + "3. Jabón de avena (70 MXN)" + "\n" 
      + "4. Jabón de café (70MXN)"))
      seguir=prompt("¿quieres añadir algo más?")
    switch(select){
      case 1:
        select=stock.find((el) => el.name == "glicerina")
        carrito.push(select)
        total += 60
        break
      case 2:
        select=stock.find((el) => el.name == "caléndula")
        carrito.push(select)
        total += 50
        break
        case 3:
          select=stock.find((el) => el.name == "avena")
          carrito.push(select)
          total += 70
          break
          case 4:
            select=stock.find((el) => el.name == "café")
            carrito.push(select)
            total +=70
            break
            default:
              alert("ingresa una opción válida")
            }
          } while(seguir=="si")
  }
  agregarACarrito(carrito)
  console.log(carrito)

  carrito.forEach((item) => {
    alert(`Tienes en tu carrito: ${item.name}`)
    alert("tu total es de " + total)
  })
  