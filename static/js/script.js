// Coded by Kartik Dixit with proud 🔥

// To disable right click on page.
// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
// });

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

  function getNameFromUrl() {
    const url = window.location.href;  // Get the full URL
    const name = url.slice(url.lastIndexOf('/') + 1);  // Slice from the last '/'
    return name;
  }

const images = [
  `../images/${getNameFromUrl()}/1.jpg`,
  `../images/${getNameFromUrl()}/2.jpg`,
  `../images/${getNameFromUrl()}/3.jpg`,
  `../images/${getNameFromUrl()}/4.jpg`,
];

const cardElements = document.getElementsByClassName("img-cards");
const body = document.getElementsByTagName("body")[0];

body.style.backgroundImage = `url(${images[3]})`;

for (let i = 0; i < cardElements.length; i++) {
  cardElements[i].style.backgroundImage = `url(${images[i]})`;
}

let currentImageIndex = 0; // Declare this outside the function to maintain state

// function changeBackgroundOnScroll() {
//   const scrollPosition = window.scrollY; // Current scroll position
//   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollPosition / scrollHeight; // How far down the page the user has scrolled (0 to 1)

//   // Determine which image to show based on scroll fraction
//   const imageIndex = Math.floor(scrollFraction * (images.length - 1));

//   if (imageIndex !== currentImageIndex) {
//     document.body.style.opacity = '0'; // Fade out current background image
//     setTimeout(() => {
//       document.body.style.backgroundImage = `url(${images[imageIndex]})`;
//       document.body.style.opacity = '1'; // Fade in the new background image
//     }, 1000); // Adjust to match the duration of the transition in CSS
//     currentImageIndex = imageIndex;
//   }
// }

// window.addEventListener("scroll", changeBackgroundOnScroll);
// async function animateBody() {
//   let k = 0;
//   let i = 0;
//   while( k =0) {
//     if(i < images.length){
//     body.style.backgroundImage = `url(${images[i]})`;
//     await delay(5)
//     i++;
//   }
//     if( i > images.length){
//       i = 0;
//   }
//   }
// }


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms*1000));
}

const loader = document.getElementById("preloader");

window.addEventListener("load", async () => {
  await delay(3.3);
  loader.style.display = "none";
});


// animateBody()
