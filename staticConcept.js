//static is used to define a property that belongs to the class itself, not to instances of the class
//static properties are accessed using the class name, not the instance name
//static properties are shared among all instances of the class

class Car{
    static wheels = 4;
    
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    static stop(){
        console.log('Car stopped');
    }

    drive(){
        console.log('Car is driving');
    }

    getInfo(){
        return `${this.name} ${this.model} has ${Car.wheels} wheels and costs $${this.price}`;
    }
}

let car1 = new Car('BMW', 'X5', 50000);
console.log(Car.wheels);
let consoleans = car1.getInfo();
console.log(consoleans);
Car.stop();
car1.drive();