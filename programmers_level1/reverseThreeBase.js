/* 2020 - 11 - 06
* 2016년
*/

function solution(n) {
    var answer = '';

//     내 풀이
//     while(n > 0){
//         answer += n%3
//         n = parseInt(n/3)
//     }

//     return answer.split('').reverse().reduce((sum,v,idx)=>{
//         return sum = sum + (Math.pow(3, idx) * v)
//     },0);


//  다른사람 풀이
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}
