let content = document.getElementById("content")
let hr = document.createElement("hr");
let h3 = document.createElement("h3");
h3.textContent = "Tommi Salo";

content.appendChild(hr);
content.appendChild(h3);

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent="Sunnuntai";
ul.appendChild(li);

let turha = document.querySelector("ul li");
turha.remove();

let maana = document.querySelector("ul li");
let ma = document.createElement("li");
ma.textContent = "Maanantai";
maana.parentElement.insertBefore(ma, maana);

let sun = document.querySelector("ul li:last-child");
let valip = document.createElement("li");
valip.textContent = "Välipäivä";
sun.parentElement.insertBefore(valip, sun);

let world = document.querySelector("ul").nextElementSibling;
let wo = document.createElement("li");
wo.textContent = "World";
world.appendChild(wo);

let items = document.querySelectorAll("ul:first-child li");

for (const item of items) {
    let text = item.textContent;
    item.textContent = "";
    
    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}