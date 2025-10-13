//for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}


console.log("--------------------");

//for of loop
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

for(let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}

console.log("--------------------");

//while loop
let count = 0;
while(count < 5) {
    console.log("Count: " + count);
    count++;
}

console.log("--------------------");

//do-while loop
let num = 0;
do{
    console.log("Number: " + num);
    num++;
}while(num<=10)

console.log("--------------------");
//break and continue - used to control loop execution
//break - exits the loop
//continue - skips the current iteration and moves to the next iteration

let number = 10;
while(number<=100){
    console.log(number);
    if(number%5==0){
        console.log(number + " is multiple of 5, breaking the loop.");
        break;
    }
    number++;
}

console.log("--------------------");
//for in loop on objects
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in person) {
    console.log(key + ": " + person[key]);
}

console.log("--------------------");
//for in loop on arrays - not recommended as it iterates over indices
for(let c in colors) {
    console.log(c);
}