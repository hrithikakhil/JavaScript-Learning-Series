//parent class can also be called base class or super class
class Automobile {
    constructor(chasisisNumber, engineNumber){
        this.chasisisNumber = chasisisNumber;
        this.engineNumber = engineNumber;
    }
    displayInfo(){
        return `Chasisis Number: ${this.chasisisNumber}, Engine Number: ${this.engineNumber}`;
    }
}
class Vehicle extends Automobile {
    constructor(chasisisNumber, engineNumber, brand, model, year, color){
        super(chasisisNumber, engineNumber); //call the parent class constructor
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayInfo(){
        return `${super.displayInfo()} ${this.year} ${this.color} ${this.brand} ${this.model}`;
    }
}
const myVehicle = new Vehicle("CH12345", "EN67890", "BMW", "X5", 2023, "Black");
console.log(myVehicle.displayInfo());


class Car extends Vehicle {
    constructor(brand, model, year, color, doors){
        super(brand, model, year, color); //call the parent class constructor   
        this.doors = doors;
    }
    refuel(amount){
        console.log(this.brand + ` Refueled ${amount} liters`);
    }
}

const myCar = new Car("Tesla", "Model S", 2022, "White", 4);
console.log(myCar.displayInfo());



class Truck extends Vehicle {
    constructor(brand, model, year, color, capacity){
        super(brand, model, year, color); //call the parent class constructor
        this.capacity = capacity; //in tons
    }
    load(weight){
        if(weight <= this.capacity){
            console.log(`Loaded ${weight} tons`);
        } else {
            console.log(`Cannot load ${weight} tons. Exceeds capacity of ${this.capacity} tons`);
        }
    }
}
const myTruck = new Truck("Volvo", "FH16", 2021, "Blue", 25);
console.log(myTruck.displayInfo());
myTruck.load(20);

//Multiple Inheritance is not supported in JavaScript
//A class can only extend one parent class
//However, we can achieve similar functionality using mixins or interfaces (not natively supported in JS)