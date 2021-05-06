// LET, CONST AND VAR

// ------------- LET AND CONST DIFF   -------------
function exampleOne(){
    let name = "Aleksandar";
    name = "Sale";             // This CAN be done with let

    const lastName = "Fa";
    //last_name = "Faa"       // This will produce and Error

    // Complex data types
    let arr = [1,2,3,4];        // This is possible
    arr.push(5);              

    const arr2 = [1,2,3,4];
    arr2.push(5);               // This is also possible
    console.log(arr2); 

    // This means we CAN'T re-assigne new content to arr2 (immutable)
    // but it is possible to reassigne its content

    // We can prevent this
    const person = {
        name:"Aleksandar",
        lastName:"Fa"
    };

    person.name = "Sale";       // This works

    // Preventing
    Object.freeze(person);

    person.lastName = "Faa"   // This wont work 
    console.log(person);
}

// exampleOne();


// ------------ CLASSES VS FUNCTIONS  ------------

// Class
class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    sayHelloTo (otherPerson){
        console.log(`Hello ${otherPerson.name}`)
    }
}

// Function 
let Person2 = function(name, lastName) {
    this.name = name;
    this.lastName = lastName;

}

Person2.prototype.sayHelloTo = function(otherPerson) {
    console.log(`Hello ${otherPerson.name}`);
}

// Creation this is the same
p1 = new Person("Aleksandar", "Fa");
p2 = new Person("Drugi", "Neko");

p1.sayHelloTo(p2);
p2.sayHelloTo(p1);


// ------------ Arrow functions vs ES5 functions ------------

// Arrow functions 
let arr = [1,2,3,4];

// Omit brackets and return keyword
let squared = arr.map(item=>item**2);
console.log(squared);

// Include brackets and return keyword 
// Return is necessary when there is more 
// than one statement in the body of the 
// function

let odds = arr.filter(item=>{
    if (item%2 !==0){
        return item;
    }
});
console.log(odds);


// ES5 Functions 

let pairs = arr.filter(function(item){
    if (item%2 ==0){
        return item;
    }
})
console.log(pairs);

// this keyword
class Fraction {
    constructor(numerator, denominator){
        this.parts = [numerator, denominator];
        this.equation = [];
    }

    squareFraction(){
        // We have access to this.equation
        this.parts.map((part)=>{this.equation.push(part**2)});              
        console.log(`${this.equation[0]} \ ${this.equation[1]}`);
    }


}

f1 = new Fraction(2,12);
f1.squareFraction();


let Fraction2 = function(numerator, denumerator){
    this.parts = [numerator, denumerator];
    this.equation = [];
}

Fraction2.prototype.squareFraction = function(){
    this.parts.map(function(part){
        this.equation.push(part**2);
    }, this);                               // We need to explicitly add this
    console.log(this.equation);             // or we can do bind
}

f2 = new Fraction2(2,3);
f2.squareFraction();



// ------------ async/await VS Promise.then
// This is more or less syntactic sugar

// ES6 style
const fetchData = async (url)=>{
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}

// ES5 style

const fetchData2 = function(url){
    fetch(url)
    .then(response => response.json())
    .then(result=>console.log(result))
    .catch(err=>console.log(err));
}