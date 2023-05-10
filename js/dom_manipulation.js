// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.style.borderColor = "black";
content.style.backgroundColor = "pink";
container.appendChild(content);

// const h1 = document.createElement("h1");
// h1.style.innerText = "I'm in a div";
// h1.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
const node1 = document.createTextNode("I'm in a div");
h1.appendChild(node1);
content.appendChild(h1);

const p = document.createElement("p");
const node2 = document.createTextNode("ME TOO");
p.appendChild(node2);
content.appendChild(p);