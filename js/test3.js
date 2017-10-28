/*
 * 1. L'utilisateur tape un nombre dans chaque input
 * 2. Chaque fois que l'on tape au clavier dans l'un des deux input
 *    et si les deux inputs sont remplis, on additionne les deux nombres
 *    et on affiche le résultat dans #result
 */

var test3 = {
  // Contient notre 'DIV' result
  container,
  // Contient le 'P' que l'on placera dans la 'DIV'
  result,
  // Contient les 2 champs texte dans un tableau
  textValues: "",
  init: function() {
    test3.createEvent();
    test3.createResultContainer();
  },
  // On créé cette fois ci deux events liés aux champs texte de type 'input'. Un event aura lieu lorsque l'utilisateur tapera dans l'un de ces deux champs
  createEvent: function() {
    var textField1 = document.getElementById("input1");
    textField1.addEventListener("input", test3.testUserInput);

    var textField2 = document.getElementById("input2");
    textField2.addEventListener("input", test3.testUserInput);
  },
  // Créé un 'P', le place dans notre 'DIV' result puis lie test3.result à ce 'P'. Cela permettra de facilement mettre à jour sa valeur
  createResultContainer: function() {
    // On récupère notre 'DIV' et on créé un élément 'P'
    test3.container = document.getElementById("result");
    var myP = document.createElement("p");

    // Une petite classe pour exploiter plus facilement ce 'P'
    myP.classList.add("test3SumResult");

    // On oubli pas d'inclure ce 'P' dans la 'DIV'
    test3.container.appendChild(myP);

    // On lie test3.result à la 'P' fraîchement créé qui contient le résultat de l'addition afin de facilement modifier sa valeur
    test3.result = document.getElementsByClassName("test3SumResult");

    // Idem qu'avec test3.result mais avec un querySelectorAll nous renvoi les deux champs texte dans un tableau
    test3.textValues = document.querySelectorAll("input[type='text']");
  },
  // Cette fonction à pour but d'analyser les champs texte
  testUserInput: function(evt) {
    // console.log(evt.target.id + " est en train d'évoluer !!!");

    // Si un des deux champs est vide on ne test rien
    if (test3.textValues[0].value != "" && test3.textValues[1].value != "") {
      // Si au moins un des deux n'est pas un nombre il y a erreur
      if (isNaN(parseInt(test3.textValues[0].value)) || isNaN(parseInt(test3.textValues[1].value))) {
        console.error("Au moins l'un des deux champs est vide ou ne contient pas un nombre !");
      }
      // Si tout est ok on lance le calcul
      else {
        test3.displayResult(test3.textValues);
      }
    }
  },
  // Effectue l'addition
  displayResult: function(numbersValues) {
    test3.result[0].textContent = parseInt(numbersValues[0].value) + parseInt(numbersValues[1].value);
  }
}

test3.init();
