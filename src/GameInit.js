import React, { useState, useEffect, useRef } from 'react';
import {KeysInfo} from './KeysInfo'
import './GameInit.css'
import useKeyPress from './useKeyPress';
import monsterPacCreator from './MonsterCreator'
import { checkCollision } from './Helper'
import heroHit from './MusicResources/heroHit.wav'
var PixelSheera = require('./PixelSheera')
var MusicPlayer = require('./MusicPlayer');
const width = window.innerWidth / 1.5;
const height = window.innerHeight / 1.5;
const collisionTimeOut = 8;
export const GameInit = (props) => {
    const fps = 20;//limit fps to 50
    var playMusic = 1;//music flag 1-play 0-pause
    var collisionCounter = 0;//collision counter every 8 is a collision
    const ratio = window.devicePixelRatio || 1;    
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
                collisionCounter++;
                if (collisionCounter >= collisionTimeOut) {
                    heroHitSound();
                    collisionCounter = 0;
                }
            }
        })
        //each redraw should check if there is collision with helper func with all the mansterpac
    }

    const upKeyPressFunc = () => {
        if (PixelSheera.position.y >= 1) {
            PixelSheera.position.y = PixelSheera.position.y - PixelSheera.speed;
        }
    }

    const leftKeyPressFunc = () => {
        if (PixelSheera.position.x >= 1) {
            PixelSheera.position.x = PixelSheera.position.x - PixelSheera.speed;
        }
    }

    const downKeyPressFunc = () => {
        if (PixelSheera.position.y <= screen.height * screen.ratio - (PixelSheera.radius * 2)) {
            PixelSheera.position.y = PixelSheera.position.y + PixelSheera.speed;
        }
    }
    const rightKeyPressFunc = () => {
        if (PixelSheera.position.x <= screen.width * screen.ratio - (PixelSheera.radius * 2)) {
            PixelSheera.position.x = PixelSheera.position.x + PixelSheera.speed;
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
        setTimeout(function () {
            requestAnimationFrame(() => { update() })
            reDrawOnCanvas();
        }, 1000 / fps)
        //Main update loop 
    }

    function heroHitSound() {
        const hit = new Audio(heroHit);
        hit.volume = 0.3;
        hit.play();
    }


    useEffect(() => {
        //componentMount
        MusicPlayer.setTrack();
        MusicPlayer.playMusic();
        initGameBoard(ctx, canvasRef);
        requestAnimationFrame(() => update())


    }, [])


    return (
        <>
            <canvas ref={canvasRef} width={screen.width * screen.ratio} height={screen.height * screen.ratio} />
            <KeysInfo/>
        </>


    )

}



function initGameBoard(ctx, canvasRef) {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

}

export default GameInit;