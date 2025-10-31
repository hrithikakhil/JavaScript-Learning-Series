class Car{

    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayInfo(){
        return `${this.year} ${this.color} ${this.brand} ${this.model}`;
    }

    refuel(amount){
        console.log(this.brand + ` Refueled ${amount} liters`);
    }
}

const c1 = new Car("Toyota", "Camry", 2020, "Red");
const c2 = new Car("Honda", "Civic", 2019, "Blue");        
const c3 = new Car("Ford", "Mustang", 2021, "Black");
//c1, c2, c3 are references to different Car objects

console.log(c1.displayInfo()); // 2020 Red Toyota Camry
console.log(c2.displayInfo()); // 2019 Blue Honda Civic
console.log(c3.displayInfo()); // 2021 Black Ford Mustang   
c3.refuel(50); // Refueled 50 liters

