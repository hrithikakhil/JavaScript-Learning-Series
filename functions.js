//Function Declarations
function add(a, b){
    return a + b;
}

add(2, 3); //5
console.log(add(2, 3));

//Function Expressions
const subtract = function (a, b){
    return a - b;
}   

subtract(5, 2); //3
console.log(subtract(5, 2));

//Arrow Functions
const divide = (a, b) => {
    return a/b;
}

let div = divide(10, 2); //5
console.log(divide(10, 2));

//Implicit return with arrow function
const multiply = (a, b) => a * b;
let mul = multiply(3, 4); //12
console.log(mul);

//IIFE - Immediately Invoked Function Expression 
//Note the parentheses around the function definition and the invocation at the end
//Also this functiona cannot be called again as it is not assigned to any variable but can be called later if assigned to a variable

(function greet(name){
    console.log("Hello, " + name + "!");
})("Alice");

//How to call later
const greetLater = (function(name){
    return function(){
        console.log("Hello, " + name + "!");
    }
})("Bob");
greetLater(); //Hello, Bob!

//Function constructor
const func = new Function('x', 'y', 'return x + y;');
let result = func(7, 8);
console.log(result); //15


//Function as first-class citizens aka higher-order functions
function operate(a, b, operation){
    return operation(a, b);
}   

let sum = operate(4, 5, add); //9
console.log(sum);
let difference = operate(10, 3, subtract);
console.log(difference); //7
let product = operate(6, 7, multiply);
console.log(product); //42


//Generator Functions
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let generator = generateNumbers();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//Anonymous Functions - no name
const numbers = [1, 2, 3, 4, 5];
let squarenum = numbers.map(function(num){
    return num * num;
}); // [1, 4, 9, 16, 25]
console.log(squarenum);
//Using arrow function as anonymous function
let cubenum = numbers.map((num) => num * num * num); // [1, 8, 27, 64, 125]
console.log(cubenum);

//Recursive Functions
function nFactorial(num){
    if(num===0 || num===1){
        return 1;
    }else{
        return num * nFactorial(num-1);
    }
}

console.log(nFactorial(5)); //120
console.log(nFactorial(0)); //1


