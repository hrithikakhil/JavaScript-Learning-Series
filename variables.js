//3 types of variables in JS
//var
//let
//const

//scope of var is global and function/local
//scope of let and const is block level
//re-declaration is possible with var but not with let and const
//re-assignment is possible with var and let but not with const

var a = 10; //global scope
function varTest() {
    var y = 20; //local scope or function scope
}   
console.log(a); //10

//***********Learn about scope of var***********
var pop = "India";
function popTest() {
    var top = "Italy";
}
popTest();
//console.log(top); //top is not defined - scope of top is local to function popTest

//***********Learn about re-declaration and re-assignment of var***********
var browser = "Chrome";
var browser = "Firefox"; //re-declaration is possible
console.log(browser); //Firefox
browser = "Edge"; //re-assignment is possible
console.log(browser); //Edge
var empty; //declaration
console.log(empty); //undefined - default value
empty = null; //initialization
console.log(empty); //null - assigned value


//*************Why to avoid var?*************
//1. scope of var is global and function/local only - no block level scope
//2. re-declaration is possible - can lead to confusion and errors
//3. hoisting - var declarations are hoisted to the top of their scope and initialized with undefined


//let - scope is block level, no re-declaration, re-assignment is possible, no hoisting, default value is undefined, 
//can be declared without initialization, can be initialized with null
//block as in if, for, while, switch, try-catch
let b = 10; //global scope
let time = 5;
if (time < 10) {
    let greeting = "Good morning"; //block scope
    console.log(greeting); //Good morning
}   
//console.log(greeting) //greeting is not defined - scope of greeting is local to if block

//***********Learn about re-declaration and re-assignment of let***********
let city = "Pune";
//let city = "Mumbai"; //re-declaration is not possible - SyntaxError: Identifier 'city' has already been declared
console.log(city); //Pune
city = "Mumbai"; //re-assignment is possible
console.log(city); //Mumbai
let state; //declaration
console.log(state); //undefined - default value
state = null; //initialization
console.log(state); //null - assigned value
let num; //declaration
console.log(num); //undefined - default value
num = 18; //re-assignment
console.log(num); //20


//const - scope is block level, no re-declaration, no re-assignment, no hoisting, must be initialized during declaration,
//default value is not applicable, cannot be declared without initialization, can be initialized with null
const c = 10; //global scope
//c = 20; //re-assignment is not possible - TypeError: Assignment to constant variable
console.log(c); //10
console.log("abcdefghijklmnopqrstuvwxyz");

//***********Learn about scope of const***********  
const country = "India";
function countryTest() {
    const nation = "Italy";
}   
countryTest();
//console.log(nation); //nation is not defined - scope of nation is local to function countryTest
console.log(country); //India

//***********Learn about re-declaration and re-assignment of const***********
const fruit = "Apple";
//const fruit = "Mango"; //re-declaration is not possible - SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit); //Apple 
//fruit = "Mango"; //re-assignment is not possible - TypeError: Assignment to constant variable
console.log(fruit); //Apple
//const veg; //declaration without initialization is not possible - SyntaxError: Missing initializer in const declaration
const veg = null; //initialization with null is possible
console.log(veg); //null - assigned value       
//const price; //declaration without initialization is not possible - SyntaxError: Missing initializer in const declaration
price = 100; //re-assignment is not possible - SyntaxError: Missing initializer in const declaration
console.log(price); //undefined - default value is not applicable for const   

const days = 7;
console.log(days*100); //7