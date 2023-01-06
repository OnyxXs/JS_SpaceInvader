let container = document.querySelector(".grille");
let direction = 1;
var incr = 0;
const aliens = [];

// Position départ joueur
var tireurPosition = 229;

//initialisation tableau des aliens
var incr = 0;
for (i=1; i<53; i++){
    if (i >= 1 && i<=12){
        aliens.push(i);
    } 
    if (i >= 21 && i<=32){
        aliens.push(i);
    } 
    if (i >= 41 && i<=52){
        aliens.push(i);
    }
    console.log(aliens);
}

    
    for (let i=0; i<240; i++){
        const bloc = document.createElement('div');
                    
        if (incr==0) {
            bloc.className = 'start';
        }
        if (incr==19){
            bloc.className = 'end';
        }
            container.appendChild(bloc);

        incr++;
        if (incr==20){
            incr=0;
        }
         //console.log(i);
    }
    
        
    //obtenir tous les elements de la grille
    const touteslesdivs=Divs= document.querySelectorAll(".grille div");
    
    aliens.forEach((alien) => {
        console.log(alien);
        alien = 0;
    });
    //class des div aliens 
    aliens.forEach(invader => {
        touteslesdivs[invader].classList.add('alien');
    })
    //console.log(aliens);
    var fromLeft     = true;
    var fromRight    = true;

   // fonction déplacement toute les secondes grace à setintervalle +  for sur les aliens pour modifier leurs valeurs (+ 1)
    function deplacement(){
        aliens.forEach(invader => {
            touteslesdivs[invader].classList.remove('alien');
        })

        for(i=0;i<aliens.length;i++){
            if (touteslesdivs[aliens[i]].classList.contains('end')){
                if (fromLeft == true){
                    direction = 20;
                    fromLeft = false;
                    }
                else {
                    direction = -1;
                    fromLeft = true;
                }
          }
          if (touteslesdivs[aliens[i]].classList.contains('start')){
            if (fromRight == true){
                direction = 20;
                fromRight = false;
                }
            else {
                direction = +1;
                fromRight = true;
            }
      }
        }

        for(i=0;i<aliens.length;i++){
            aliens[i]+=direction;
            if ( aliens[i] == tireurPosition){
                touteslesdivs[tireurPosition].classList.remove('tireur');
                clearInterval(invaderId);
                console.log("fin de jeu")
                //faire le game over    
                const reponse = confirm("Voulez vous rejouer ?");
    
                if (reponse) {
                    window.location.reload();
                } else {
                    alert("Cancel was pressed");
                }
                
            }
        }

        aliens.forEach(invader => {
            touteslesdivs[invader].classList.add('alien');
        })
    }

    // Compteur
    function Compteur_ennemy(){
        document.getElementById('idUnique').innerHTML = aliens.length;
    }
    if (Compteur_ennemy == 0){
        alert("Félicitation ! Vous avez vaincu l'ennemi !");
    }
    // Ajout vaisseau joueur
    touteslesdivs[tireurPosition].classList.add('tireur');


    invaderId = setInterval(deplacement, 1000);
    setInterval(Compteur_ennemy,1000);  