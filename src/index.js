import Memento from "./Memento";

class Car extends Memento {

    constructor(name, model) {
        super();
        this.name = name;
        this.model = model;
    }
}

let ferrari = new Car("Ferrari", "220");
console.log(ferrari);
let saveState = ferrari.hydrante();
console.log(saveState);
ferrari.name = "Renault";
console.log(ferrari);
ferrari.dehydrate(saveState);
console.log(ferrari);