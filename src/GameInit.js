import React, { useState, useEffect,useRef } from 'react';
import './GameInit.css'
import soundTrack from './soundTrack.mp3'
export  const GameInit=(props)=>{

var canvasPointer;
const [ musicPlay,setMusicPlay]=useState(1);
const [screen,setScreen]=useState({
    width: window.innerWidth/1.5,
    height: window.innerHeight,
    ratio: window.devicePixelRatio || 1
});
const canvasRef=useRef(null);
var ctx;


//start the background music - done
//set up the amount of lives left - done
//init the gameboard - done

useEffect(()=>{
//componentMount
turnMusicOn(soundTrack);
initGameBoard(ctx,canvasRef);
},[])





return(
<div>
    <canvas ref={canvasRef}  width={screen.width*screen.ratio}height={screen.height*screen.ratio}/>
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
function  initGameBoard(ctx,canvasRef){
    const canvas=canvasRef.current;
    ctx=canvas.getContext('2d');
}

function turnMusicOn(url){
    var audio=new Audio(url);
    audio.volume=0.2;
    audio.play();
}
export default GameInit;