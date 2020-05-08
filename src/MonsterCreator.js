import getMonster from './constants'
const minDistanceFromEdge=32;
const offsetFromBothSides=64;
function createMonster(height, width) {

    //create position according to game screen
    var monsterPic = new Image(16, 16);
    monsterPic.src = getMonster(Math.floor(Math.random() * 30));
    var posX = minDistanceFromEdge+Math.floor(Math.random() * (height-offsetFromBothSides)) + 1
    var posY = minDistanceFromEdge+Math.floor(Math.random() * (width-offsetFromBothSides)) + 1
    var monster = {
        position: {
            x: posX,
            y: posY
        }
        ,
        speed: 1,
        monsterImage: monsterPic,
        radius:16
    }

    return monster;
}


export function monsterCreator(numOfMonsters, height, width) {

    var monsterPac = [];
    for (let j = 0; j < numOfMonsters; j++) {
        monsterPac[j] = createMonster(height, width);
    }

    return monsterPac;
}

export default monsterCreator;
