//MethodOverriding is a feature that allows a subclass or child class to provide a specific implementation of a method that is already defined in its superclass or parent class.
//When a method in a subclass has the same name, same parameters or signature, and same return type(or sub-type) as a method in its super-class, then the method in the subclass is said to override the method in the super-class.

class Car{
    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    startEngine(){
        console.log('Engine started');
    }

}

class BMW extends Car{
    constructor(name, model, price){
        super(name, model);
        this.price = price;
    }
    startEngine(){ //Method Overriding
        console.log('BMW Engine started with a roar!');
    }

}   

let car1 = new Car('Toyota', 'Corolla');
car1.startEngine(); // Output: Engine started
let bmw1 = new BMW('BMW', 'X5', 50000);
bmw1.startEngine(); // Output: BMW Engine started with a roar!

console.log(bmw1.name); // Output: BMW
console.log(bmw1.model);