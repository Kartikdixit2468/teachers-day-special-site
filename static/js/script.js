// Coded by Kartik Dixit with proud 🔥

function displayDeveloper() {
    const header = document.getElementsByTagName("header")[0];   
    header.classList.toggle("show-author");
  
    return 0;
  }
  
  document.getElementById("menu-input").addEventListener("click", displayDeveloper);
  