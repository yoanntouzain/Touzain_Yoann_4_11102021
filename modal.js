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
const RegExpEmail = /[a-zA-Z0-9-]{3,}@[a-z]{4,}.[a-z]{2,}/;
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

//Mon formulaire

const FORMULAIRE = {
    myName: undefined,
    mySecond: undefined,
    myEmail: undefined,
    myNaissance: undefined,
    myParticipation: undefined,
    ville1: undefined,
    ville2: undefined,
    ville3: undefined,
    ville4: undefined,
    ville5: undefined,
    ville6: undefined,
    checkbox1: undefined,
}

//Mes emplacements d'erreurs

const FORMULAIREeRROR = {
    myName: errorFirst,
    mySecond: errorSecond,
    myEmail: errorEmail,
    myNaissance: errorNaissance,
    myParticipation: errorParticipation,
    ville1: errorVilles,
    ville2: errorVilles,
    ville3: errorVilles,
    ville4: errorVilles,
    ville5: errorVilles,
    ville6: errorVilles,
    checkbox1: errorCondition,
}

//Mes messages d'erreurs

const FORMULAIREmSG = {
    myName: "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
    mySecond: "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
    myEmail: "Veuillez devez entrer une adresse mail.",
    myNaissance: "Vous devez entrer votre date de naissance.",
    myParticipation: "Veuillez entrer une valeur numérique entière.",
    ville1: "Vous devez choisir une option.",
    ville2: "Vous devez choisir une option.",
    ville3: "Vous devez choisir une option.",
    ville4: "Vous devez choisir une option.",
    ville5: "Vous devez choisir une option.",
    ville6: "Vous devez choisir une option.",
    checkbox1: "Vous devez vérifier que vous acceptez les termes et conditions.",
}




//fonction submit
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();
        
   prenom();
    FORMULAIRE.myName = prenom(myName);
    console.log(FORMULAIRE.myName);

    nom();
    FORMULAIRE.mySecond = nom(mySecond);
    console.log(FORMULAIRE.mySecond);

    email();
    FORMULAIRE.myEmail = email(myEmail);
    console.log(FORMULAIRE.myEmail);

    naissance();
    FORMULAIRE.myNaissance = naissance(myNaissance);
    console.log(FORMULAIRE.myNaissance);

    participation();
    FORMULAIRE.myParticipation = participation(myParticipation);
    console.log(FORMULAIRE.myParticipation);

    ville();
    FORMULAIRE.ville1 = ville();
    FORMULAIRE.ville2 = ville();
    FORMULAIRE.ville3 = ville();
    FORMULAIRE.ville4 = ville();
    FORMULAIRE.ville5 = ville();
    FORMULAIRE.ville6 = ville();
    console.log( "ville 1 = " + FORMULAIRE.ville1 
                +" ville 2 = " + FORMULAIRE.ville2 
                +" ville 3 = " + FORMULAIRE.ville3 
                +" ville 4 = " + FORMULAIRE.ville4 
                +" ville 5 = " + FORMULAIRE.ville5 
                +" ville 6 = " + FORMULAIRE.ville6 
                );

    condition();
    FORMULAIRE.checkbox1 = condition(checkbox1);
    console.log(FORMULAIRE.checkbox1);
    
    main()
    scrollArray(FORMULAIRE);
});


function prenom(){
    if(textRegExp.test(myName.value) === true){
        errorFirst.style.display = "none";
        return true;
    }
    errorFirst.style.display = "block";
    return false;
}

function nom(){
    if(textRegExp.test(mySecond.value) === true){
        errorSecond.style.display = "none";
        return true;
    }
    errorSecond.style.display = "block";
    return false;
}

function email(){
    if(RegExpEmail.test(myEmail.value) === true){
        errorEmail.style.display = "none";
        return true;
    }
    errorEmail.style.display = "block";
    return false;
}

function naissance(){
    if(RegExpNumber.test(myNaissance.value) === true){
        errorNaissance.style.display = "none";
        return true;
    }
    errorNaissance.style.display = "block";
    return false;
}

function participation(){
    if(RegExpNumber.test(myParticipation.value) === true){
        errorParticipation.style.display = "none";
        return true;
    }
    errorParticipation.style.display = "block";
    return false;
}

function ville(){
    if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked ){
        errorVilles.style.display = "none";
        return true;
    }
    errorVilles.style.display = "block";
    return false;
};

function condition() {
    if(checkbox1.checked){
        errorCondition.style.display = "none";
        return true;
    }
    errorCondition.style.display = "block";
    return false
};

function main() {
    Object.keys(FORMULAIRE).forEach(function(key) {
        oui(FORMULAIRE[key],FORMULAIREeRROR[key], FORMULAIREmSG[key])
    })
}

function scrollArray(FORMULAIRE) {
    if (FORMULAIRE.myName 
        && FORMULAIRE.mySecond 
        && FORMULAIRE.myEmail 
        && FORMULAIRE.myNaissance 
        && FORMULAIRE.myParticipation 
        && (FORMULAIRE.ville1 === true || FORMULAIRE.ville2 === true || FORMULAIRE.ville3 === true || FORMULAIRE.ville4 === true || FORMULAIRE.ville5 === true || FORMULAIRE.ville6 === true)
        && FORMULAIRE.checkbox1 === true
        ) {
        content.style.display = "none";
        contentMessage.style.display = "block";
    }
};
function oui(condition, emplacements, message) {
    if (!condition === true) {
        emplacements.innerHTML  = message;
    }
}