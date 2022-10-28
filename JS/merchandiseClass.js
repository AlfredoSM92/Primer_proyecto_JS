//Clase encargada de elementos en carrito
class Item {
    constructor(merchandise, cantidad){
        this.merchandise = merchandise;
        this.cantidad = cantidad;
    }

    total(){
        return this.cantidad * this.item.precio
    }
}