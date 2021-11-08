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
const closes = document.querySelectorAll(".close");
const btnSubmit = document.querySelector(".btn-submit");
const content = document.querySelector(".content");
const contentMessage = document.querySelector(".content-message");
const btnValid = document.querySelectorAll(".btn-validate");

//variable champs
const myForm = document.getElementById("myForm");
const myName = document.getElementById("first");
const mySecond = document.getElementById("last");
const myEmail = document.getElementById("email");
const myNaissance = document.getElementById("birthdate");
const myParticipation = document.getElementById("quantity");
const ville1 = document.getElementById("location1");
const ville2 = document.getElementById("location2");
const ville3 = document.getElementById("location3");
const ville4 = document.getElementById("location4");
const ville5 = document.getElementById("location5");
const ville6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");


//Constante erreur formulaire
const errorFirst = document.getElementById("errorFirst");
const errorSecond = document.getElementById("errorSecond");
const errorEmail = document.getElementById("errorEmail");
const errorNaissance = document.getElementById("errorNaissance");
const errorParticipation = document.getElementById("errorParticipation");
const errorVilles = document.getElementById("errorVilles");
const errorCondition = document.getElementById("errorCondition");

//Mes RegExp
const textRegExp = /^[a-zA-Z-\s]{2,}$/;
const RegExpEmail = /[a-zA-Z0-9-]@[a-z.]/;
const RegExpNumber = /[0-9]/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closes.forEach((btn) => btn.addEventListener("click", closesModal));
btnValid.forEach((btn) => btn.addEventListener("click", btnGO));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
//Permet de rendre la croix du formulaire fonctionnelle en fermant la fenêtre
function closesModal() {
    modalbg.style.display = "none";
    content.style.display = "block";
    contentMessage.style.display = "none";
}
//Permet de rendre le Bouton Go valide
function btnGO() {
    closesModal();
    content.style.display = "block";
    contentMessage.style.display = "none";
};

//Mon tableau
   const arrayBoolean = [];

//fonction submit
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();
        
    prenom();
    arrayBoolean[0] = prenom(myName);

    nom();
    arrayBoolean[1] = nom(mySecond);

    email();
    arrayBoolean[2] = email(myEmail);

    naissance();
    arrayBoolean[3] = naissance(myNaissance);

    participation();
    arrayBoolean[4] = participation(myParticipation);

    ville();
    arrayBoolean[5] = ville();

    condition();
    arrayBoolean[6] = condition(checkbox1);

    scrollArray(arrayBoolean);
});


    function prenom(){
        if(textRegExp.test(myName.value) == true){
            return true;
        }
        return false;
    }

    function nom(){
        if(textRegExp.test(mySecond.value) == true){
            return true;
        }
        return false;
    }

    function email(){
        if(RegExpEmail.test(myEmail.value) == true){
            return true;
        }
        return false;
    }

    function naissance(){
        if(RegExpNumber.test(myNaissance.value) == true){
            return true;
        }
        return false;
    }

    function participation(){
        if(RegExpNumber.test(myParticipation.value) == true){
            return true;
        }
        return false;
    }
    
    function ville(){
        if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked ){
            return true;
        }
        return false;
    };

    function condition() {
        if(checkbox1.checked){
            return true;
        }
        return false
    };

function scrollArray(arrayBoolean) {
    if (arrayBoolean[0] && arrayBoolean[1] && arrayBoolean[2] && arrayBoolean[3] && arrayBoolean[4] && arrayBoolean[5] && arrayBoolean[6] == true) {
        noneMessage();
        content.style.display = "none";
        contentMessage.style.display = "block";
        return alert("Le formulaire est envoyé!")
    }else {
        messagePrenom()
        messageNom()
        messageEmail() 
        messageNaissance() 
        messageParticipation() 
        messageVille() 
        messageCondition()
    };
};

function noneMessage() {
    errorFirst.style.display = "none";
    errorSecond.style.display = "none";
    errorEmail.style.display = "none";
    errorNaissance.style.display = "none";
    errorParticipation.style.display = "none";
    errorVilles.style.display = "none";
    errorCondition.style.display = "none";
}

function messagePrenom() {
        if (arrayBoolean[0] == true) {
            errorFirst.style.display = "none";
        }else {
            errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
        }
};

function messageNom() {
        if (arrayBoolean[1] == true) {
            errorSecond.style.display = "none";
        }else {
            errorSecond.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        }
};

function messageEmail() {
        if (arrayBoolean[2] == true) {
            errorEmail.style.display = "none";
        }else {
            errorEmail.innerHTML = "Veuillez devez entrer une adresse mail.";
        }
};

function messageNaissance() {
        if (arrayBoolean[3] == true) {
            errorNaissance.style.display = "none";
        }else {
            errorNaissance.innerHTML = "Vous devez entrer votre date de naissance.";
        }
};

function messageParticipation() {
        if (arrayBoolean[4] == true) {
            errorParticipation.style.display = "none";
        }else {
            errorParticipation.innerHTML = "Veuillez entrer une valeur numérique entière.";
        }
};

function messageVille() {
        if (arrayBoolean[5] == true) {
            errorVilles.style.display = "none";
        }else {
            errorVilles.innerHTML = "Vous devez choisir une option.";
        }
};

function messageCondition() {
        if (arrayBoolean[6] == true) {
            errorCondition.style.display = "none";
        }else {
            errorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
        }
};