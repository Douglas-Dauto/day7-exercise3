// Day 7 - Exercise 3

const text: HTMLElement = document.getElementById("texto");

class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
}

class Desk extends Furniture {
    kind() {
        const valueText: string = `This is a desk made by ${this.manufacturer}<br>`;
        console.log(valueText)
        text.innerHTML += valueText;
    }
}

class Chair extends Furniture {
    kind() {
        const valueText: string = `This is a chair made by ${this.manufacturer}<br>`;
        console.log(valueText)
        text.innerHTML += valueText;
    }
}

const desk: Desk = new Desk()
desk.kind()
// desk.manufacturer // Deve retornar um erro // Descomente para ver o erro

const chair: Chair = new Chair()
chair.kind()
// chair.manufacturer // Deve retornar um erro // Descomente para ver o erro