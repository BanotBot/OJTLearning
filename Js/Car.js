
class Car {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        return `Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }

    getBrand(){
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }
}

class Sedan extends Car {
    constructor(car, color, price, car_run) {
        super();
        this.car = car;
        this.color = color;
        this.price = price;
        this.car_run = car_run;
    }

    sedanDetails() {
        return ` = { ${this.car.getModel()} Color : ${this.color}, Price : ${this.price}, Car Run : ${this.car_run} }`;
    }
}


const viewDisplay = document.getElementById("view-display");
carObj = new Car("Toyota", "Camry", 2020);
carObjSedan = new Sedan(carObj, "Red", "$25000", "15000 miles");
// console.log("Brand : " + carObj.getBrand());
// console.log("Model : " + carObj.getModel());
// console.log("Year : " + carObj.getYear());
// console.log(carObj.displayInfo());
console.log("Calling the js file with the class containing");
console.log( "Car Full Details : " + carObj.displayInfo() + " specific model : " + carObjSedan.sedanDetails());
viewDisplay.innerText = "Car Full Details : " + carObj.displayInfo() + " specific model : " + carObjSedan.sedanDetails();

