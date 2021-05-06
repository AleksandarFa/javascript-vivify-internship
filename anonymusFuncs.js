// ------------- Anonymus functions ------------- 

// create array with random number
let randomArrCreator = () => {
    let arr = []
    for (let i = 0; i < 20; i++){
        arr.push(Math.floor(Math.random()*30));
    }
    return arr;
}

let arr = randomArrCreator();

// Squaring arr with anonymus function
let squared = arr.map(function(item){
    return item**2
});

console.log(squared);

// Using arrow function
let cubes = arr.map((item)=>{return item**3})
console.log(cubes);

// Second approach when not using anonymus functions
function cuber(item){
    return item**3;
}

let squarer = (item)=>{
    return item**2;
}

// explicitly using cuber function
let cubes2 = arr.map(cuber);
console.log(cubes2);

// explicitly using squarer function
let squares2 = arr.map(squarer);
console.log(squares2);


// ------------- Imediatly Invoked Function Expression -------------
// (IIFE)

(function(a,b){
    let c = a + b;
    console.log("Sum of two numbers is: ", c);
})(10, 5)


// Treba jos da se pretvori sledeca f-ja u arrow f-ju
function timesTwo(number){
    return number * 2;
}

// Arrow equivalent  1st version
let timesTwo = (number)=>{
    return number * 2;
}


// 2nd version
let timesTwo2 = number => number * 2;
