/* 2020 - 03 - 31
* 나누어 떨어지는 숫자 배열
*/

function solution(arr, divisor) {
    var answer = [];
    arr.map(v => v % divisor == 0 && answer.push(v))

    return answer.length > 0 ? answer.sort((a,b) => a-b) : [-1];
}
