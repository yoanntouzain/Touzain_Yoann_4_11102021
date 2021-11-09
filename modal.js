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
   /*const valueInputs = {
       myName : Boolean,
       mySecond : Boolean,
       myEmail : Boolean,
       myNaissance : Boolean,
       myParticipation : Boolean,
       ville1: Boolean,
       ville2: Boolean,
       ville3: Boolean,
       ville4: Boolean,
       ville5: Boolean,
       ville6: Boolean,
       checkbox1 : Boolean,
   };*/

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
    
    console.log(bonjour);

    scrollArray(bonjour);
});


    function prenom(){
        if(textRegExp.test(myName.value) === true){
            return true;
        }
        return false;
    }

    function nom(){
        if(textRegExp.test(mySecond.value) === true){
            return true;
        }
        return false;
    }

    function email(){
        if(RegExpEmail.test(myEmail.value) === true){
            return true;
        }
        return false;
    }

    function naissance(){
        if(RegExpNumber.test(myNaissance.value) === true){
            return true;
        }
        return false;
    }

    function participation(){
        if(RegExpNumber.test(myParticipation.value) === true){
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

function scrollArray(bonjour) {
    if (bonjour.myName 
        && bonjour.mySecond 
        && bonjour.myEmail 
        && bonjour.myNaissance 
        && bonjour.myParticipation 
        && (bonjour.ville1 === true 
        || bonjour.ville2 === true 
        || bonjour.ville3 === true 
        || bonjour.ville4 === true 
        || bonjour.ville5 === true 
        || bonjour.ville6 === true)
        && bonjour.checkbox1 === true
        ) {
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
function oui() {
    if (bonjour.myName === true) {
        errorFirst.style.display = "none";
    }else {
        errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    }
    if (bonjour.mySecond === true) {
        errorSecond.style.display = "none";
    }else {
        errorSecond.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    if (bonjour.myEmail === true) {
        errorEmail.style.display = "none";
    }else {
        errorEmail.innerHTML = "Veuillez devez entrer une adresse mail.";
    }
    if (bonjour.myNaissance === true) {
        errorNaissance.style.display = "none";
    }else {
        errorNaissance.innerHTML = "Vous devez entrer votre date de naissance.";
    }
    if (bonjour.myParticipation === true) {
        errorParticipation.style.display = "none";
    }else {
        errorParticipation.innerHTML = "Veuillez entrer une valeur numérique entière.";
    }
    if (bonjour.ville1 === true || bonjour.ville2 === true || bonjour.ville3 === true || bonjour.ville4 === true || bonjour.ville5 === true || bonjour.ville6 === true) {
        errorVilles.style.display = "none";
    }else {
        errorVilles.innerHTML = "Vous devez choisir une option.";
    }
    if (bonjour.checkbox1 === true) {
        errorCondition.style.display = "none";
    }else {
        errorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    }
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