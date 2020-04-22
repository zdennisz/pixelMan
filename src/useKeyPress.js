import { useState, useEffect } from "react";



export function useKeyPress(targetKey){
const [keyPressed,setKeyPressed]=useState(false);

const downHandler=({key})=>{
    if(key===targetKey){
        setKeyPressed(true);
        console.log('Pressed');
    }
}

const upHandler=({key})=>{
if(key===targetKey){
    setKeyPressed(false);
    console.log("Not Pressed");
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