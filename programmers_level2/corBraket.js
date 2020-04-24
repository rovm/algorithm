/* 2020 - 04 - 24
* 올바른 괄호
*/

function solution(s){
    var arr = s.split("");
    var t = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "("){
            t++;
        } else{
            t--;
        }
        if(t < 0){
            break;
        }
    }
    
    return t == 0 ? true : false;
}
