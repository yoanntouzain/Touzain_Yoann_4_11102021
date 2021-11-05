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
/*
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
*/


//Constante erreur formulaire
const errorFirst = document.getElementById("errorFirst");
const errorSecond = document.getElementById("errorSecond");
const errorEmail = document.getElementById("errorEmail");
const errorNaissance = document.getElementById("errorNaissance");
const errorParticipation = document.getElementById("errorParticipation");
const errorVilles = document.getElementById("errorVilles");
const errorCondition = document.getElementById("errorCondition");

//RegExp
/*
const myRegExp = /^[a-zA-Z-\s]{2,}$/;
const emailRegExp = /[a-zA-Z0-9-]@[a-z.]/;
const naissanceRegExp = /[0-9]/;
const participationRegExp = /^[0-9]{1,}$/;
*/

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


/*

PSEUDO CODE FORMULAIRE

1- on définis comme variable chaque champs de formulaire (exemple: champs nom = varNomForm)


2- créer un regex pour chaque type de formulaire

3- Créer un tableau de type BOOLEAN 
    3.1- relier chaque champs de formulaire à un indexe de tableau

4- la page ne doit PAS s'actualiser

5- on créer un message d'erreur unique pour chaque champs de formulaire (1 seul message d'erreur par champs)

6- créer une fonction générale qui au moment du submit va utiliser des sous-fonction pour la vérifications des champs
    6.1- cette fonction remplis un tableau de type BOOLEAN avec soit TRUE ou FALSE aprés varification des sous fonctions
    6-2- les indexes du tableau sont relier a un champ de formulmaire unique (ex: champs prenom -> index 0, champs nom -> index 1 etc...)

7- créer les sous fonctions de vérification
    7.1- La fonction vérifie l'exactitude d'un formulaire par rapport à un REGEX définis au préalable
    7.2- la fonction doit retourner TRUE ou FALSE a la fonction qui est étape 6

8- créer une fonction d'appel de message d'erreur qui affiche un message d'erreur sous les champs incorecte OU vide
    8.1- parcourt le tableau remplis et affiche le message d'erreur sous le(s) champs incorrectes ou vide
    8.2- SI le formulaire est entierement TRUE ALORS afficher message de confirmation

9- lancer l'etape de vérification au moment du submit (au moment du clique sur "c'est partie" lancer la fonction Etape 4)


10 -etape finale: un message d'erreur s'affiche sous chaque champs de formulaire non remplis ou invalide OU message de confirmation si tout est ok

*/

//Mes variables
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

//Mes RegExp
    const textRegExp = /^[a-zA-Z-\s]{2,}$/;
    const RegExpEmail = /[a-zA-Z0-9-]@[a-z.]/;
    const RegExpNumber = /[0-9]/;

//Mon tableau
   const arrayBoolean = [];

//Mes messages d'erreurs
    const msgErrFirst = errorFirst.innerHtml = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    const msgErrSecond = errorSecond.innerHtml = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    const msgErrEmail = errorEmail.innerHtml = "Veuillez devez entrer une adresse mail.";
    const msgErrNaissance = errorNaissance.innerHtml = "Vous devez entrer votre date de naissance.";
    const msgErrParticipation = errorParticipation.innerHtml = "Veuillez entrer une valeur numérique entière.";
    const msgErrVilles = errorVilles.innerHtml = "Vous devez choisir une option.";
    const msgErrCondition = errorCondition.innerHtml = "Vous devez vérifier que vous acceptez les termes et conditions.";
//fonction submit
document.forms["reserve"].addEventListener("submit", function(e) {
    prenom();
    arrayBoolean[0] = prenom(myName);
    console.log(prenom(myName));

    nom();
    arrayBoolean[1] = nom(mySecond);
    console.log(nom(mySecond));

    email();
    arrayBoolean[2] = email(myEmail);
    console.log(email(myEmail));

    naissance();
    arrayBoolean[3] = naissance(myNaissance);
    console.log(naissance(myNaissance));

    participation();
    arrayBoolean[4] = participation(myParticipation);
    console.log(participation(myParticipation));

    ville();
    arrayBoolean[5] = ville();
    console.log(ville());

    condition();
    arrayBoolean[6] = condition(checkbox1);
    console.log(condition(checkbox1));
    console.log(arrayBoolean);

    scrollArray(arrayBoolean);
    e.preventDefault();
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

function messagePrenom() {
        if (arrayBoolean[0] == true) {
        }else {
            msgErrFirst
            errorFirst.style.background = 'red'
            console.log("non " + arrayBoolean[0])
        }
};

function messageNom() {
        if (arrayBoolean[1] == true) {
        }else {
            msgErrSecond
            errorSecond.style.background = 'red'
            console.log("non " + arrayBoolean[1])
        }
};

function messageEmail() {
        if (arrayBoolean[2] == true) {
        }else {
            msgErrEmail
            errorEmail.style.background = 'red'
            console.log("non " + arrayBoolean[2])
        }
};

function messageNaissance() {
        if (arrayBoolean[3] == true) {
        }else {
            msgErrNaissance
            errorNaissance.style.background = 'red'
            console.log("non " + arrayBoolean[3])
        }
};

function messageParticipation() {
        if (arrayBoolean[4] == true) {
        }else {
            msgErrParticipation
            errorParticipation.style.background = 'red'
            console.log("non " + arrayBoolean[4])
        }
};

function messageVille() {
        if (arrayBoolean[5] == true) {
        }else {
            msgErrVilles
            errorVilles.style.background = 'red'
            console.log("non " + arrayBoolean[5])
        }
};

function messageCondition() {
        if (arrayBoolean[6] == true) {
        }else {
            msgErrCondition
            errorCondition.style.background = 'red'
            console.log("non " + arrayBoolean[6])
        }
};







    










                                                                        // Fonction qui fonctionne
/*
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
};*/