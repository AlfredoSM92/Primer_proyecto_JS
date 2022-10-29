// Clase constructora para añadir más productos en el futuro.
class merchandise {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

//Array de elementos en stock
const stock = [ ]

stock.push(new merchandise("glicerina", 60))
stock.push(new merchandise("calendula", 50))
stock.push(new merchandise("avena", 70))
stock.push(new merchandise("cafe", 70))