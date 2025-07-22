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


var itemList = document.querySelector("#items");
console.log(itemList.parentNode);

console.log(itemList.childElementCount)