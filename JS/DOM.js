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

// document.querySelector("a").attributes;
// document.querySelector("a").getAttribute("href");
// document.querySelector("a").setAttribute("href", "https://twitter.com");

// document.querySelector("a").classList;
// document.querySelector("a").classList.add("hidden");
document.querySelector("a").classList.remove("hidden");
