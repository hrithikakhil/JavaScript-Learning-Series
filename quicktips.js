//1. Find the unique values in an array
const array = [1,2,2,3,4,4,5];

const uniquearray = [...new Set(array)]; //Here ... is the spread operator
console.log(uniquearray); // Output: [1, 2, 3, 4, 5]

//2. Int to String conversion
const num = 325;
const numstr = num+''; //or you can use String(num)
console.log(numstr); // Output: "325"
console.log(numstr+10); // Output: "32510"
//or
const numstr2 = String(num);
console.log(numstr2); // Output: "325"

//3. Float to Int conversion
const floatnum = 45.67;
const intnum = Math.floor(floatnum); //or you can use parseInt(floatnum)
console.log(intnum); // Output: 45

//4. Check if a variable is a number
const val = 't';
if(typeof val === 'number' && !isNaN(val)){
    console.log(val + ' is a number');
} else {
    console.log(val + ' is not a number');
}

//5. Swap two variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log('a = ' + a + ', b = ' + b); // Output: a = 10, b = 5

//6. Check if a object has a property
const personobj = {
    name: "Hrithik",
    age: 25
}

if(personobj.hasOwnProperty('address')){
    console.log('Property exists');
} else {
    console.log('Property does not exist');
}

//7. Remove falsy values from an array
const mixedArray = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
const truthyArray = mixedArray.filter(String);
console.log(truthyArray); // Output: [1, 2, 3, 4, 5]

//8. String - Uppercase and lowercase conversion
const str = "Hello World";
console.log(str.toUpperCase()); // Output: "HELLO WORLD"
console.log(str.toLowerCase()); // Output: "hello world"

//9. Check if a array conatins a specific value
const fruits = ['apple', 'mango', 'banana', 'orange'];
const searchFruit = 'banana';
if(fruits.includes(searchFruit)){
    console.log(searchFruit + ' is found in the array');
} else {
    console.log(searchFruit + ' is not found in the array');
}

//10. Check if an array is empty
const arr = []; 
if(arr.length === 0){
    console.log('Array is empty');
} else {
    console.log('Array is not empty');
}

//12. Generate a randon number between two values
const min = 100;
const max = 999;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random Number between ' + min + ' and ' + max + ' is: ' + randomNum);

//13. String to Number conversion
const strnum = "456";
const convertedNum = Number(strnum); //or you can use parseInt(strnum) or parseFloat(strnum)
console.log(convertedNum);

//14. Join array elements into a string
const wordsArray = ['JavaScript', 'is', 'fun'];
const joinedString = wordsArray.join(' ');  //joining with space
console.log(joinedString); // Output: "JavaScript is fun"

//15. Get Object Property
const user = {
    username: "john_doe",
    email: "jondoe@gmail.com",
    age: 30
}   
console.log(user.username); // Output: "john_doe"
console.log(user['email']); // Output: "jondoe@gmail.com"

//16. Clone an Object
const originalObj = {
    name: "Alice",
    city: "Wonderland"
};
const clonedObj = {...originalObj}; //Using spread operator
console.log(clonedObj); // Output: { name: 'Alice', city: 'Wonderland' }    

//17. Convert object to array
const sampleObj = {
    a: 1,   
    b: 2,
    c: 3
};

//a. Keys array
const keysArray = Object.keys(sampleObj);
console.log(keysArray); // Output: [ 'a', 'b', 'c' ]
//b. Values array
const valuesArray = Object.values(sampleObj);
console.log(valuesArray); // Output: [ 1, 2, 3 ]
//c. Entries array  
const objToArray = Object.entries(sampleObj);
console.log(objToArray); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//18. Convert array to object
const sampleArray = [['x', 10], ['y', 20], ['z', 30]];
const arrayToObj = Object.fromEntries(sampleArray);
console.log(arrayToObj); // Output: { x: 10, y: 20, z: 30 } 

//19. Get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//20. Check if a string contains a substring
const mainStr = "The quick brown fox jumps over the lazy dog";
const subStr = "fox";   
if(mainStr.includes(subStr)){
    console.log(`"${subStr}" is found in the main string`);
} else {
    console.log(`"${subStr}" is not found in the main string`);
}

//21. Truncate a string
const longStr = "JavaScript is a versatile programming language.";
const maxLength = 100;
const truncatedStr = longStr.length > maxLength ? longStr.slice(0, maxLength) + '...' : longStr;
console.log(truncatedStr); // Output: "JavaScript is a ver..."

//22. Find the last element of an array
const numArray = [10, 20, 30, 40, 50];
const lastele = numArray.slice(-1);
console.log(lastele); // Output: 50
