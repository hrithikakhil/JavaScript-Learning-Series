const square = number => number * number;
let result = square(5);
console.log(result); // 25

//Arrow Function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // "Hello, World!"

//Arrow Function with multiple parameters
//Note we dont need parentheses for single parameter but we do for multiple parameters
const add = (a,b) => a + b;
let sum = add(3, 7);
console.log(sum); // 10

const personInfo = {
    firstName: "John",
    lastName: "Doe",
    //Method using arrow function   
    getFullName: () => {
        //Note: 'this' does not refer to the personInfo object here
        return this.firstName + " " + this.lastName; //undefined undefined
    }
}
console.log(personInfo.getFullName()); // undefined undefined

//Here's why it returns undefined:
//In arrow functions, 'this' is lexically bound, meaning it uses 'this' from the surrounding code context.
//Here’s what’s happening:

/*getFullName is an arrow function.
Inside an arrow function, this is not bound to the object (personInfo).
Instead, it takes this from the outer scope — in this case, the global scope (window in browsers or undefined in strict mode).
Since window.firstName and window.lastName (or global ones) don’t exist, they are undefined.
*/

//Here's a correct way to define a method in an object using a regular function
const personInfoCorrect = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

let fullname = personInfo => `${personInfo.firstName} ${personInfo.lastName}`;
console.log(fullname(personInfoCorrect)); // John Doe
console.log(personInfoCorrect.getFullName()); // John Doe

const greetUser = (username='Guest', age=25) => `Hello, ${username}! You are ${age} years old.`;
//vs
const greetUser1 = (username='Guest', age=25) => {
    `Hello, ${username}! You are ${age} years old.`
}; // This will return undefined, because there is no return statement. as with curly braces, you need to explicitly return a value.

let greetingMessage = greetUser();
console.log(greetingMessage); // Hello, Guest! You are 25 years old.

let grretingMessageWithParams = greetUser('Alice', 30);
console.log(grretingMessageWithParams); // Hello, Alice! You are 30 years old.

//rest parameters with arrow functions aka varargs
const multiply = (...numbers) => {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

let product = multiply(2, 3, 4);
console.log(product); // 24

const browserDetails = (browser="Brave", ...versionDetails) => {
    console.log(`Browser: ${browser}`);
    console.log('Version Details:', versionDetails);
}

browserDetails("Firefox", "v89.0", "64-bit");
// Browser: Firefox
// Version Details: [ 'v89.0', '64-bit' ]

//Find max number using arrow function and rest parameters
const findmax = (...numbers) =>{
    return Math.max(...numbers );
}
const maxNumber = findmax(3, 5, 1, 8, 2);;
console.log(maxNumber); // 8