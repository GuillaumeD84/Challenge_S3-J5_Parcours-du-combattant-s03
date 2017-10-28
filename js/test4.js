/*
 * 1. Dans #container, affiche l'heure à la seconde près.
 *    Sous le format : 11h 12m 06s
 * 2. Chaque seconde, l'heure doit être actualisée
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */

var test4 = {
  // hourContainer est notre 'DIV' où l'on affichera l'heure
  hourContainer: "",
  init: function() {
    test4.createContainer();

    // On fait un première affichage de l'heure car l'interval qui suit n'effectuera la fonction 'displayTime' qu'après la première seconde
    test4.displayTime();

    // On créé un interval qui executera chaque seconde la fonction 'displayTime'
    var myInterval = setInterval(test4.displayTime, 1000);
  },
  createContainer: function() {
    // On récupère notre 'DIV' dans test4.hourContainer et on créé un élément 'P'
    test4.hourContainer = document.getElementById("container");
    var myP = document.createElement("p");

    // Une petite classe pour exploiter plus facilement ce 'P'
    myP.classList.add("test4Hour");

    // On oubli pas d'inclure ce 'P' dans la 'DIV'
    test4.hourContainer.appendChild(myP);
  },
  // Créé un objet de type 'Date' et affiche l'heure
  displayTime: function() {
    var now = new Date();
    test4.hourContainer.textContent = now.getHours() + "h " + now.getMinutes() + "m " + now.getSeconds() + "s";
  }
}

test4.init();
