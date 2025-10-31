let x = 30;
//THere is no compile time type checking in JavaScript
console.log(typeof x); // "number"  
x = "Hello";
console.log(typeof x); // "string"  
x = true;
console.log(typeof x); // "boolean"  
x = {name: "John", age: 25};
console.log(typeof x); // "object"  
x = [1, 2, 3];
console.log(typeof x); // "object"  (Arrays are of type "object" in JavaScript)
x = function() { return "Hi"; };
console.log(typeof x); // "function"

let y;
console.log(typeof y); // "undefined"
y = null;
console.log(typeof y); // "object"  (This is a known quirk in JavaScript)