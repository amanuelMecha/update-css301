function maxOfThree(x,y,z){
    let max;
    if(x>=y && x>=z){
        max =x;
    }else if(y>=x && y>=z){
        max = y;
    }else{
        max=z
    }
    return max;

}
console.log(maxOfThree(88,15,156));

