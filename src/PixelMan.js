import React, { useState } from 'react';
import './PixelMan.css'
import GameInit from './GameInit'
export const PixelManMain = (props) => {
    const [startGame, setStartGame] = useState(0);

    const handleStartButton = () => {
        setStartGame(1);
    }

    return (
        <div>
            <div className="mainContainer">
                {startGame ?
                    <GameInit />
                    :
                    <div className="eightbit-btn" onClick={handleStartButton}>Start Game</div>

                }
            </div>
        </div>);
}


export default PixelManMain;