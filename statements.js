function verifyAge(age) {
    if(age>=18) {
        console.log("Elligible to vote");
    } else {
        console.log("Not elligible to vote");
    }
}

verifyAge(20); //Elligible to vote
console.log("Age verification completed");

function checkEvenOdd(num) {
    if(num%2==0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let result = checkEvenOdd(7);
console.log(result);

//nested if-else
let grade;
function findGrade(marks) {
    if(marks>=90) {
        grade = 'A';
    }else{
        if(marks>=75) {
            grade = 'B';
        }else{
            if(marks>=60) {
                grade = 'C';
            }else{
                if(marks>=50) {
                    grade = 'D';
                }else{
                    grade = 'F';
                }
            }
        }
    }
}

findGrade(55);
console.log("Grade is: "+grade);

//else-if ladder
let browser = "Chrome";
if(browser=="Chrome") {
    console.log("You are using Chrome");
} else if(browser=="Firefox") {
    console.log("You are using Firefox");
} else if(browser=="Edge") {
    console.log("You are using Edge");
} else {
    console.log("Unknown browser");
}

//switch-case
function getDayName(dayNum) {
    let dayName;
    switch(dayNum) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number"; 
            break;
    }
    return dayName;
}

let day = getDayName(3);
console.log(day); //Wednesday