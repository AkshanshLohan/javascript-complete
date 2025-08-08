let arr=[1,2,3,4,5]; //Array is a reference type in JS
arr.push(6); //Adding an element to the array
console.log(arr); //Output: [1, 2, 3, 4, 5, 6]
arr.pop(); //Removing the last element from the array
console.log(arr); //Output: [1, 2, 3, 4, 5]
arr.shift(); //Removing the first element from the array
console.log(arr); //Output: [2, 3, 4, 5]
arr.unshift(1); //Adding an element at the beginning of the array
console.log(arr); //Output: [1, 2, 3, 4, 5]
arr.splice(2, 1); //Removing the element at index 2--> 
//2-> kaha se value htana start krna hai
//1-> kitne elements htana hai
console.log(arr); //Output: [1, 2, 4, 5]
arr.splice(1,3); //Removing elements from index 1 to 3
console.log(arr); //Output: [1]
arr=[1,2,3,4,5];
let slicedArr=arr.slice(1,3); //Slicing the array from index 1 to 3
console.log(slicedArr); //Output: [2, 3]

//SPLICE VS SLICE
//splice modifies the original array, while slice returns a new array without modifying the original one

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
arr.reverse(); //Reversing the array
console.log(arr); //Output: [5, 4, 3, 2, 1]
arr.sort((a, b) => a - b); //Sorting the array in ascending order
console.log(arr); //Output: [1, 2, 3, 4, 5]
arr.sort((a, b) => b - a); //Sorting the array in descending order
console.log(arr); //Output: [5, 4, 3, 2, 1]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

arr=[11,62,3,4,25]; 
arr.forEach(function(value){
    console.log(value+5); //Output: 16, 67, 8, 9, 30
});

//MAP sirf tab use karna hai jab ek naya array banana hai pichle array ke data ke basis pr
//map dikhte hi apne man mai ek blank array bnalo
 let newArr=arr.map(function(value){
    return value+5;   
});
console.log(newArr); //Output: [16, 67, 8, 9, 30]

let newarr=arr.map(function(val){
    if(val>10){
        return val;
    }
});
console.log(newarr); //Output: [11, 62, undefined, undefined, 25]
//jab bhi appko koi aisa case dikh jaye jaha pr ek array s naya array banega and vo naya array kuch values ko rkhega then map lgega

//FILTER
let d=learr=[1,2,3,4,5,6,7,8,9,10];
arr.filter(function(value){
    if(value>4) return true; //filter will return a new array with all the values that return true
});

//REDUCE
//reduce is used to reduce the array to a single value
let e=arr.reduce(function(accumulator, Val){
        return accumulator + Val; //jo return hoga vo vapis jake accumulator mai store hoga
},0); //0 is the initial value of the accumulator

//FIND
arr=[1,2,1,3];
let va=arr.find(function(){
      return val===1;
});
//va=1 '0 index vala 1 va variable m store ho jayega'

//SOME-> it is used to check if at least one element in the array satisfies the condition
 arr=[10,30,32,90];
 let any=arr.some(function(value){
    return value>50; //returns true if any value is greater than 50
});

//EVERY-> it is used to check if all elements in the array satisfy the condition
let all=arr.every(function(value){
    return value>50; //returns false as not all values are greater than 50
}   );

//DESTRUCTURING
//Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
 arr=[1,2,3,4,5,6]; //Array to be destructured
let [x, y, z] = arr; //Destructuring an array into variables
console.log(x); //Output: 1
console.log(y); //Output: 2
console.log(z); //Output: 3

arr=[1,2,3,4,5,6,7,8,9,10];
let arr2=[...arr]; //Using spread operator to create a new array with the same elements
arr2.pop(); //Removing the last element from the new array
console.log(arr2); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]    
console.log(arr); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (original array remains unchanged)

//Merge two arrays using spread operator
let arr3=[...arr, ...arr2]; //Merging two arrays