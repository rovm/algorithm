/* 2020 - 11 - 06
* 내적
*/

function solution(a, b) {
    return a.reduce((sum,v,idx) => {
       return sum = sum + (v*b[idx])
    },0);
}
