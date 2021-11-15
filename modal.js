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

//Mon tableau

class bonjour {
    constructor(myName, mySecond, myEmail, myNaissance, myParticipation, ville1, ville2, ville3, ville4, ville5, ville6, checkbox1) {
        this.myName = myName;
        this.mySecond = mySecond;
        this.myEmail = myEmail;
        this.myNaissance = myNaissance;
        this.myParticipation = myParticipation;
        this.ville1 = ville1;
        this.ville2 = ville2;
        this.ville3 = ville3;
        this.ville4 = ville4;
        this.ville5 = ville5;
        this.ville6 = ville6;
        this.checkbox1 = checkbox1;
    }
};
//fonction submit
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();
        
    prenom();
    bonjour.myName = prenom(myName);
    console.log(bonjour.myName);

    nom();
    bonjour.mySecond = nom(mySecond);
    console.log(bonjour.mySecond);

    email();
    bonjour.myEmail = email(myEmail);
    console.log(bonjour.myEmail);

    naissance();
    bonjour.myNaissance = naissance(myNaissance);
    console.log(bonjour.myNaissance);

    participation();
    bonjour.myParticipation = participation(myParticipation);
    console.log(bonjour.myParticipation);

    ville();
    bonjour.ville1 = ville();
    bonjour.ville2 = ville();
    bonjour.ville3 = ville();
    bonjour.ville4 = ville();
    bonjour.ville5 = ville();
    bonjour.ville6 = ville();
    console.log("ville 1 = " + bonjour.ville1 
                +" ville 2 = " + bonjour.ville2 
                +" ville 3 = " + bonjour.ville3 
                +" ville 4 = " + bonjour.ville4 
                +" ville 5 = " + bonjour.ville5 
                +" ville 6 = " + bonjour.ville6 
                );

    condition();
    bonjour.checkbox1 = condition(checkbox1);
    console.log(bonjour.checkbox1);
    

    scrollArray(bonjour);
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

function scrollArray(bonjour) {
    if (bonjour.myName 
        && bonjour.mySecond 
        && bonjour.myEmail 
        && bonjour.myNaissance 
        && bonjour.myParticipation 
        && (bonjour.ville1 === true || bonjour.ville2 === true || bonjour.ville3 === true || bonjour.ville4 === true || bonjour.ville5 === true || bonjour.ville6 === true)
        && bonjour.checkbox1 === true
        ) {
            content.style.display = "none";
            contentMessage.style.display = "block";
    }else { 
        messagePrenom();
        messageNom();
        messageEmail(); 
        messageNaissance(); 
        messageParticipation(); 
        messageVille(); 
        messageCondition();
    };
};

function oui() {
    if (bonjour.myName === false) {errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";}
    if (bonjour.mySecond === false) {errorSecond.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";}
    if (bonjour.myEmail === false) {errorEmail.innerHTML = "Veuillez devez entrer une adresse mail.";}
    if (bonjour.myNaissance === false) {errorNaissance.innerHTML = "Vous devez entrer votre date de naissance.";}
    if (bonjour.myParticipation === false) {errorParticipation.innerHTML = "Veuillez entrer une valeur numérique entière.";}
    if (bonjour.ville1 === false || bonjour.ville2 === false || bonjour.ville3 === false || bonjour.ville4 === false || bonjour.ville5 === false || bonjour.ville6 === false) {errorVilles.innerHTML = "Vous devez choisir une option.";}
    if (bonjour.checkbox1 === false) {errorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";}
}

function messagePrenom() {
    oui()
};

function messageNom() {
    oui()
};

function messageEmail() {
    oui()
};

function messageNaissance() {
    oui()
};

function messageParticipation() {
    oui()
};

function messageVille() {
    oui()
};

function messageCondition() {
    oui()
};