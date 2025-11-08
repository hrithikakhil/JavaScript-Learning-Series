//Callback functions are functions that are passed as arguments to other functions and are executed after some operation is completed.
//async call/tasks -- once the task is completed, the callback function is called to handle the result or perform further actions.

function gree(name, callback){
    console.log('Hello ' + name);
    callback();
}

function callme(){
    console.log('This is a callback function');
}

gree('Alice', callme);

//Example 2: Simulating an asynchronous operation using setTimeout
function printinfo(name, callback){
    //async function
    setTimeout(function(){
        console.log('Printing info for ' + name);
        callback('Info printed successfully');
    }, 2000);
}

function displayMessage(mesg){
    console.log(mesg);
}

printinfo('Bob', displayMessage);


//Example 3: Fetch User Data
function fetchUserData(userId, callback){

    setTimeout(function(){
        const users = {
            1: {id:1, name: "Hrithik"},
            2: {id:2, name: "Vikas"},
            3: {id:3, name: "Niggesh"}
        }

        const user = users[userId];
        if(user){
            callback(null, user);
        }else{
            callback("User Not Found :", null);
        }
    }, 2000)
}

function handleUserData(error, user){
    if(error){
        console.log("Error: "+ error);
    }else{
        console.log("user Data : " + user);
    }
}

fetchUserData(5, handleUserData);