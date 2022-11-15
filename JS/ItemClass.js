//Clase encargada de elementos en carrito
class Item {
    constructor(merchandise, amount){
        this.merchandise = merchandise;
        this.amount = amount;
    }
    total() {
        return this.merchandise.price * this.amount
    }
}