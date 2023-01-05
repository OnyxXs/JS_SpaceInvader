function Player(tireurPosition) {

    this.pos = tireurPosition;
    
    this.moveUp = function() {
        this.pos[1] -= 20;
        // Monter
    };
    
    this.moveDown = function() {
        this.pos[1] += 20;
        // Descendre
    };
    
    this.moveLeft = function() {
        this.pos[0] -= 1;
        // Reculer
    };
    
    this.moveRight = function() {
        this.pos[0] += 1;
        // Avancer
    };

  }

  document.onkeydown = checkKey;

function checkKey(e) {
  
    e = e || window.event;
  
    if (e.keyCode == '38') {
        // Haut
        tireurPosition -= 20;
        if (tireurPosition < 180){
            tireurPosition += 20;
        }
        else{
            touteslesdivs[tireurPosition].classList.add('tireur');
            touteslesdivs[tireurPosition + 20].classList.remove('tireur');
        }
    }
    else if (e.keyCode == '40') {
        // Bas
        touteslesdivs[tireurPosition + 20].classList.add('tireur');
        touteslesdivs[tireurPosition].classList.remove('tireur');
        tireurPosition += 20;
    }
    else if (e.keyCode == '37') {
        // Gauche
        tireurPosition -= 1;
        if (tireurPosition < 180){
            tireurPosition += 1;
        }
        else if (tireurPosition == 199){
            tireurPosition += 1;
        }
        else if (tireurPosition == 219){
            tireurPosition += 1;
        }
        else{
            touteslesdivs[tireurPosition].classList.add('tireur');
            touteslesdivs[tireurPosition + 1].classList.remove('tireur');
        }
    }
    else if (e.keyCode == '39') {
        // Droite
        tireurPosition += 1;
        if (tireurPosition == 200){
            tireurPosition -= 1;
        }
        else if (tireurPosition == 220){
            tireurPosition -= 1;
        }
        else if (tireurPosition == 240){
            tireurPosition -= 1;
        }
        else{
            touteslesdivs[tireurPosition].classList.add('tireur');
            touteslesdivs[tireurPosition - 1].classList.remove('tireur');
        }
    }
  
}