//Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to “Clickme”.

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me!";
let body = document.querySelector("body");
body.insertAdjacentElement("afterbegin",input);
input.insertAdjacentElement("afterend",btn);

//Qs2.Add following attributes to the element:-
// Change placeholder value of input to “username”
// -Change the id of button to “btn”

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
console.log(btn.getAttribute("id"));

//Qs3.Access the btn using the querySelector and button id.
// Change the button backgroundcolor to blue and textcolor to white.
let button = document.querySelector("#btn");
console.dir(button);
let button1 = document.getElementById("btn");
console.dir(button1);

//Qs4.Create an h1 element on the page and set its text to “DOMPractice” underlined.
// Change its color to purple.
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("heading");
input.insertAdjacentElement("beforebegin",h1);

//Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);


