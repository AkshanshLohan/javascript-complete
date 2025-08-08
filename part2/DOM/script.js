//DOM MANIPULATION
//HTML SE ELEMENT SELECT KRNA
//TEXT BADALNA
//HTML BADALNA
//CSS BADALNA
//ATTRIBUTES 
//EVENT LISTENERS

let a=document.getElementById("a");
console.log(a); //Output: <h1 id="a">hey how r u</h1>
a.innerText="Hello Universe"; //Changing the text inside the h1
console.log(a); //Output: <h1 id="a">Hello Universe</h1>

//document.createElement() -> creates a new element
let newElement=document.createElement("p"); //Creating a new paragraph element



//innerHTML -> sets or returns the HTML content of an element
newElement.innerHTML="<strong>This is a new paragraph</strong>"; //Setting the HTML content

//innertext -> sets or returns the text content of an element
newElement.innerText="This is a new paragraph"; //Setting the text content

//textContent -> sets or returns the text content of an element
newElement.textContent="This is a new paragraph"; //Setting the text content

//innertext vs textContent
//innerText returns the visible text of an element, while textContent returns all the text


//appendChild() -> adds a new child element to the specified element
a.appendChild(newElement); //Appending the new paragraph to the h1 element

//prepend() -> adds a new child element to the beginning of the specified element
a.prepend(newElement); //Prepending the new paragraph to the h1 element

document.querySelector("#a"); //Selecting the element with id "a" using querySelector
document.querySelectorAll(".class-name"); //Selecting all elements with the class "class-name"  

//getElementsByClassName() -> returns a live HTMLCollection of elements with the specified class name
let elements=document.getElementsByClassName("class-name"); //Selecting all elements with the class "class-name"

//getElementsByTagName() -> returns a live HTMLCollection of elements with the specified tag name
let tags=document.getElementsByTagName("p"); //Selecting all paragraph elements

//setAttribute() -> sets the value of an attribute on the specified element
a.setAttribute("class", "new-class"); //Setting the class attribute of the h1

//getAttribute() -> returns the value of an attribute on the specified element
let className=a.getAttribute("class"); //Getting the class attribute of the h1

//removeAttribute() -> removes an attribute from the specified element
a.removeAttribute("class"); //Removing the class attribute from the h1

//removeChild() -> removes a child element from the specified element
a.removeChild(newElement); //Removing the new paragraph from the h1

//style property -> used to change the CSS styles of an element
a.style.color="red"; //Changing the text color of the h1 to red
a.style.backgroundColor="yellow"; //Changing the background color of the h1 to yellow

//classList property -> used to add, remove, or toggle classes on an element
a.classList.add("new-class"); //Adding a new class to the h1
a.classList.remove("new-class"); //Removing the new class from the h1

