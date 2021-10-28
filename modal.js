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
let myForm = document.getElementById("myForm");
let myName = document.getElementById("first");
let mySecond = document.getElementById("last");
let myEmail = document.getElementById("email");
let myNaissance = document.getElementById("birthdate");
let myParticipation = document.getElementById("quantity");
let ville1 = document.getElementById("location1");
let ville2 = document.getElementById("location2");
let ville3 = document.getElementById("location3");
let ville4 = document.getElementById("location4");
let ville5 = document.getElementById("location5");
let ville6 = document.getElementById("location6");
let checkbox1 = document.getElementById("checkbox1");


//variable erreur formulaire
let errorFirst = document.getElementById("errorFirst");
let errorSecond = document.getElementById("errorSecond");
let errorEmail = document.getElementById("errorEmail");
let errorNaissance = document.getElementById("errorNaissance");
let errorParticipation = document.getElementById("errorParticipation");
let errorVilles = document.getElementById("errorVilles");
let errorCondition = document.getElementById("errorCondition");

//RegExp
let myRegExp = /^[a-zA-Z-\s]{2,}$/;
let emailRegExp = /[a-zA-Z0-9-]@[a-z.]/;
let naissanceRegExp = /[0-9]/;
let participationRegExp = /^[0-9]{1,}$/;

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
    //chaque formulaire doit respecter les conditions qui lui sont propres
    //si le formulaire est valide passe au suivant
    //sinon marque un message personnaliser en dessous du formulaire concerner
    //si tout les formulaire ont était vérifier et sont valide alors ferme la formulaire d'inscription
    //affiche un message spécifiant la validation du formulaire
    //se message aura un bouton et une croix qui fermeront le message de validation
function stopRefresh(e) {
        e.preventDefault()
        form()
};
btnSubmit.addEventListener("click", stopRefresh)

//fonction pour vérifier la conformité du formulaire
function form() {
    prenom()
    function prenom() {
        if (myRegExp.test(myName.value) == false) {
            errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
            errorFirst.style.color = 'red';
            alert("else if prenom false declencher");
        }else if (myRegExp.test(myName.value) == true) {
            errorFirst.innerHTML = "Le champs est correct";
            errorFirst.style.color = 'green';
            alert("else if prenom true declencher");
            nomDeFamille()
            console.log('prenom validé')
        };
    };
    //vérication du nom de famille
    function nomDeFamille() {
        if (myRegExp.test(mySecond.value) == false) {
            errorSecond.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
            errorSecond.style.color = 'red';
            alert("else if false nom de famille");
        }else if (myRegExp.test(mySecond.value) == true) {
            errorSecond.innerHTML = "Le champs est correct";
            errorSecond.style.color = 'green';
            alert("c'est le 3eme true nom de famille");
            Email()
            console.log('nom de famille validé')
        }
    };
    //vérication de l'email
    function Email() {
        if (emailRegExp.test(myEmail.value) == false) {
            errorEmail.innerHTML = "Le champs est incorrect , veuillez entrer une adresse email valide. Exemple: gameon@gmail.com";
            errorEmail.style.color = 'red';
            alert("else if false email");
        }else if (emailRegExp.test(myEmail.value) == true) {
            errorEmail.innerHTML = "Le champs est correct";
            errorEmail.style.color = 'green';
            alert("c'est le 3eme true Email");
            Naissance()
            console.log('email validé')
        }
    };
    //vérication de la naissance
    function Naissance() {
        if (naissanceRegExp.test(myNaissance.value) == false) {
            errorNaissance.innerHTML = "Vous devez entrer une date de naissance correct";
            errorNaissance.style.color = 'red';
            alert("if false Naissance");
        }else if (naissanceRegExp.test(myNaissance.value) == true) {
            errorNaissance.innerHTML = "Le champs est correct";
            errorNaissance.style.color = 'green';
            alert("c'est le 3eme true Naissance");
            Participation()
            console.log('naissance validé')
        }
    };
    //vérication de la participation
    function Participation() {
        if (participationRegExp.test(myParticipation.value) == false) {
            errorParticipation.innerHTML = "Vous devez entrer un nombre entier";
            errorParticipation.style.color = 'red';
            alert("if false Participation");
        }else if (participationRegExp.test(myParticipation.value) == true) {
            errorParticipation.innerHTML = "Le champs est correct";
            errorParticipation.style.color = 'green';
            alert("c'est le 3eme true Participation");
            villes()
            console.log('Participation validé')
        }
    };
    //vérication de la ville
    function villes() {
        if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked) {
            errorVilles.innerHTML = "Le champs est correct";
            errorVilles.style.color = 'green';
            condition()
            console.log('ville est correct')
        }else{
            errorVilles.innerHTML = "Vous devez cochez une ville";
            errorVilles.style.color = 'red';
            alert("else villes ");
            console.log('probleme ville incorrect');
        }
    };
    //vérication de la condition d'utilisation
    function condition() {
        if(checkbox1.checked) {
            errorCondition.innerHTML = "Le champs est correct";
            errorCondition.style.color = 'green';
            content.style.display = "none";
            contentMessage.style.display = "block";
            console.log('Tout est bon')
        }else{
            errorCondition.innerHTML = "Vous devez accepter les conditions d'utilisations";
            errorCondition.style.color = 'red';
            alert("else condition ");
            console.log('probleme else condition')
        }
    };
};