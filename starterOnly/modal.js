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
const quantityInputForm = document.querySelector("#quantity");
const location1InputForm = document.querySelector("#location1");
const location2InputForm = document.querySelector("#location2");
const location3InputForm = document.querySelector("#location3");
const location4InputForm = document.querySelector("#location4");
const location5InputForm = document.querySelector("#location5");
const location6InputForm = document.querySelector("#location6");
const checkbox1InputForm = document.querySelector("#checkbox1");
const regexAlpha = /^[a-z ,.'-éèàâêûîôäëüïöù][^0-9]+$/;

// modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
buttonClose.addEventListener("click", closeModal);

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

// control form
submitForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // control input first
  if (firstInputForm.value.length >= 2 && regexAlpha.test(firstInputForm.value)) {
    firstInputForm.style.border = "0px solid red";
    document.querySelector("#errorForm1").style.display = "none";

    // control input last
    if (lastInputForm.value.length >= 2 && regexAlpha.test(lastInputForm.value)) {
      lastInputForm.style.border = "0px solid red";
      document.querySelector("#errorForm2").style.display = "none";

      // control input email
      if (emailInputForm.validity.valid) {
        emailInputForm.style.border = "0px solid red";
        document.querySelector("#errorForm3").style.display = "none";

        // control input birthdate
        if (birthdateInputForm.value.length >= 6) {
          birthdateInputForm.style.border = "0px solid red";
          document.querySelector("#errorForm4").style.display = "none";

          // control input quantity
          if (!isNaN(quantityInputForm.value) && quantityInputForm.value >= 0 && quantityInputForm.value <= 99) {
            quantityInputForm.style.border = "0px solid red";
            document.querySelector("#errorForm5").style.display = "none";

            // control input location city
            if (location1InputForm.checked === true || location2InputForm.checked === true || location3InputForm.checked === true || location4InputForm.checked === true || location5InputForm.checked === true || location6InputForm.checked === true) {
              document.querySelector("#errorForm6").style.display = "none";

              // control input checkbox1
              if (checkbox1InputForm.checked === true) {

                // if form is valid
                document.querySelector("#errorForm7").style.display = "none";
                document.querySelector("form").style.display = "none";
                modalBody.style.display = "flex";
                modalBody.style.height = "26em";
                ValideForm.style.display = "block";

              } else {
                // error form input checkbox1
                document.querySelector("#errorForm7").style.display = "block";
              }
            } else {
              // error form input location city
              document.querySelector("#errorForm6").style.display = "block";
            }
          } else {
            // error form input quantity
            quantityInputForm.style.border = "1px solid red";
            document.querySelector("#errorForm5").style.display = "block";
          }
        } else {
          // error form input birthdate
          birthdateInputForm.style.border = "1px solid red";
          document.querySelector("#errorForm4").style.display = "block";
        }
      } else {
        // error form input email
        emailInputForm.style.border = "1px solid red";
        document.querySelector("#errorForm3").style.display = "block";
      }
    } else {
      // error form input last
      lastInputForm.style.border = "1px solid red";
      document.querySelector("#errorForm2").style.display = "block";
    }
  } else {
    // error form input first
    firstInputForm.style.border = "1px solid red";
    document.querySelector("#errorForm1").style.display = "block";
  }
});