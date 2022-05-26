document.getElementById('container')

document.querySelector('#cointainer')

document.querySelectorAll('.second')

document.querySelector("ol .third")

let containerDiv = document.querySelector("#container");
containerDiv.innerText = "Hello!";

let footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

footerDiv.classList.remove("main");

let newLi = document.createElement('li');
newLi.innerText = "Four";

let ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);


let olLi = document.querySelector("ol li");
for (let i = 0; i < olLi.length; i++){
    olLi[i].style.backgroundColor = "green";
}

let footerDiv = document.querySelector(".footer");
footerDiv.remove();