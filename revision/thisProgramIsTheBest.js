/* eslint-disable */
function thisProgramIsTheBest(obj1,obj2,cbFun){
    if(obj1.age === obj2.age){
        return "same age"
    }else{
        cbFun(obj1,obj2){
            return "diffent age";
        }
    }

}
