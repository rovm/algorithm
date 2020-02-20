/* 2020 - 02 - 20
* 제일 작은 수 제거하기
*/

function solution(arr) {
    return arr.splice(arr.indexOf(Math.min.apply(null, arr)),1) > 0 ? arr : [-1];
}
