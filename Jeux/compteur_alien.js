function countAlien() {
    // Récupération des div
    const divElements = document.getElementsByTagName('div');

    // initialisation du compteur
    let nb_alien = 0;

    // vérifie si les divs possèdent la classe "alien"
    for (const div of divElements) {
      if (div.classList.contains('alien')) {
        nb_alien++;
      }
    }
    
    // On retourne le nombre de divisions contenant la classe "alien"
    return nb_alien;
  }