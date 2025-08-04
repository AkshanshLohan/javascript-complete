function add(v1,v2){
    //v1 and v2 are parameters
    console.log(v1+v2);
}
add(10,20); //10 and 20 are arguments

// +++++++++++++++++++++++++++++++++++++++++++++++++

//DEFAULT PARAMETERS
function add(v1=0,v2=0){
    console.log(v1+v2);
}
add(); //0+0=0
add(10); //10+0=10
add(10,20); //10+20=30

//REST PARAMETERS-> agar ... function ke parameters mai lage to vo rest operator hai and agar vo arrays and objects ke saath lage to vo spread operator hai
function add(...args){ //args is an array of all arguments passed
   let sum=0;
   for(let i=0;i<args.length;i++){  
       sum+=args[i];
   }
   console.log(sum);
}
add(10,20,30); //60

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//FIRST CLASS FUNCTIONS
//Functions are first class citizens in JS, meaning they can be passed as arguments, returned from other functions, and assigned to variables.

function abcd(val){
    val(); //calling the function passed as an argument
}
 abcd(function(){
    console.log("Hello from passed function");  
}); 

//HIGHER ORDER FUNCTIONS
//Functions that take other functions as arguments or return a function as a result.
function higherOrderFunction(callback){
    callback(); //calling the callback function
}

higherOrderFunction(function(){
    console.log("Hello from higher order function");
});

function abcd(){
    return function(){
        console.log("Hello from returned function");
    }
}
abcd();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//PURE VS IMPURE FUNCTIONS
//Pure functions always return the same output for the same input and do not cause side effects.
function a(){
    console.log("Hello from pure function");
}
//impure functions can change the outside value
function hui(){
    a++; //this changes the value of a outside the function
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//CLOSURES
//ek function jo return kare ek aur function ko and vo returned function use kare parent function ke variables ko

function abcd(){
    let a=10; //parent function variable
    return function(){
        console.log(a); //accessing parent function variable
    }
}       
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//LEXICAL SCOPE
//Scope of a variable is determined by its location in the source code and nested functions can access variables from their parent functions.
function abcd(){
    let a=10; //parent function variable
    function defg(){
        let b=20;
        function hij(){
            let c=30;
            console.log(a+b+c); //accessing parent function variable a and defg variable b
        }
    }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//IIFE (Immediately Invoked Function Expression)
//A function that runs as soon as it is defined.
  (function(){
    console.log("I am an IIFE");
  })();
  //wrap a function in parentheses and then call it with () to make it an IIFE

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //Hoisting differences between declarations and expressions
  //function declarations are hoisted, meaning they can be called before they are defined.

 //function declarations------
 add(10,20); //works because function declaration is hoisted



function add(v1,v2){
    console.log(v1+v2);
}
//this will work because function declarations are hoisted

//function expressions------
//function expressions are not hoisted, meaning they cannot be called before they are defined.

 add(10,20); //will throw an error because function expression is not hoisted

const add = function(v1, v2) {
    console.log(v1 + v2);
};
