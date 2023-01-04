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
        touteslesdivs[tireurPosition - 20].classList.add('tireur');
        touteslesdivs[tireurPosition].classList.remove('tireur');
        tireurPosition -= 20;
    }
    else if (e.keyCode == '40') {
        // Bas
        touteslesdivs[tireurPosition + 20].classList.add('tireur');
        touteslesdivs[tireurPosition].classList.remove('tireur');
        tireurPosition += 20;
    }
    else if (e.keyCode == '37') {
        // Gauche
        touteslesdivs[tireurPosition - 1].classList.add('tireur');
        touteslesdivs[tireurPosition].classList.remove('tireur');
        tireurPosition -= 1;
    }
    else if (e.keyCode == '39') {
        // Droite
        touteslesdivs[tireurPosition + 1].classList.add('tireur');
        touteslesdivs[tireurPosition].classList.remove('tireur');
        tireurPosition += 1;
    }
  
}