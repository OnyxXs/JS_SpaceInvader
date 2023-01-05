document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      console.log("Missile lancé !");
      touteslesdivs[tireurPosition - 20].classList.add('laser');
    }
  });


function lancerMissile() {
    for( i=0;i < touteslesdivs.length; i++){
        if( touteslesdivs[i].classList.contains('laser')){
            touteslesdivs[tireur]
            // si ya une div qui contient la class laser alors on ajoute class laser a la case -20 du dessus
            // et on supprime la case qui avait cette case laser de base
            // récupérer 
        }
    }
}
setInterval(lancerMissile, 1000)