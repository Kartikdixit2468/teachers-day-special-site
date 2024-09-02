// Coded by Kartik Dixit with proud 🔥

function displayDeveloper() {
  const header = document.getElementsByTagName("header")[0];

  header.classList.toggle("show-author");

  return 0;
}

document
  .getElementById("menu-input")
  .addEventListener("click", displayDeveloper);

const images = [
  "../images/iron_man/wp4310352.jpg",
  "../images/iron_man/tony-stark.jpg",
  "../images/iron_man/8496aad050d37804e7c097979597f4d3.png",
  "../images/iron_man/blob.jpeg",
];

const cardElements = document.getElementsByClassName("img-cards");
const body  = document.getElementsByTagName('body')[0];

body.style.backgroundImage = `url(${images[images.length - 1]})`;

for(let i=0; i<cardElements.length; i++){
    cardElements[i].style.backgroundImage = `url(${images[i]})`;
}