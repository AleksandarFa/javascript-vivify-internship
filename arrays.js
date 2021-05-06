// Arrays

let colors = ["red", "green", "blue", "yellow", "black", "white"];

// using standard for loop
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

//using forEach
colors.forEach(color=>console.log(color));

// Function rotates array to the right based on step
function RotateRight(step, arr){
    // negative step is not allowed
    for(let i=0; i<Math.abs(step); i++){
        let tempArrItem = arr.pop();
        arr.unshift(tempArrItem);
    }
    return arr;
}

//
console.log("Original colors", colors);
console.log(RotateRight(-3, colors));
console.log(RotateRight(13, colors));

// Sum of numbers using reduce and starting at 50

let nums = [1,2,3,4,5];
let reducer = (a,b)=> a + b;

let result = nums.reduce(reducer, 50);
console.log("Result is: ", result);


// Function recives a number (n) and creates
// an array with numbers starting from 0 to n
// and back.
function pyramid(n){
    let arr = [];
    for(let i=0; i <= Math.abs(n); i++){
        arr.push(i);
    }

    let final = [...arr, ...arr.reverse()];
    final.splice(final.indexOf(Math.abs(n)),1); 
    return final;
}

//Treats negative indexes as positive
console.log(pyramid(4))
console.log(pyramid(-4));

// Function takes a zoo's inventory of 
// animals and returns an array of strings
// that describe each animal's name, species 
// and age.
function zooInventory(zoo){
    let finalArr = [];
    myZoo.forEach((animal)=>{
        let tempAnimalString = `${animal[0]} the ${animal[1][0]} is ${animal[1][1]}.`;
        finalArr.push(tempAnimalString);
    })
    return finalArr;
}


var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];


console.log(zooInventory(myZoo));

