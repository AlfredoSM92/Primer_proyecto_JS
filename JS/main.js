const carrito = [];
let table = document.getElementById("cart");
let footer = document.getElementById("total");

// Agregar event listener en cada botón "Agregar al carrito"
const cartButton = document.querySelectorAll(".addToCart");
cartButton.forEach((el)=> el.addEventListener("click", identificator));

// Identificar la tarjeta seleccionada
function identificator(event){
    event.preventDefault();
    let card = event.target.closest(".product");
    //Bucar elemento en HTML que coincida con stock para acceder a poder acceder a las opciones del objeto.
    let element = stock.find((el)=> el.name == card.querySelector(".subtitle").textContent);
    addToCart(element);
}

//Agregar a carrito.
function addToCart(element){
    let product = new Item(element, 1);
    carrito.push(product);
    createRow(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    refreshTotal();
}

//Manipulación de DOM
function createRow(item){
    let row = document.createElement("tr");
    let data = document.createElement("td");
    let pos = carrito.indexOf(item)

    //Appendear nombre de producto.
    data.innerText = item.merchandise.name;
    row.append(data);

    data=document.createElement("td");

    //Creación y appendeo de botón "menos" para disminuir cantidad.
    let buttonLess = document.createElement ("button");
    buttonLess.className="less";
    buttonLess.innerText = "-";
    data.append(buttonLess);

    //Appendeo de cantidad
    data.append(item.amount);

    //Creación y appendeo de botón "más" para aumentar cantidad.
    let buttonPlus = document.createElement("button");
    buttonPlus.className = "plus";
    buttonPlus.innerText = "+";
    data.append(buttonPlus);

    //Appendeo de botones de cantidad y valor de cantidad en una celda.
    row.append(data);
    
    //Escuchador de eventos de botones de cantidad.
            buttonPlus.addEventListener("click", () => {
                 item.amount ++;
               localStorage.setItem("carrito", JSON.stringify(carrito));
               refreshCart();
               refreshTotal();
              });

         buttonLess.addEventListener("click", () => {
             if(item.amount > 1){
               item.amount --;
               localStorage.setItem("carrito", JSON.stringify(carrito));
               refreshCart();
               refreshTotal();
              } else{
                Swal.fire({
                    // title: `${userName} no se puede disminuir más`,
                    text: 'Intenta eliminar el artículo',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
              }
             });

    // Appendeo de precios por elementos
    data = document.createElement("td");
    let subtotal = item.total()
    data.innerText = subtotal
    row.append(data);

    //Funcionamiento de eliminación de filas.
    data = document.createElement("td");
    let erase = document.createElement("button");
    erase.className = "erase";
    erase.innerText = "Borrar";
    data.append(erase);
    row.append(data);
    erase.addEventListener("click", (event)=> {
        event.preventDefault();
        carrito.splice(pos,1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        refreshCart();
        refreshTotal();
    });
    
    //Appendeo de filas en la tabla.
    table.append(row);

}

//Total precios
let refreshTotal = ()=> {
    footer.innerHTML = " ";
    let row = document.createElement("tr");
    let data = document.createElement("td");
    data.setAttribute("colspan", "2")
    let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.total(), 0);
    data.innerHTML =`<tr>
    <td>Total: </td>
    <td>${total}</td>
    </tr>`;
    row.append(data);
    footer.append(row);

    //Creación de botón "vaciar carrito". Ya que va en el footer de la tabla
    data = document.createElement("td")
    let cleanCart = document.createElement("button")
    cleanCart.className = "cleanAll";
    cleanCart.innerText = "Borrar carrito"
    cleanCart.addEventListener("click", vaciarCarrito);
    data.append(cleanCart)
    row.append(data);
    footer.append(row);
}

//Refresh Carrito
function refreshCart(){
    table.innerHTML = " ";
    for (element of carrito) {
        createRow(element)
    }
}

// Vaciar carrito función
function vaciarCarrito(event){
    event.preventDefault();
    carrito.length = 0;
    table.innerHTML = " ";
    localStorage.setItem("carrito", JSON.stringify(carrito));
    refreshTotal()
    
}