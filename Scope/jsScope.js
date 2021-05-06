// First example with var
function varExample(){
    let s = 0;
    for (let i = 0; i < 4; i++){
        s+= i;
        var myVar = "Some var value";
    }

    console.log(myVar);
}

// varExample(); 
// I could console log the variable declared with var keyword
// This means that I can use it outside the scope of the foor 
// loop

// Second example with var
let outsideVar = "Im and outside var.";

function letExample(){
    let s = 0;
    for (let i = 0; i < 4; i++){
        s+= i;
        let myVar = "Some var value";
    }

    console.log(outsideVar);  // This works
    // console.log(myVar);       // Error
    
    let insideFunctionVar = "Im an inside function var.";

}

letExample();
// I could not see the myVar in console. This means that
// let keyword lets us declare vairables inside the scope
// of loops and if statments 

// Logigin var from function letExample
console.log(insideFunctionVar);          // Error

// Variables declared with let inside functions
// have function scope and can't be used outside
// of functions.
