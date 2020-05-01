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

const keyHoldHandler=(e)=>{
   
    if(e.key===keyToDetec){
        setKeyPressed(true);
        funcToDo();
    }
}
useEffect(()=>{

window.addEventListener('keydown',downHandler);
window.addEventListener('keyup',upHandler);
window.addEventListener('keydown',keyHoldHandler)
return ()=>{
    window.removeEventListener('keydown',downHandler);
    window.removeEventListener('keyup',upHandler);
    window.removeEventListener('keydown',keyHoldHandler);
};

},[]);

}
export default useKeyPress;