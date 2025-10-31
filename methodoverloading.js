//We cannot method overload in JavaScript like other languages such as Java or C++
//However, we can achieve similar functionality using default parameters or by checking the number/type of arguments passed
class Calculator {
    //Using default parameters
    add(a, b = 0, c = 0) {
        return a + b + c;
    }   
    //Using arguments object to handle variable number of arguments
    multiply() {
        let result = 1;     
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    }   
    //Method to demonstrate different behavior based on argument types
    display(value) {
        if (typeof value === 'string') {
            console.log(`String value: ${value}`);
        } else if (typeof value === 'number') {
            console.log(`Number value: ${value}`);
        } else {
            console.log('Unsupported type');
        }
    }
}

const calc = new Calculator();  
console.log(calc.add(5));            // 5
console.log(calc.add(5, 10));        // 15
console.log(calc.add(5, 10, 15));    // 30

console.log(calc.multiply(2, 3));          // 6
console.log(calc.multiply(2, 3, 4)); //Here 2,3,4 are treated as arguments - like an array  // 24

calc.display("Hello");          // String value: Hello
calc.display(42);            // Number value: 42
calc.display(true);         // Unsupported type 


//What really happens when we try to overload methods in JavaScript
function print(){
    console.log("No arguments");
}

function print(name){
    console.log("Name: " + name);
}

function print(name, age){
    console.log("Name: " + name + ", Age: " + age);
}

print();               // Outputs: Name: undefined, Age: undefined
print("Alice");       // Outputs: Name: Alice, Age: undefined
print("Bob", 30);     // Outputs: Name: Bob, Age: 30    
//In the above example, only the last defined 'print' function is retained. The previous definitions are overwritten.
//To achieve method overloading behavior, we can use default parameters or check the number of arguments as shown in the Calculator class above.

//Run test cases on remote machine
//browsername, browserversion, remoteExecution
function runTest(browsername, browserversion, remoteExecution) {
    if(typeof browserversion === 'string' && typeof remoteExecution === 'boolean') {
        console.log(`Running tests on ${browsername} version ${browserversion} with remote execution set to ${remoteExecution}`);
    } else if(typeof browserversion === 'string') {
        console.log(`Running tests on ${browsername} version ${browserversion} with default remote execution`);
    } else {
        console.log(`Running tests on ${browsername} with default version and remote execution`);
    }   
}

runTest(); // Running tests on undefined with default version and remote execution
runTest("Chrome"); // Running tests on Chrome with default version and remote execution
runTest("Firefox", "89.0"); // Running tests on Firefox version 89.0 with default remote execution
runTest("Edge", "91.0", true); // Running tests on Edge version 91.0 with remote execution set to true