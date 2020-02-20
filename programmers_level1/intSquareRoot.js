/* 2020 - 02 - 20
* 정수 제곱근 판별
*/

function solution(n) {
    var num = Math.sqrt(n)
    return Number.isInteger(num) ? Math.pow(num+1,2) : -1;
}
