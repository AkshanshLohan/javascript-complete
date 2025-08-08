//DATATYPES

//PRIMITIVE TYPES-> Number, String, Boolean, Null, Undefined, Symbol,BigInt
//Reference Types-> Object,Array,Function

//Primitves -> asi sari value jinko copy krne pr tumhe ek real copy milegi

let a=12;
let b=a;
a=a+2; //a=14,b=12; //a ko change krne par b ki value change nahi hui

//Reference -> asi sari value jinko copy krne pr tumhe ek reference milega parent ka

let obj1={
    name:"John",
    age:30
}
let obj2=obj1;
obj1.age=31;
console.log(obj2.age); //31

//string-> '',"",``
//number-> 12,12.3
//boolean-> true,false
//null ka matlab hai aapne jan bhujkar koi value nahi di
let selectedStudents=null;
//undefined ka matlab aapne ek variable banaya hai but usko koi value nahi di
//to jo value by default mili vo h undefined
let f; //undefined
//symbol-> unique immutable value
//future mein hum koi libraries use krenge ab is case mein un libraries mein kai baar kuch fields hoti hain jinse similar hum bhi bana dete hain
//aur galti s hmari bnayi hui fields us library ki original fields ko change kr deta hai

let sheryjs={
    uid:  12,
    model: "harsh"
}
sheryjs.uid=13; //agar humne symbol use kiya hota to humari value change nahi hoti

//+++++++++++++++++++++
let u1=Symbol("uid");
let u2=Symbol("model");
//u1==u2 false; //symbol unique hota hai

//BigInt-> 
let g=9007199254740991n;//n at the end indicates BigInt
//BigInt ka use tab hota hai jab aapko kisi number ki value itni badi chahiye hoti hai ki vo normal number se bahar ho jati hai
g+3n; //you can add BigInt with BigInt only

//+++++++++ Reference Types
//Array -> 
let arr=[1,2,3,4,5]; 
b=arr; //b is a reference to arr
arr[0]=10; //b[0] will also be 10 as both point to the same array

//Objects->
let obj={
    name:"John",
    age:30
}   
let obj9=obj; //obj9 is a reference to obj
obj.name="Doe"; //obj9.name will also be "Doe" as both point to the same object

//+++++++++++++++++++++++++++
//DYNAMIC TYPING-> JS mai static typing nahi hoti or is mai hai dynamic typing
//type of quirks (e.g., typeof null==='object')
let t=12;
t=true;
t='hello';
t={name:"John"};
t=[1,2,3];
t=null;

//Type coercion -> (== vs ===)
//concept of type coercion is when JS tries to convert one type to another type to make the comparison work

//truthy vs falsy values
//falsy values -> false,0,"",null,undefined,NaN, document.all
//truthy values -> everything else

    //predict the output
    //true+false //1
    //true+true //2
    //null+1 //1
    //undefined+1 //NaN
    // !!undefined //false
    // !!null //false
    // !!0 //false
    //typeof NaN //number
    //typeof null //object
    //typeof undefined //undefined