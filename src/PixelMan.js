import React, { useState } from 'react';
import './PixelMan.css'
import GameInit from './GameInit'
export const PixelManMain = (props) => {
    const [startGame, setStartGame] = useState(0);

    const handleStartButton = () => {
        setStartGame(1);
    }

    return (
        <>
            <div className="mainContainer">
                {startGame ?
                    <GameInit />
                    :
                    <div className="eightbit-btn start-game_buttonLocation" onClick={handleStartButton}>Start Game</div>

                }
            </div>
        </>
        );
}


export default PixelManMain;