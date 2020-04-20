/* 2020 - 04 - 20
* 최댓값과 최솟값
*/

function solution(s) {
    var arr = s.split(" ")
    return Math.min.apply(null, arr) +' ' + Math.max.apply(null, arr);
}
