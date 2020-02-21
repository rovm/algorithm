/* 2020 - 02 - 21
* 평균 구하기
*/

function solution(arr) {
    return arr.reduce((tot,e) => tot + e, 0) / arr.length;
}
