//Declaration of an array
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
let mixedArray = [1, "Hello", true, null, undefined, {name: "John"}, [1, 2, 3]];

console.log("Numbers: ", numbers);
console.log("Fruits: ", fruits);
console.log("Mixed Array: ", mixedArray);


//Accessing elements
console.log("--------------------Accessing Elements--------------------");
console.log("First number: ", numbers[0]);
console.log("Second fruit: ", fruits[1]);
console.log("Element from mixed array: ", mixedArray[5].name); // Accessing object property

//Modifying elements
console.log("--------------------Modifying Elements--------------------");
numbers[2] = 10;
console.log("Modified Numbers: ", numbers);

//Array properties and methods
console.log("--------------------Array Properties and Methods--------------------");
console.log("Length of fruits array: ", fruits.length);
//1. push() - adds element to the end - you can add multiple elements as well
fruits.push("Orange", "Mango", "Grapes");
console.log("After push: ", fruits);
//2. pop() - removes element from the end and returns that element
let lastFruit = fruits.pop();
console.log("Popped fruit: ", lastFruit);
console.log("After pop: ", fruits);
//3. shift() - removes element from the start and returns that element
let firstFruit = fruits.shift();
console.log("Shifted fruit: ", firstFruit);
console.log("After shift: ", fruits);
//4. unshift() - adds element to the start - you can add multiple elements as well
fruits.unshift("Mango");
console.log("After unshift: ", fruits);
//5. indexOf() - returns the index of the first element found, -1 if not found
let index = fruits.indexOf("Banana");
console.log("Index of Banana: ", index);
let colors = ["Red", "Green", "Blue", "Red"];
//indexOf with second parameter (fromIndex)
console.log(colors.indexOf("Red", colors.indexOf("Red")+1)); // starts searching from index 1, should return 3
//6. slice() - returns a new array from start index to end index (not inclusive)
let citrus = fruits.slice(1, 3);
console.log("Sliced array: ", citrus);  
//7. splice() - adds/removes elements from an array
//splice(start, deleteCount, item1, item2, ...)
fruits.splice(1, 1, "Pineapple", "Grapes"); // removes 1 element at index 1 and adds Pineapple and Grapes
//8. concat() - merges two or more arrays and returns a new array
let moreFruits = ["Kiwi", "Peach"];
let allFruits = fruits.concat(moreFruits);
console.log("After splice: ", fruits);
console.log("All Fruits: ", allFruits);
//9. join() - joins all elements of an array into a string
let fruitString = allFruits.join(", ");
console.log("Fruit String: ", fruitString);
//10. reverse() - reverses the order of elements in an array
let reversedFruits = allFruits.slice().reverse(); // using slice() to create a copy before reversing
console.log("Reversed Fruits: ", reversedFruits);
//11. includes() - checks if an array contains a certain element, returns true or false
let hasBanana = allFruits.includes("Banana");
console.log("Contains Banana: ", hasBanana);
let hasMango = allFruits.includes("Mango", "Strawberry");
console.log("Contains Mango: ", hasMango);
//12. forEach() - executes a provided function once for each array element
let oddnumbers = [1, 3, 5, 7, 9];
oddnumbers.forEach((num) => {
    console.log("Even number: ", num+1);
})
