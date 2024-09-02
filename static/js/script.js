// Coded by Kartik Dixit with proud 🔥

function displayDeveloper() {
  const header = document.getElementsByTagName("header")[0];
  // const spider = document.getElementById("spiderman");

  header.classList.toggle("show-author");
  // spider.classList.toggle("hide");

  return 0;
}

document
  .getElementById("menu-input")
  .addEventListener("click", displayDeveloper);

const images = [
    "../images/yd_sir/4.jpg",
    "../images/yd_sir/1.png",
    "../images/yd_sir/3.jpg",
    "../images/yd_sir/2.png",
];

const cardElements = document.getElementsByClassName("img-cards");
const body  = document.getElementsByTagName('body')[0];

body.style.backgroundImage = `url(${images[images.length - 1]})`;

for(let i=0; i<cardElements.length; i++){
    cardElements[i].style.backgroundImage = `url(${images[i]})`;
}