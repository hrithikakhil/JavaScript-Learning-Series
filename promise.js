//promise - In JS promises are a way to handle asynchronous operations in a more organized and readable manner
//states - Pending, Fullfilled and rejected

const randomvalgenerator = new Promise((resolve, reject) =>{

    //async operation
    setTimeout(()=>{
        const randomVal = Math.random();
        if(randomVal>0.1){
            resolve(randomVal);
        }else{
            reject(new Error("Value is too small"));
        }
    }, 2000); //delay of 2 secs
});


randomvalgenerator
    .then(result=>{  //Handlers
        console.log("Promise Fullfilled with value - "+result)
    }).catch(error =>{
        console.log("Promise is rejected with the error - " + error);
    });
