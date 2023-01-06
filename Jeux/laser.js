const SPACE_KEY = "Space";

document.addEventListener("keydown", function (event) {
    if (event.code === SPACE_KEY) {
        console.log("Missile lancé !");
        touteslesdivs[tireurPosition - 20].classList.add('laser');
    }
});

function avancerMissiles() {
    for (i = 0; i < touteslesdivs.length; i++) {
        if (!isLaser(i)) {
            continue;
        }

        const nextLaserPosition = getNextLaserPosition(i);

        if (isAlien(nextLaserPosition)) {
            deleteAlienAtPosition(nextLaserPosition);
            deleteLaserAtPosition(i);
            continue;
        }

        moveLaserForward(i);

        // si ya une div qui contient la class laser alors on ajoute class laser a la case -20 du dessus
        // et on supprime la case qui avait cette case laser de base
        // récupérer la div qu'on a trouvé qnd on a parcouru le tableau

    }
}
const ALIEN_CLASS = 'alien';
const LASER_CLASS = 'laser';

function deleteLaserAtPosition(position) {
    deleteClassAtPosition(position, LASER_CLASS);
}

function deleteAlienAtPosition(position) {
    deleteClassAtPosition(position, ALIEN_CLASS);
}

function hasClassAtPosition(position, classname) {
    return getDivAtPosition(position)?.classList.contains(classname);
}

function isLaser(position) {
    return hasClassAtPosition(position, LASER_CLASS);
}

function isAlien(position) {
    return hasClassAtPosition(position, ALIEN_CLASS);
}

function getNextAlienLaserPosition(position) {
    return position + 20;
}
function getNextLaserPosition(position) {
    return position - 20;
}

function deleteClassAtPosition(position, classname) {
    const div = getDivAtPosition(position);
    div?.classList.remove(classname)
}

function addClassAtPosition(position, classname) {
    const div = getDivAtPosition(position);
    div?.classList.add(classname)
}

function getDivAtPosition(position) {
    return touteslesdivs[position];
}

function moveLaserForward(position) {
    const nextPosition = getNextLaserPosition(position);
    deleteClassAtPosition(position, 'laser');
    addClassAtPosition(nextPosition, 'laser');
}

function checkHits() {
    for (let i = 0; i < touteslesdivs.length; i++) {
        if (touteslesdivs[i].classList.contains('laser') && touteslesdivs[i].classList.contains('alien')) {
            touteslesdivs[i].classList.remove('alien');
            let index = aliens.indexOf(i);
            if (index > -1) {
                aliens.splice(index, 1);
            }
        }
    }
    console.log("dead")
}

setInterval(avancerMissiles, 500)