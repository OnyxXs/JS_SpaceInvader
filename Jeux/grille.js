var container = document.querySelector(".grille");
var incr = 0;

//initialisation tableau des aliens
var aliens = [];
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
}
console.log(aliens);

//Création de la grille  
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
 console.log(i);
}