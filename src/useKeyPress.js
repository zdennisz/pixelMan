import { useState, useEffect } from 'react';

export const useKeyPress = (keyToDetec, executeCallBack) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = (e) => {

        if (e.key === keyToDetec) {
            setKeyPressed(true);
            executeCallBack();
        }

    }

    const upHandler = (e) => {
        if (e.key === keyToDetec) {
            setKeyPressed(false);

        }

    }

   
    useEffect(() => {

        window.addEventListener('keydown', downHandler);
       window.addEventListener('keyup', upHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };

    }, []);

}
export default useKeyPress;