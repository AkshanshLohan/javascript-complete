//var let const 
//var -> es5
//let,const -> es6

//declarations and initializations
 var a=10;
 //window mai add hota hai
 //it is function scoped it will not respect block
 //we can re-declare it with same name and no error will come-> thats why it is not recommended
 //and we should use let instead of var because it will generate error if we try to re-declare it
 function abcd(){
    if(true){
        var a=20;
    }
    a=30;// we can re-assign it as it is function scoped
    console.log(a); //30
 }

 //++++++++++++++++++++++++++++++++++++++

 //SCOPE- GLOBAL,FUNCTION,BLOCK
 var a=12;//global scope

 {
    let a=12; //block scope -> we cannot change it outside the block
    //let mai bs curly braces ke andar hi use kar sakte hai
 }

 //+++++++++++++++++++++++++++++++++++
 //Temporal Dead Zone-> utna area jitne mai js ko pta h variable exist karta hai but vo uski value ko access nahi kar sakta 
 //tdz only exists for let and const it doesnot exists for var

 console.log(a);//error cannot acces 'a' before intialization

 let a=12;

 console.log(b);// undeifned -> NO error-> var is hoisted
 var b=10;

 //+++++++++++++++++++++++++++++++++++++++
 //HOISTING impact per type
 //hoisting-> ek variable ko jb JS mai banate hai to vo variable do hisso mai tut jata hai and uska declaration part upar chala jata hai and 
 //intialization part niche hi rh jata hai

 //hoisting happens for var,let and const but the way it happens is different for each

 var a=12;
 //do hisse -> 1. var a=undefined;  2.a=12;

 var a=undefined;//upper vala hissa

 console.log(a); //thats why we can access it before intialization
 a=10;//niche vala hissa

 //++++++
 let a;
 console.log(a);//error a is not initalized it is in temporal dead zone
 a=10;
