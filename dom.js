// examine the document object
// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 3232;
// console.log(document.all);

// let a = 10;
// console.log(a);
// var b = 100;

// console.log(window.a);
// console.log(window.b);

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// // items[0].textContent = "jiji";
// // items[0].style.color = "orange";

// Array.from(items).forEach(element => {
//     element.style.backgroundColor = "#f4f4f4"
// });

// var odd = document.querySelectorAll("li:nth-child(odd)");
// odd.forEach((eachOdd)=> eachOdd.style.backgroundColor="blue");

// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);

// console.log(itemList.childElementChild);

// const newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.setAttribute("title", "HelloDiv");

// const newDivText = document.createTextNode("hello all");

// newDiv.appendChild(newDivText);

// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

// event listeners
// onclick is the previous way of doing the task

// ideal way is to use the add event listener

// var button = document.getElementById("button").addEventListener("click",buttonClick)

// function buttonClick(e){
//     document.getElementById('header-title').textContent = "changed"
//     console.log(e);
//     console.log(e.target)
//     console.log(e.target.className)
//     console.log(e.target.classList);

//     console.log(e.clientX);//x co-ordinate of mouse click based on the whole html tag

//     console.log(e.offsetX);//co ordinate based on the button

//     console.log(e.shiftKey)
//     // returns true is we click it by pressing shift key. ||ly ctrlKey, altKey are also there
// }

// types of events
const events = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "mousemove",
  "",
  "",
];

// difference btw mouse over and mouseenter is that it will get triggered whenever i entered the region of that element even if it is blank.
// mouse over will be triggered only if the calling will be in the contents

const button = document.getElementById("button");
const output = document.getElementById("output");
// button.addEventListener("mouseup", runEvent);

const box = document.getElementById("box");
box.addEventListener("mousemove", runEvent);
function runEvent(e) {
  console.log("event type:" + e.type);
  output.innerHTML = `<h3>Mouse X : ${e.offsetX}</h3>`;

  box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;

  console.log(box.style.backgroundColor);
}

// KEYDOWN  when the key is pressed
// e.target.value  -> to live typing

// KEYUP KEYPRESS are some other events

// ////  input tag events
//  focus, blur
// cut paste
// input

// NEW TOPIC
// SELECT AND OPTION TAG

const select = document.querySelector("select.form-control");
console.log(select)
select.addEventListener("change", runSelectEvent);
function runSelectEvent(e) {
  console.log(`${e.type}`);
  console.log(`${e.target.value}`);

}
               