/*
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 */

var test2 = {
  init: function() {
    test2.createEvent();
  },
  // On créé un event sur le bouton de type 'click' qui déclenchera la fonction test2.testTextFields
  createEvent: function() {
    var submitButton = document.getElementsByTagName("button");
    submitButton[0].addEventListener("click", test2.testTextFields);
  },
  // Cette fonction à pour but d'analyser les champs texte
  testTextFields: function(evt) {
    // On désactive le rechargement de la page lors de l'action sur le bouton
    evt.preventDefault();

    // un querySelectorAll nous renvoi les deux champs texte dans un tableau
    var textValues = document.querySelectorAll("input[type='text']");

    // On test si au moins un des deux champs ne contient pas un nombre
    if (isNaN(parseInt(textValues[0].value)) || isNaN(parseInt(textValues[1].value))) alert("Au moins l'un des deux champs est vide ou ne contient pas un nombre !");
    // Si tout est ok on lance le calcul + affichage
    else test2.addNumberFromTextFields(textValues);
  },
  // Cette fonctionne additionne 2 nombres et affiche le résultat dans un 'P'
  addNumberFromTextFields: function(numbersValues) {
    // On récupère notre 'DIV' et on créé un élément 'P'
    var myDiv = document.getElementById("result");
    var myP = document.createElement("p");

    // On additionne les 2 nombres
    var result = parseInt(numbersValues[0].value) + parseInt(numbersValues[1].value);

    // Puis on renseigne dans notre 'P' le résultat de la somme
    myP.textContent = "= " + result;
    // Une petite classe au cas ou l'on souhaiterai exploiter plus facilement ce 'P' dans le futur
    myP.classList.add("test2SumResult");

    // On oubli pas d'inclure ce 'P' dans la 'DIV'
    myDiv.appendChild(myP);
  }
}

test2.init();
