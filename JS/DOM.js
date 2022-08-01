// In JS, we can write our own tags(custom tags).

// document.querySelector("h1"); // it will select only the first h1.
// document.querySelector("h1").innerHTML = "";

// To select the second h1, we need to give class or id to it.
// document.querySelector(".second").innerText = "second h1";

// document.querySelector("li").innerText = "why are you outside";
// document.querySelector("ul li").innerText = "i am first";

// document.querySelectorAll("ul li").innerText;
// document.querySelectorAll("ul li")[0];
// document.querySelectorAll("ul li")[1].innerText = "bye";

// let list = document.querySelectorAll("ul li");
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].innerText);
// }

// for (let i = 0; i < list.length; i++) {
//   if (list[i].innerText == "4") {
//     list[i].innerText = "Hello, world!";
//   }
// }

// div.container :- a div with class "container".
// div .container :- a div having an element with class "container".

// document.firstElementChild;
// document.firstElementChild.firstElementChild;
// document.firstElementChild.firstElementChild.firstElementChild;
// document.firstElementChild.firstElementChild.firstElementChild.innerText;

// document.querySelector("li").style.backgroundColor = "red";
// document.querySelector("li").style.fontSize = "xx-large";

// document.querySelectorAll("a")
// document.querySelector("a").getAttribute("href");
// document.querySelector("a").setAttribute("href", "https://twitter.com");
// document.querySelectorAll("a")[2]

// document.querySelector("a").classList; // classList is used to get the element by its class.
// document.querySelector("a").classList.add("visibility"); // classname 'visibility'  is added. It can be used to give css properties separately.
// document.querySelector("a").classList.remove("visibility"); // classname 'visibility' is removed.
// document.querySelector("a").classList.toggle("invisible"); // it will add the classname 'invisible' if not present or vice versa.

// function toggle() {
//   document.querySelector("a").classList.toggle("visibility");
// }
// Now on clicking on 'click' button, it will toggle(show/hide) the visibility of the element.

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const btn = document.querySelector(".btn");

//1. grandParent.addEventListener("mouseover", (event) => {
//   console.log("grand parent", event);
// });

// Whenever a HTML element is getting rendered, it performs two actions:
// I. Event capturing - Event comes down from html to the body then to the element, this coming inside to the element is called event capturing.
// Capturing the event is also called trickling(or, trickling down).
// II. Event bubbling - Going back of the element is called event bubbling(or, bubbling up).

// 2.
// grandParent.addEventListener("click", () => {
//   console.log("grand parent bubbling");
// });

parent.addEventListener("click", () => {
  console.log("parent bubbling");
});

child.addEventListener("click", () => {
  console.log("child bubbling");
});

// 2+3
grandParent.addEventListener(
  "click",
  () => {
    console.log("grand parent capturing");
  },
  { capture: true } // By default, it is false
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent capturing");
  },
  { capture: true }
);

child.addEventListener(
  "click",
  () => {
    console.log("child capturing");
  },
  { capture: true }
);

// If we want to stop then
// (i) Suppose we want to stop bubbling at parent...

// parent.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("parent bubbling");
// });

// (ii) stop at grandparent capturing

// grandParent.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("grand parent capturing");
//   },
//   { capture: true }
// );

// If we want to capture the element only once, then
// grandParent.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("grand parent capturing");
//   },
//   { once: true }
// );

// To remove the element after a given interval of time...

function printGrandParent() {
  console.log("grand parent bubbling");
}

// grandParent.addEventListener("click", printGrandParent);

// setTimeout(() => {
//   grandParent.removeEventListener("click", printGrandParent);
// }, 2000);

// We also can remove the event by button.
function removeGrandParent() {
  setTimeout(() => {
    grandParent.removeEventListener("click", printGrandParent);
  }, 2000);
}

btn.addEventListener("click", removeGrandParent);

// Adding event tp the same element(Any no. of eventListeners can be added to a element)
function printOnHover() {
  console.log("hovering");
}
grandParent.addEventListener("mouseover", printOnHover);

// It is also possible to add events to the same element with different functions again and again.

// We can create a new element also.
// (i)
// const newDiv = document.createElement("div");
// newDiv.style.height = "5rem";
// newDiv.style.width = "5rem";
// newDiv.style.backgroundColor = "tomato";
// document.body.append(newDiv);
// newDiv.remove(); // to remove the element.

// (ii)
// const para = document.createElement("p");
// para.innerHTML = "amitkumar";
// document.body.append(para);

// (iii)
// const newDiv = document.createElement("div");
// newDiv.style.height = "5rem";
// newDiv.style.width = "5rem";
// newDiv.style.backgroundColor = "tomato";
// const para = document.createElement("p");
// para.innerHTML = "amitkumar";
// newDiv.append(para);
// document.body.append(newDiv);

// child.append(para);

// let colors = ["red", "green", "blue", "yellow", "orange", "black"];
// for (let i = 0; i < colors.length; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.style.width = "10rem";
//   newDiv.style.height = "5rem";
//   newDiv.style.backgroundColor = colors[i];
//   newDiv.style.marginTop = "10px";
//   document.body.append(newDiv);
// }
// newDiv.remove(); // gives error(newDiv is not defined), as we cannot access variable declared using let outside the curly braces. But if 'let' is replaced with 'var' then black color will be removed.

// If we want to remove any selected color/colors then...
let colors = ["red", "green", "blue", "yellow", "orange", "black"];
let newDiv = [];
for (let i = 0; i < colors.length; i++) {
  newDiv[i] = document.createElement("div");
  newDiv[i].style.width = "10rem";
  newDiv[i].style.height = "5rem";
  newDiv[i].style.backgroundColor = colors[i];
  newDiv[i].style.marginTop = "10px";
  // document.body.append(newDiv[i]);
  if (colors[i] !== 'orange') {
    document.body.append(newDiv[i]);
  }
}
// We can also remove elements individually...
// newDiv[0].remove();
// newDiv[4].remove();


// If we want to write something (create a input in html)
function changing(event) {
  console.log(event.target.value);
}

// To change properties of a element...
function changing() {
  parent.style.color = "green";
  parent.style.fontSize = "2rem";
  parent.style.fontWeight = "bold";
}

// Join text written on html with the text of js.
let para = document.querySelector(".para");
let text = para.innerText;
para.innerText = text + " is a good boy";

// Search in browser...
// grandParent.childElementCount //1
// grandParent.children
// child.parentElement
// child.parentElement.parentElement
// child.parentElement.parentElement.parentElement.parentElement // null
// child.parentElement.parentElement.parentElement.childNodes
// document.getElementsByClassName('parent')[0].childNodes