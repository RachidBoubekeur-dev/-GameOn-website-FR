function editNav() {
  let topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const close = document.querySelector(".close");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  content.style.animationName = "modalopen";
}

// close modal form
function closeModal() {
  content.style.animationName = "modalclose";
  setTimeout(function () { modalBg.style.display = "none"; }, 725);
}


