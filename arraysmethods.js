let numbers = [1, 2, 3, 4, 5];

//1. map() - calls a defined callback function on each element of an array and returns a new array.
let doublednums = numbers.map((num)=> num * 2); // [2, 4, 6, 8, 10]
console.log(doublednums);

let farenheit = [32, 68, 104];

function toCelsius(farenheit) {
    return (farenheit - 32) * (5/9);
}

let celsiustemp = farenheit.map(toCelsius); // [0, 20, 40]
console.log(celsiustemp);

//2. filter() - creates a new array with all elements that pass the test implemented by the provided function.
let evennums = numbers.filter((num)=> num%2==0); // [2, 4]
console.log(evennums);

let employees = [
    {name: "Alice", age: 25, gender: "Female"},
    {name: "Bob", age: 30, gender: "Male"},
    {name: "Frank", age: 40, gender: "Male"},
    {name: "Charlie", age: 36, gender: "Male"},
    {name: "Diana", age: 28, gender: "Female"},
    {name: "Eve", age: 22, gender: "Female"}
]

//return female employees
let femaleemployees =  employees.filter((emp)=> emp.gender === "Female");
console.log(femaleemployees);

//return all male emplyeess above 30 years
let maleabove30 = employees.filter((emp)=> emp.gender==="Male" && emp.age>30);
console.log(maleabove30);

//3. reduce() - executes a reducer function on each element of the array, resulting in a single output value.
let sum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0); // 15
console.log(sum);

//How the reduce method works step by step:
// Step 1: accumulator = 0, currentvalue = 1 => 0 + 1 = 1
// Step 2: accumulator = 1, currentvalue = 2 => 1 + 2 = 3
// Step 3: accumulator = 3, currentvalue = 3 => 3 + 3 = 6
// Step 4: accumulator = 6, currentvalue = 4 => 6 + 4 = 10
// Step 5: accumulator = 10, currentvalue = 5 => 10 + 5 = 15

let top = [5, 12, 8, 130, 44];
let max = top.reduce((maxnum, num) => {
    if(num > maxnum) {
        return num;
    }else{
        return maxnum;
    }
}, top[0]); // 130
console.log(max);

//Find the sum of all the prices of items in the cart
let cart = [
    {item: "Laptop", price: 1000},
    {item: "Phone", price: 500},
    {item: "Tablet", price: 300},
    {item: "Headphones", price: 100},
    {item: "Charger", price: 50}
];

let totalPrice = cart.reduce((total, curentitem)=> {
    return total + curentitem.price;
}, 0); // 1950
console.log(totalPrice);