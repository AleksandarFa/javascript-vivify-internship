// ------------ Promises ------------

console.log("Code before promise");

let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Success!");
        reject("Error!");
    }, 1000);
});

promise
    .then((res)=>{console.log(res)})
    .then(()=>{console.log("Code after promise.")})     // This won't be executed before first promise
    .catch((err)=>{console.log(err)});


// Promise.all

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Success 2nd promise.");
    }, 1200);
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Success 3rd promise.");
    }, 900);
});

// This will take 3100ms to resolve 
Promise.all([promise, promise2, promise3])
        .then((values)=>{
            values.forEach((item)=>{
                console.log(item);
            })
        });


// This is usefull when we have multiple async tasks
// and we want our code to wait for all of them to be
// fullfiled. Also Promise.all waits for all
// fulfillments (or the first rejection)