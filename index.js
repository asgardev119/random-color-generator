let text = document.querySelector("h2");
let para = document.querySelector("p");
let body = document.querySelector("body");
let btn = document.querySelector("button");

function onColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let bgcolor = `rgb( ${red} , ${green} , ${blue})`;

  let hexColorChange =
    "#" +
    red.toString(16).padStart(2, "0") +
    green.toString(16).padStart(2, "0") +
    blue.toString(16).padStart(2, "0");

  body.style.background = bgcolor;
  text.innerHTML = bgcolor;
  para.innerText = hexColorChange;
  btn.style.background = bgcolor;
}
