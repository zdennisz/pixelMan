import getMonster from './constants'
const minDistanceFromEdge=32;

function createMonster(height, width) {

    //create position according to game screen
    var monsterPic = new Image(16, 16);
    monsterPic.src = getMonster(Math.floor(Math.random() * 30));
    var posX=getRandomNumber(1,width-minDistanceFromEdge);
    var posY=getRandomNumber(1,height-minDistanceFromEdge);
    var monster = {
        position: {
            x: posX,
            y: posY
        }
        ,
        speed: 1.5,
        monsterImage: monsterPic,
        radius:16
    }

    return monster;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function monsterCreator(numOfMonsters, height, width) {

    var monsterPac = [];
    for (let j = 0; j < numOfMonsters; j++) {
        monsterPac[j] = createMonster(height, width);
    }

    return monsterPac;
}

export default monsterCreator;
