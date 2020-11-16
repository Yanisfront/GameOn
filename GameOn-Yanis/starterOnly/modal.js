function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



let myForme = document.getElementById ('formData');


myForme.addEventListener('submit' , function(e){
  
  let prenom = document.getElementById ('first');
  if (prenom.value.trim() == ""){
   

  let myError = document.getElementById ('error') ;
  myError.innerHTML = "Veuillez entrer votre prénom.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});

let myForme2 = document.getElementById ('formData');


myForme2.addEventListener('submit' , function(e){
  
  let nom = document.getElementById ('last');
  if (nom.value.trim() == ""){
   

  let myError = document.getElementById ('error2') ;
  myError.innerHTML = "Veuillez entrer votre nom.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});

let myForme3 = document.getElementById ('formData');


myForme3.addEventListener('submit' , function(e){
  
  let email = document.getElementById ('email');
  if (email.value.trim() == ""){
   

  let myError = document.getElementById ('error3') ;
  myError.innerHTML = "Veuillez entrer votre E-mail.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});

let myForme4 = document.getElementById ('formData');


myForme4.addEventListener('submit' , function(e){
  
  let birthdate = document.getElementById ('birthdate');
  if (birthdate.value.trim() == ""){
   

  let myError = document.getElementById ('error4') ;
  myError.innerHTML = "Veuillez entrer votre date de naissance.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});

let myForme5 = document.getElementById ('formData');


myForme5.addEventListener('submit' , function(e){
  
  let quantity = document.getElementById ('quantity');
  if (quantity.value.trim() == ""){
   

  let myError = document.getElementById ('error5') ;
  myError.innerHTML = "Veuillez entrer un nomnbre.";
  myError.style.color = 'red';
  e.preventDefault();

  }
});

