import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import './GameInit.css'
import useKeyPress from './useKeyPress';
import soundTrack from './soundTrack.mp3'
var PixelSheera = require('./PixelSheera')
export const GameInit = (props) => {
    const width = window.innerWidth / 1.5;
    const height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;

    const [musicPlay, setMusicPlay] = useState(1);
    const [screen, setScreen] = useState({
        width: width,
        height: height,
        ratio: ratio
    });

    function reDrawOnCanvas() {
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = '#8ED6FF';
        context.fillRect(0, 0, width, height);
        context.drawImage(PixelSheera.heroImage, PixelSheera.position.x, PixelSheera.position.y)
    }

    const upKeyPressFunc = () => {
        console.log(PixelSheera.position.y + ' up');
        if (PixelSheera.position.y >= 1) {
            PixelSheera.position.y = PixelSheera.position.y - PixelSheera.speed;
            reDrawOnCanvas();
        }
    }

    const leftKeyPressFunc = () => {
        console.log(PixelSheera.position.x + ' left');
        if (PixelSheera.position.x >= 1) {
            PixelSheera.position.x = PixelSheera.position.x - PixelSheera.speed;
            reDrawOnCanvas();
        }
    }

    const downKeyPressFunc = () => {
        console.log(PixelSheera.position.y + '  down');
        if (PixelSheera.position.y <= height) {
            PixelSheera.position.y = PixelSheera.position.y + PixelSheera.speed;
            reDrawOnCanvas();

        }
    }
    const rightKeyPressFunc = () => {
        console.log(PixelSheera.position.x + ' right');
        if (PixelSheera.position.x <= width) {
            PixelSheera.position.x = PixelSheera.position.x + PixelSheera.speed;
            reDrawOnCanvas();

        }
    }
    useKeyPress('w', upKeyPressFunc);
    useKeyPress('s', downKeyPressFunc);
    useKeyPress('a', leftKeyPressFunc);
    useKeyPress('d', rightKeyPressFunc);
    useKeyPress('ArrowUp', upKeyPressFunc);
    useKeyPress('ArrowDown', downKeyPressFunc);
    useKeyPress('ArrowLeft', leftKeyPressFunc);
    useKeyPress('ArrowRight', rightKeyPressFunc);

    const canvasRef = useRef(null);
    var ctx;
    function update() {
        console.log("Main update loop")

        if (ctx !== undefined) {
            // ctx.drawImage(,PixelSheera.position.x,PixelSheera.position.y)
        }
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = '#ffffff';
        context.fill();
        context.drawImage(PixelSheera.heroImage, PixelSheera.position.x, PixelSheera.position.y)
        //will need to update the main game loop here
        requestAnimationFrame(() => { update() })
    }

   
    
    useLayoutEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = '#8ED6FF';
        context.fillRect(0, 0, width, height);

        context.drawImage(PixelSheera.heroImage, PixelSheera.position.x, PixelSheera.position.y)
    })
    useEffect(() => {
        //componentMount
        turnMusicOn(soundTrack);
        initGameBoard(ctx, canvasRef);
        requestAnimationFrame(() => update())


    }, [])





    return (
        <div>
            <canvas ref={canvasRef} width={screen.width * screen.ratio} height={screen.height * screen.ratio} />
        </div>


    )

}



function setupAmountOfLives() {
    return Math.floor(Math.random() * 5) + 1;
}

function initPlayerPosition() {

}

function initEnemyPosition() {

}
function initGameBoard(ctx, canvasRef) {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

}

function turnMusicOn(url) {
    var audio = new Audio(url);
    audio.volume = 0.2;
    audio.play();
}

export default GameInit;