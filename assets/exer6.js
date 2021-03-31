/* Modal's pop */
const infooter = document.getElementById("countFooter")

function visibility() {
  infooter.classList.toggle("visibility")
};

function noVisibility() {
  infooter.classList.remove("visibility");
};

/* Request email */
let email2 = 'jpablo.osorio@gmail.com';
let email = document.getElementById("requestEmail").value;
const buttonHeroku = document.getElementById("requestButton");
const urlHeroku = 'https://warm-inlet-45789.herokuapp.com/';

/* visibility actions */
const buttonRegister = document.getElementById("buttonRegister")
const buttonLogin = document.getElementById("buttonLogin")

async function getData(url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      'email': email2
    })
  });
  if (response.ok) {
    buttonLogin.classList.toggle("visibility")
  } else {
    buttonRegister.classList.toggle("visibility")
  }
  const volverJson = await response.json();
  return volverJson 
};

buttonHeroku.addEventListener("click", function(p) {
  p.preventDefault();
  getData(urlHeroku)
});