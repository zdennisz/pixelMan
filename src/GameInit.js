import React, { useState, useEffect } from 'react';
import './GameInit.css'
import soundTrack from './soundTrack.mp3'
export  const GameInit=(props)=>{
const [ musicPlay,setMusicPlay]=useState(1);
var livesMeter;
var gameBoard;

//start the background music
//set up the amount of lives left
//init the gameboard
//init the player position
//init the enemies position
useEffect(()=>{
//componentMount
turnMusicOn(soundTrack);

gameBoard=initGameBoard();
initEnemyPosition();
initPlayerPosition();
livesMeter=setupAmountOfLives();
},[])





return(
<div>

{/* actuall game */}

</div>


)

}




function setupAmountOfLives(){
  return  Math.floor(Math.random() * 5) + 1;
}

function initPlayerPosition(){

}

function initEnemyPosition(){

}

function initGameBoard(){
var canvasDraw;

return canvasDraw;
}
function turnMusicOn(url){
    var audio=new Audio(url);
    audio.volume=0.2;
    audio.play();
}
export default GameInit;