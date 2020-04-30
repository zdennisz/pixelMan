import React, { useState, useEffect,useRef } from 'react';
import './GameInit.css'
import useKeyPress from './useKeyPress';
import soundTrack from './soundTrack.mp3'
export  const GameInit=(props)=>{
    const width= window.innerWidth/1.5;
    const height=window.innerHeight;
    const ratio=window.devicePixelRatio || 1;

var canvasPointer;
const [ musicPlay,setMusicPlay]=useState(1);
const [screen,setScreen]=useState({
    width: width,
    height: height,
    ratio: ratio
});
const wKeyPressFunc=()=>{
    console.log("Go Up");
    }

const aKeyPressFunc=()=>{
    console.log("Go Left");
}

const sKeyPressFunc=()=>{
    console.log("Go Down");
}
const dKeyPressFunc=()=>{
    console.log("Go Right");
}

const up=useKeyPress('w',wKeyPressFunc);
const down=useKeyPress('s',sKeyPressFunc);
const left=useKeyPress('a',aKeyPressFunc);
const right=useKeyPress('d',dKeyPressFunc);
const canvasRef=useRef(null);
var ctx;

function update(){
console.log("Main update loop")
//will need to update the main game loop here
}

//start the background music - done
//set up the amount of lives left - done
//init the gameboard - done
//catch key movement -done

useEffect(()=>{
//componentMount
turnMusicOn(soundTrack);
initGameBoard(ctx,canvasRef);
requestAnimationFrame(()=>update())

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