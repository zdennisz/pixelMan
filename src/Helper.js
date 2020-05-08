export default function checkCollision(obj1,obj2){
let vx=obj1.position.x-obj2.position.x;
let vy=obj1.position.y-obj2.position.y;
let length=Math.sqrt(vx*vx+vy*vy);
if(length<obj1.radius+obj2.radius){
    return true;
}
}