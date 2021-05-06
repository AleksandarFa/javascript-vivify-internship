// JSON

let person = {
    firstName:"Aleksandar",
    lastName:"Fa",
    age:25
};

// We can hardcode the json format. Keys must be in quotes
let personJSON = '{"firstName":"Aleksandar", "lastName":"Fa", "age":25}';
console.log(personJSON, typeof personJSON);

// We can use JSON.stringify() to create JSON format
let personJSON2 = JSON.stringify(person);
console.log(personJSON2, typeof personJSON2);

// Now if we want to create a js object from our json
// we use JSON.parse()

let jsObj = JSON.parse(personJSON);
let jsObj2 = JSON.parse(personJSON2);

console.log(jsObj, typeof jsObj);
console.log(jsObj2, typeof jsObj2);


// Working with arrays within json
let arr = [1,2,3,4,5];

let nums = {
    "odds":[1,2,3,4,5]
};

// array in json
let tempObj = JSON.stringify(nums);

// array in js object
let numsJSObj = JSON.parse(tempObj);

// looping over the array of nums
numsJSObj.odds.forEach((num)=>console.log(num))
