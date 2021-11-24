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
const textControl = document.querySelectorAll(".text-control");
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

//Mon objet contenant tous mes champs de mon formulaire

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

//Mon objet contenant mes emplacements d'erreurs

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

//Mon objet contenant mes messages d'erreurs

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




//Ma fonction qui s'éxécute lors de la soumission du formulaire
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();//ce qui empêche le rechargement de la page
        
   prenom();
    FORMULAIRE.myName = prenom(myName);

    nom();
    FORMULAIRE.mySecond = nom(mySecond);

    email();
    FORMULAIRE.myEmail = email(myEmail);

    naissance();
    FORMULAIRE.myNaissance = naissance(myNaissance);

    participation();
    FORMULAIRE.myParticipation = participation(myParticipation);

    ville();
    FORMULAIRE.ville1 = ville();
    FORMULAIRE.ville2 = ville();
    FORMULAIRE.ville3 = ville();
    FORMULAIRE.ville4 = ville();
    FORMULAIRE.ville5 = ville();
    FORMULAIRE.ville6 = ville();

    condition();
    FORMULAIRE.checkbox1 = condition(checkbox1);
    
    checkAllValue()
    scrollForm()
});

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function prenom(){
    if(textRegExp.test(myName.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function nom(){
    if(textRegExp.test(mySecond.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function email(){
    if(RegExpEmail.test(myEmail.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function naissance(){
    if(RegExpNumber.test(myNaissance.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function participation(){
    if(RegExpNumber.test(myParticipation.value) === true){
        return true;
    }
    return false;
}

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function ville(){
    if(ville1.checked || ville2.checked || ville3.checked || ville4.checked || ville5.checked || ville6.checked ){
        return true;
    }
    return false;
};

//Ma fonction vérifie la valeur dans le champ et la compare à ma RegExp, si la valeur correspond, ma fonction retournera true, sinon elle retourne false
function condition() {
    if(checkbox1.checked){
        return true;
    }
    return false
};

//Ma fonction va ressortir toute les clés qui sont dans mon objet FORMULAIRE. Elle execute la fonction oui avec comme parametre key
function checkAllValue() {
    Object.keys(FORMULAIRE).forEach(function(key) {
        messageError(FORMULAIRE[key],FORMULAIREeRROR[key], FORMULAIREmSG[key])
    })
}

//Ma fonction regarde chaque champs, si ils sont tous true alors il feras disparaître le formulaire et feras appraître le message de confirmation d'envoi
function scrollForm() {
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

//Ma fonction utilisant 3 parametres, condition, emplacement, message qui eux mêmes correspondent aux parametre de ma fonction main(FORMULAIRE[key],FORMULAIREeRROR[key], FORMULAIREmSG[key])
//Cette fonction permet de vérifier chaque champs, si ça valeur est different de true, alors il insera du html. Si la la valeur est true, le message d'erreur disparaîtra
function messageError(condition, emplacements, message) {
    if (!condition === true) {
        emplacements.innerHTML  = message;
        emplacements.style.display = "block"
    }else if (condition === true) {
        emplacements.style.display = "none"
    }
}