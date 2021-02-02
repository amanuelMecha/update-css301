/* eslint-disable */
function sortThis(x,y,z){
    let output =[];
    if(x>=y && x>=z){
        output[2] =x;
        if(y>=z){
            output[1]=y;
            output[0]=z;            
        }else{
            output[1]=z;
            output[0]=y;
        }
    }else if(y>=x && y>=z){
        output[2]=y;
        if(x>=z){
            output[1]=x;
            output[0]=z;
        }else {
            output[1]=z;
            output[0]=x;
        }
    }else if(z>=x && z>=y){
        output[2]=z;
        if(x>=y){
            output[1]=x;
            output[0]=y;
        }else {
            output[1]=y;
            output[0]=x;
        }
    }
    return output;
}
console.log(sortThis(5,3,2))