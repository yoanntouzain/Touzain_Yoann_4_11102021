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


//variable erreur formulaire
let errorFirst = document.getElementById("errorFirst");
let errorSecond = document.getElementById("errorSecond");
let errorEmail = document.getElementById("errorEmail");
let errorNaissance = document.getElementById("errorNaissance");
let errorParticipation = document.getElementById("errorParticipation");
let errorVilles = document.getElementById("errorVilles");

//RegExp
let myRegExp = /^[a-zA-Z-\s]{2,}$/;
let emailRegExp = /[a-zA-Z0-9-]@gmail.com$/;
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


//fonction pour vérifier la conformité du formulaire
myForm.addEventListener('submit', function(e) {
    if(myName.value.trim() == "") {
        errorFirst.innerHTML = "Ce champ doit être remplis";
        errorFirst.style.color = 'red';
        myName.style.border = '2px solid red';
        alert("if prenom est déclencher");
        e.preventDefault()
    }else if (myRegExp.test(myName.value) == false) {
        errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
        errorFirst.style.color = 'red';
        alert("else if prenom false declencher");
        e.preventDefault()
    }else if (myRegExp.test(myName.value) == true) {
        errorFirst.innerHTML = "Le champs est correct";
        errorFirst.style.color = 'green';
        alert("else if prenom true declencher");
        e.preventDefault()
        nomDeFamille(e)
        console.log('prenom validé')
    };
    function nomDeFamille(e) {
        if (mySecond.value.trim() == "") {
            errorSecond.innerHTML = "Ce champ doit être remplis";
            errorSecond.style.color = 'red';
            alert("if nom de famille ");
            e.preventDefault()
        }else if (myRegExp.test(mySecond.value) == false) {
            errorSecond.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
            errorSecond.style.color = 'red';
            alert("else if false nom de famille");
            e.preventDefault()
        }else if (myRegExp.test(mySecond.value) == true) {
            errorSecond.innerHTML = "Le champs est correct";
            errorSecond.style.color = 'green';
            alert("c'est le 3eme true nom de famille");
            e.preventDefault()
            Email(e)
            console.log('nom de famille validé')
        }
    };
    function Email(e) {
        if (myEmail.value.trim() == "") {
            errorEmail.innerHTML = "Ce champ doit être remplis.";
            errorEmail.style.color = 'red';
            alert("if Email ");
            e.preventDefault();
        }else if (emailRegExp.test(myEmail.value) == false) {
            errorEmail.innerHTML = "Le champs est incorrect , veuillez entrer une adresse email valide. Exemple: gameon@gmail.com";
            errorEmail.style.color = 'red';
            alert("else if false email");
            e.preventDefault();
        }else if (emailRegExp.test(myEmail.value) == true) {
            errorEmail.innerHTML = "Le champs est correct";
            errorEmail.style.color = 'green';
            alert("c'est le 3eme true Email");
            e.preventDefault()
            Naissance(e)
            console.log('email validé')
        }
    };
    function Naissance(e) {
        if (myNaissance.value.trim() == "") {
            errorNaissance.innerHTML = "Ce champ doit être remplis";
            errorNaissance.style.color = 'red';
            alert("if Naissance ");
            e.preventDefault();
        }else if (naissanceRegExp.test(myNaissance.value) == false) {
            errorNaissance.innerHTML = "Vous devez entrer une date de naissance correct";
            errorNaissance.style.color = 'red';
            alert("else if false Naissance");
            e.preventDefault();
        }else if (naissanceRegExp.test(myNaissance.value) == true) {
            errorNaissance.innerHTML = "Le champs est correct";
            errorNaissance.style.color = 'green';
            alert("c'est le 3eme true Naissance");
            e.preventDefault()
            Participation(e)
            console.log('naissance validé')
        }
    };
    function Participation(e) {
        if (myParticipation.value.trim() == "") {
            errorParticipation.innerHTML = "Ce champ doit être remplis";
            errorParticipation.style.color = 'red';
            alert("if Participation ");
            e.preventDefault()
        }else {
            errorParticipation.innerHTML = "Le champs est correct";
            errorParticipation.style.color = 'green';
            alert("c'est le 3eme true Participation");
            e.preventDefault()
            villes(e)
            console.log('Participation validé')
        }
    };
    function villes(e) {
        if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked) {
            content.style.display = "none";
            contentMessage.style.display = "block";
            console.log('Tout est bon')
        }else{
            errorVilles.innerHTML = "Ce champ doit être remplis";
            errorVilles.style.color = 'red';
            alert("else villes ");
            console.log('probleme else')
            e.preventDefault()
        }
    }
});