let obj={
    name: "Akshansh",
    age: 23,
    isStudent: true,
}
console.log(obj.age); //Output: 23
console.log(obj["age"]); //Output: 23-> if my key is string then we can access it using square brackets

//also for accessing dynamic keys we can use square brackets
let key = "name";   
obj={
    name: "Akshansh",
    age: 23,        
}
console.log(obj[key]); //Output: Akshansh


//object destructuring
const user={
    name: "Akshansh",
    age: 23,
    address: {
        city: "dehradun",  
        state: "Uttarakhand",
    },
}
let {city, state} = user.address; //Destructuring the address object
console.log(city); //Output: dehradun

//looping through an object
for (let key in obj) {     
    console.log(`${key}: ${obj[key]}`); //Output: name: Akshansh, age: 23, address: [object Object]
}
//object methods
//Object.keys() returns an array of the object's own enumerable property names
console.log(Object.keys(obj)); //Output: [ 'name', 'age', 'address', 'isStudent' ] 

//Object.values() returns an array of the object's own enumerable property values
console.log(Object.values(obj)); //Output: [ 'Akshansh', 23,    { city: 'dehradun', state: 'Uttarakhand' }, true ]

//Object.entries() returns an array of the object's own enumerable string-keyed property [key, value] pairs
console.log(Object.entries(obj)); //Output: [ [ 'name', 'Akshansh' ], [ 'age', 23 ], [ 'address', { city: 'dehradun', state: 'Uttarakhand' } ], [ 'isStudent', true ] ]

//spread operator-> spread operator will not work in case of nested objects
obj={
    name: "Akshansh",
    age: 23,
    isStudent: true,
}
let obj2={...obj, city: "dehradun"}; //Creating a new object with the properties of obj and adding a new property city
console.log(obj2); //Output: { name: 'Akshansh', age: 23, isStudent: true, city: 'dehradun' }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Object.assign() add properties from one or more source objects to a target object
let obj3 = { a: 1, b: 2 };

Object.assign({c:4}, obj3);
console.log(obj3); //Output: { a: 1, b: 2, c: 4 }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//DEEP CLONE
let obj4 = {
    name: "Akshansh",
    age: 23,
    address: {
        city: "dehradun",
        state: "Uttarakhand",
    },
};
//let obj5 = JSON.parse(JSON.stringify(obj4)); //Deep cloning using JSON methods
obj5.address.city = "Delhi"; //Changing the city in the cloned object
console.log(obj4.address.city); //Output: dehradun (original object remains unchanged)
let obj5 = structuredClone(obj4); //Deep cloning using structuredClone

//optional chaining
let user2 = {       
    name: "Akshansh",
    address: {
        city: "dehradun",
    },
};  
console.log(user2?.addresses?.city); //Output: undefined (no error thrown, optional chaining used)
//optional chaining is used to safely access deeply nested properties without throwing an error if any part of the chain is undefined or null

//computed properties
let prop = "age";           
let user3 = {   
    name: "Akshansh",
    [prop]: 23, //Computed property name
};  