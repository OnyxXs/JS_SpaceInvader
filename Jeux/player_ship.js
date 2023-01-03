function Player(position) {

    this.pos = position;
    
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
      }
      else if (e.keyCode == '40') {
          // Bas
      }
      else if (e.keyCode == '37') {
         // Gauche
      }
      else if (e.keyCode == '39') {
         // Droite
      }
  
  }