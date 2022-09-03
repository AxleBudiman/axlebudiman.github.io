// smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(prevent) {
    prevent.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});

// form 'semi-validation'
// input
const fullName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const brief = document.querySelector("#brief");

// submit button
const submit = document.querySelector("#submit");

// define value
let fullNameValue = '';
let phoneValue = '';
let emailValue = '';
let briefValue = '';
let isSubmitEnabled = false;

// capture changes
fullName.oninput = () => {
  fullNameValue = fullName.value;
  updateButton();
};
phone.oninput = () => {
  phoneValue = phone.value;
  updateButton();
};
email.oninput = () => {
  emailValue = email.value;
  updateButton();
};
brief.oninput = () => {
  briefValue = brief.value;
  updateButton();
};

// disabling button if form value missing
function updateButton() {
  if (
    (fullNameValue == '' ||
    phoneValue == '' ||
    emailValue == '' ||
    briefValue == '') == true
  ) {
    console.log("Disable Submit Button");
    isSubmitEnabled = false;
  } else {
    console.log("Enable Submit Button");
    isSubmitEnabled = true;
  }
}

// submit onclick
document.addEventListener('click', function (event) {
    if (!event.target.matches("#submit")) return;

    event.preventDefault();

    if (isSubmitEnabled) {
      alert("Thank you! Your brief is now submitted. We will reach you out ASAP :)");
    } else {
      alert("Please fill the form first");
    }
  },
  false
);