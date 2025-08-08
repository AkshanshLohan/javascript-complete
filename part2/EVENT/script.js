//browser m koi bhi hrkat kroge event raise hoga
//event listener ka matlab hai ki humne us action ka reaction diya
//event listener is a function that will be called when the event occurs
//event listener is used to listen to events like click, keypress, mouseover, etc

let heading=document.querySelector("h1"); 
function dblclick() { 
        heading.style.color="blue"; 
}
heading.addEventListener("dblclick", dblclick); //Adding the event listener
heading.removeEventListener("dblclick", dblclick); //Removing the event listener

//input event -> occurs when the value of an input element changes
let inp=document.querySelector("input");
inp.addEventListener("input", function(dets) {
    if(dets.data!== null) { 
        console.log(dets.data); 
    }
});