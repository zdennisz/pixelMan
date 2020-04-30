import { useState, useEffect } from 'react';

export const useKeyPress=(keyToDetec,funcToDo)=>{
const [keyPressed,setKeyPressed]=useState(false);

const downHandler=({key})=>{
    if(key===keyToDetec){
        setKeyPressed(true);
        funcToDo();
    }
}

const upHandler=({key})=>{
if(key===keyToDetec){
    setKeyPressed(false);
   
}
}
useEffect(()=>{

window.addEventListener('keydown',downHandler);
window.addEventListener('keyup',upHandler);
return ()=>{
    window.removeEventListener('keydown',downHandler);
    window.removeEventListener('keyup',upHandler);
};

},[]);

}
export default useKeyPress;