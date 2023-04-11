"use strict"

const target = document.getElementById("target");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.innerText = "First item";
li2.innerText = "Second item";
li2.classList.add("my-item");
li3.innerText = "Third item";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
target.appendChild(ul);