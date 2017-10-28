/*
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boite de dialogue
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boite de dialogue
 * 3. Additionner les deux nombres
 * 4. Afficher le résultat dans #container
 */

var test1 = {
  // Nombre total de nombre à ajouter
  maxNumber: 2,
  // Somme de tous les nombres
  total: 0,
  init: function() {

    // On anticipe sur le fait que souhaite additionner plus de 2 nombre et donc on met un for qui s'adapte en fonction de la valeur de test1.maxNumber
    for (var indexNumber = 1; indexNumber <= test1.maxNumber; indexNumber++) {
      test1.total += test1.dialogBox(indexNumber);
    }

    // Permet d'afficher le résultat dans la page
    test1.displayResult();

  },
  // Affiche un prompt à l'utilisateur qui attend un nombre et qui le retourne
  dialogBox: function(currentIndex) {
    var userNumber = 0;

    do {
      // On indique à l'utilisateur s'il n'a pas rentré un nombre
      if (isNaN(parseInt(userNumber))) alert("On attend un nombre !");

      if (currentIndex === 1) userNumber = prompt("Indiquer le 1er nombre à additionner :");
      else userNumber = prompt("Indiquer le " + currentIndex + "ème nombre à additionner :");
    }
    // Tant que la valeur rentrée n'est pas un nombre on boucle
    while (isNaN(parseInt(userNumber)));

    // On retourne le nombre de l'utilisateur
    return parseInt(userNumber);
  },
  // Ajoute dans notre 'div' un 'p' avec le résultat de la somme
  displayResult: function() {
    // On récupère notre 'DIV' et on créé un élément 'P'
    var myDiv = document.getElementById("container");
    var myP = document.createElement("p");

    // Puis on renseigne dans notre 'P' le résultat de la somme
    myP.textContent = "Le résultat de la somme est : " + test1.total;
    // Une petite classe au cas ou l'on souhaiterai exploiter plus facilement ce 'P' dans le futur
    myP.classList.add("test1SumResult");

    // On oubli pas d'inclure ce 'P' dans la 'DIV'
    myDiv.appendChild(myP);
  }
}

setTimeout(test1.init, 500);
