import getMonster from './constants'
import {checkDistance} from './Helper'
const minDistanceFromEdge = 32;
var monsterRadius=16;
var monsterLocation = [];
function createMonster(height, width) {

    //create position according to game screen
    var monsterPic = new Image(16, 16);
    monsterPic.src = getMonster(Math.floor(Math.random() * 30));
    var posX = getRandomNumber(1, width - minDistanceFromEdge);
    var posY = getRandomNumber(1, height - minDistanceFromEdge);

    while (checkLocation(posX, posY) === true) {
        posX = getRandomNumber(1, width - minDistanceFromEdge);
        posY = getRandomNumber(1, height - minDistanceFromEdge);
    }
    monsterLocation.push({
        x: posX,
        y: posY
    })
    var monster = {
        position: {
            x: posX,
            y: posY
        }
        ,
        speed: 1.5,
        monsterImage: monsterPic,
        radius: monsterRadius
    }

    return monster;


}

function checkLocation(x, y) {
    var proximity=false;
    //found - true means there is another at location
    const found = monsterLocation.some(item => (item.x === x) && (item.y === y));
    if(!found){
         proximity=checkDistance(x,y,monsterRadius);
    }
    //if not found and proximity is OK means we can create the monster at this location
    if(!found&&!proximity)
    {
        return false;//return false to break the while loop
    }else{
        return true;
    }
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
