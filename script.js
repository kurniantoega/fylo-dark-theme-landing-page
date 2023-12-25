const form = document.querySelector("form");
const email = document.querySelector("input");
const error = document.querySelector("small");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  if (email.value.trim() === "") {
    error.textContent = "Email cannot be empty";
  } else if (!isEmailvalid(email.value)) {
    error.textContent = "Please provide a valid email address";
  } else {
    error.textContent = "";
    alert("Email Valid");
  }
});

function isEmailvalid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
