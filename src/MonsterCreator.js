import getMonster from './constants'

function createMonster(height, width) {

    //create position according to game screen
    var monsterPic = new Image(16, 16);
    monsterPic.src = getMonster(Math.floor(Math.random() * 30));
    var posX = Math.floor(Math.random() * height) + 1
    var posY = Math.floor(Math.random() * width) + 1
    var monster = {
        position: {
            x: posX,
            y: posY
        }
        ,
        speed: 1,
        monsterImage: monsterPic
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
