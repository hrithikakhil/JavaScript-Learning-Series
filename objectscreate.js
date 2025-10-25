//1. Object Literals: {}
const user = {
    name: "Hrithik",
    age: 25,
    country: "India",
    occupation: "SDET"
}
const key = "age";

//2. Accessing Object Properties
console.log(user.name);          // Dot Notation
console.log(user['country']);    // Bracket Notation
console.log(user[key]);          // Using Variable as Key
console.log(user.name);
console.log(user['occupation']);

//3. Adding New Properties
user.email = "exzmple@gmail.com";          // Dot Notation
user['phone'] = "123-456-7890";    // Bracket Notation
console.log(user);

//4. Modifying Existing Properties
user.age = 26;          // Dot Notation
user['country'] = "USA";    // Bracket Notation
console.log(user);

//5. Deleting Properties
delete user.occupation;          // Dot Notation
delete user['phone'];    // Bracket Notation
console.log(user);

//6. Checking Property Existence
console.log('name' in user);          // Using 'in' Operator
console.log(user.hasOwnProperty('email'));    // Using hasOwnProperty Method    

//7. Iterating Over Object Properties
for (let prop in user) {
    console.log(`${prop}: ${user[prop]}`);
}

//8. Object Methods
user.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
user.greet();

//9. Nested Objects
user.address = {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
};
console.log(user.address.city); // Accessing Nested Object Property

//10. Object Destructuring
const { name, age } = user;
console.log(`Name: ${name}, Age: ${age}`);
//The above lines are equivalent to:
//const name = user.name;
//const age = user.age;

//11. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(user));        // Get all keys
console.log(Object.values(user));      // Get all values
console.log(Object.entries(user));     // Get all key-value pairs as arrays

//12. Merging Objects
const additionalInfo = {
    hobby: "Photography",
    married: false
};
const mergedUser = Object.assign({}, user, additionalInfo);
console.log(mergedUser);

//Constructor Function to create multiple similar objects
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;   
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);
console.log(car1);
console.log(car2);  

//Class Syntax to create multiple similar objects
class Customer {
    constructor(name, age, membership){
        this.name = name;
        this.age = age;
        this.membership = membership;
    }

    addToCart(item){
        console.log(`${item} added to cart for ${this.name}`);
    }
}

const customer1 = new Customer("Alice", 30, "Gold");
const customer2 = new Customer("Bob", 28, "Silver");
console.log(customer1);
console.log(customer2);
customer1.addToCart("Laptop");
customer2.addToCart("Smartphone");

//Object.create() method to create a new object with a specified prototype
const proto = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const person = Object.create(proto);
person.name = "Charlie";
person.greet();

//Using Factory Function to create objects - returning object literals from a function
function createDepartment(name, head){
    return {
        name: name,
        head: head,
        getDetails: function(){
            return `${this.name} department is headed by ${this.head}`;
        }
    };
}
const dept1 = createDepartment("Engineering", "David");
const dept2 = createDepartment("Marketing", "Eva");
console.log(dept1.getDetails());
console.log(dept2.getDetails());    

//conclusion: This code demonstrates various ways to create, access, modify, and manipulate objects in JavaScript using object literals, constructor functions, and class syntax.