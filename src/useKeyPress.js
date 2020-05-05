import { useState, useEffect } from 'react';

export const useKeyPress=(keyToDetec,executeCallBack)=>{
const [keyPressed,setKeyPressed]=useState(false);

const downHandler=(e)=>{
    if(e.key===keyToDetec){
        setKeyPressed(true);
        executeCallBack();
    }
}

const upHandler=(e)=>{
if(e.key===keyToDetec){
    setKeyPressed(false);
  
}
}

const keyHoldHandler=(e)=>{
   
    if(e.key===keyToDetec){
        setKeyPressed(true);
        executeCallBack();
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