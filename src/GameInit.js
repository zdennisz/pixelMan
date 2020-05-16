import React, { useState, useEffect, useRef } from 'react';

import './GameInit.css'
import useKeyPress from './useKeyPress';
import monsterPacCreator from './MonsterCreator'
import { checkCollision } from './Helper'
var PixelSheera = require('./PixelSheera')
var MusicPlayer = require( './MusicPlayer' );
const width = window.innerWidth / 1.5;
const height = window.innerHeight / 1.5;
export const GameInit = (props) => {
    const ratio = window.devicePixelRatio || 1;
    var playMusic = 1;
    const [screen, setScreen] = useState({
        width: width,
        height: height,
        ratio: ratio
    });
    var MonsterPac = monsterPacCreator(3, screen.height, screen.width);


    function reDrawOnCanvas() {
        const context = canvasRef.current.getContext("2d", { alpha: false });
        context.fillStyle = '#8ED6FF';

        context.fillRect(0, 0, screen.width, screen.height);
        context.drawImage(PixelSheera.heroImage, PixelSheera.position.x, PixelSheera.position.y)
        MonsterPac.forEach(element => context.drawImage(element.monsterImage, element.position.x, element.position.y));
        MonsterPac.forEach(element => {
            if (checkCollision(element, PixelSheera)) {
                console.log("Collision detected")
            }
        })
        //each redraw should check if there is collision with helper func with all the mansterpac
    }

    const upKeyPressFunc = () => {
        if (PixelSheera.position.y >= 1) {
            PixelSheera.position.y = PixelSheera.position.y - PixelSheera.speed;
            reDrawOnCanvas();
        }
    }

    const leftKeyPressFunc = () => {
        if (PixelSheera.position.x >= 1) {
            PixelSheera.position.x = PixelSheera.position.x - PixelSheera.speed;
            reDrawOnCanvas();
        }
    }

    const downKeyPressFunc = () => {
        if (PixelSheera.position.y <= screen.height * screen.ratio - (PixelSheera.radius * 2)) {
            PixelSheera.position.y = PixelSheera.position.y + PixelSheera.speed;
            reDrawOnCanvas();

        }
    }
    const rightKeyPressFunc = () => {
        if (PixelSheera.position.x <= screen.width * screen.ratio - (PixelSheera.radius * 2)) {
            PixelSheera.position.x = PixelSheera.position.x + PixelSheera.speed;
            reDrawOnCanvas();


        }
    }

    const spaceKeyPressFunc = () => {
        if (playMusic) {
            MusicPlayer.pauseMusic();
            playMusic = 0;
        } else {
            playMusic = 1;
            MusicPlayer.playMusic();
        }
    }

    const numPadAddKeyPressFunc = () => {
        MusicPlayer.increaseVol();

    }
    const numPadSubtractKeyPressFunc = () => {
        MusicPlayer.decreaseVol();

    }


    useKeyPress('w', upKeyPressFunc);
    useKeyPress('s', downKeyPressFunc);
    useKeyPress('a', leftKeyPressFunc);
    useKeyPress('d', rightKeyPressFunc);
    useKeyPress('ArrowUp', upKeyPressFunc);
    useKeyPress('ArrowDown', downKeyPressFunc);
    useKeyPress('ArrowLeft', leftKeyPressFunc);
    useKeyPress('ArrowRight', rightKeyPressFunc);
    useKeyPress(' ', spaceKeyPressFunc);
    useKeyPress('+', numPadAddKeyPressFunc)
    useKeyPress('-', numPadSubtractKeyPressFunc)

    const canvasRef = useRef(null);
    var ctx;
    function update() {
        reDrawOnCanvas();
        //Main update loop
        requestAnimationFrame(() => { update() })
    }



    useEffect(() => {
        //componentMount
        MusicPlayer.setTrack();
        MusicPlayer.playMusic();
        initGameBoard(ctx, canvasRef);
        requestAnimationFrame(() => update())


    }, [])


    return (
        <div>
            <canvas ref={canvasRef} width={screen.width * screen.ratio} height={screen.height * screen.ratio} />
        </div>


    )

}



function initGameBoard(ctx, canvasRef) {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

}

export default GameInit;