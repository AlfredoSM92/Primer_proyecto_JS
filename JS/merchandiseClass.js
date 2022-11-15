// Clase constructora para añadir más productos en el futuro.
class Merchandise {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

//Array de elementos en stock
const stock = [ ]

stock.push(new Merchandise("Jabón de glicerina", 60))
stock.push(new Merchandise("Jabón de caléndula", 50))
stock.push(new Merchandise("Jabón de avena", 70))
stock.push(new Merchandise("Jabón de café", 70))