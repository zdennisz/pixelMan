import React, { useState } from 'react';
import './PixelManMain.css'
import GameInit from'./GameInit'
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
                <div className="buttonStartGame" onClick={handleStartButton}><p className="buttonName">Dive In</p></div>

            }
            </div>
        </div>);
}


export default PixelManMain;