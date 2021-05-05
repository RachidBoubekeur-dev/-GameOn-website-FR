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
const modalBody = document.querySelector(".modal-body");
const ValideForm = document.querySelector(".divValideForm");
const closeBtn = document.querySelector(".close");
const buttonClose = document.querySelector("#buttonClose");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");

// DOM Elements form
const submitForm = document.querySelector("form");
const firstInputForm = document.querySelector("#first");
const lastInputForm = document.querySelector("#last");
const emailInputForm = document.querySelector("#email");
const birthdateInputForm = document.querySelector("#birthdate");
const locationDivForm = document.querySelector("#location");
const location1InputForm = document.querySelector("#location1");
const location2InputForm = document.querySelector("#location2");
const location3InputForm = document.querySelector("#location3");
const location4InputForm = document.querySelector("#location4");
const location5InputForm = document.querySelector("#location5");
const location6InputForm = document.querySelector("#location6");
const checkbox1InputForm = document.querySelector("#checkbox1");
const regexAlpha = /^[a-z -éèàâêûîôäëüïöù][^,.'0-9]+$/;

// modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
buttonClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  modalBg.style.animationName = "modalbgroundopen";
  content.style.animationName = "modalopen";
}

// close modal form
function closeModal() {
  modalBg.style.animationName = "modalbgroundclose";
  content.style.animationName = "modalclose";
  setTimeout(function () { modalBg.style.display = "none"; }, 725);
}

// let array default input valid
let verifInputValid = [false, false, false, true, true, true];

// event control form input first
firstInputForm.addEventListener('keyup', function () {
  if (firstInputForm.value.split(' ').join('').length >= 2 && regexAlpha.test(firstInputForm.value)) {
    firstInputForm.style.border = "0px solid red";
    document.querySelector("#errorForm1").style.display = "none";
    verifInputValid[0] = true;
  } else {
    firstInputForm.style.border = "1px solid red";
    document.querySelector("#errorForm1").style.display = "block";
    verifInputValid[0] = false;
  }
})

// event control form input last
lastInputForm.addEventListener('keyup', function () {
  if (lastInputForm.value.split(' ').join('').length >= 2 && regexAlpha.test(lastInputForm.value)) {
    lastInputForm.style.border = "0px solid red";
    document.querySelector("#errorForm2").style.display = "none";
    verifInputValid[1] = true;
  } else {
    lastInputForm.style.border = "1px solid red";
    document.querySelector("#errorForm2").style.display = "block";
    verifInputValid[1] = false;
  }
})

// event control form input email
emailInputForm.addEventListener('keyup', function () {
  if (emailInputForm.validity.valid) {
    emailInputForm.style.border = "0px solid red";
    document.querySelector("#errorForm3").style.display = "none";
    verifInputValid[2] = true;
  } else {
    emailInputForm.style.border = "1px solid red";
    document.querySelector("#errorForm3").style.display = "block";
    verifInputValid[2] = false;
  }
})

// event control form input birthdate
birthdateInputForm.addEventListener('keyup', function () {
  if (birthdateInputForm.value.length >= 6 && birthdateInputForm.value.split('-')[0] >= 1950 && birthdateInputForm.value.split('-')[0] <= 2013) {
    birthdateInputForm.style.border = "0px solid red";
    document.querySelector("#errorForm4").style.display = "none";
    verifInputValid[3] = true;
  } else {
    birthdateInputForm.style.border = "1px solid red";
    document.querySelector("#errorForm4").style.display = "block";
    verifInputValid[3] = false;
  }
})

// event control form input location
locationDivForm.addEventListener('click', function () {
  if (location1InputForm.checked === true || location2InputForm.checked === true || location3InputForm.checked === true || location4InputForm.checked === true || location5InputForm.checked === true || location6InputForm.checked === true) {
    document.querySelector("#errorForm5").style.display = "none";
    verifInputValid[4] = true;
  } else {
    document.querySelector("#errorForm5").style.display = "block";
    verifInputValid[4] = false;
  }
})

// event control form input checkbox1
checkbox1InputForm.addEventListener('click', function () {
  if (checkbox1InputForm.checked === true) {
    document.querySelector("#errorForm6").style.display = "none";
    verifInputValid[5] = true;
  } else {
    document.querySelector("#errorForm6").style.display = "block";
    verifInputValid[5] = false;
  }
})

// event submit form
submitForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // control if all input is valid (true)
  if (verifInputValid[0] === true && verifInputValid[1] === true && verifInputValid[2] === true && verifInputValid[3] === true && verifInputValid[4] === true && verifInputValid[5] === true) {

    // if form is valid
    document.querySelector("form").style.display = "none";
    modalBody.style.display = "flex";
    modalBody.style.height = "29em";
    ValideForm.style.display = "block";

  } else {
    // error form input
    let arrayInput = document.querySelectorAll('.inputControl');

    for (let i = 0; i < arrayInput.length; i++) {
      if (arrayInput[i].value.length <= 1) {
        arrayInput[i].style.border = "1px solid red";
        document.querySelector("#errorForm" + (i + 1)).style.display = "block";
      }
    }
  }
});