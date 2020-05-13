export  function checkCollision(obj1, obj2) {
    let vx = obj1.position.x - obj2.position.x;
    let vy = obj1.position.y - obj2.position.y;
    let length = Math.sqrt(vx * vx + vy * vy);
    if (length < obj1.radius + obj2.radius) {
        return true;
    }else{
        return false;
    }
}

export  function checkDistance(obj1, obj2,radius) {
    let vx = obj1 - obj2;
    let vy = obj1 - obj2;
    let length = Math.sqrt(vx * vx + vy * vy);
    if (length < 2*radius) {
        return true;
    }else{
        return false;
    }
}
