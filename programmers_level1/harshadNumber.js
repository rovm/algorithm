/* 2020 - 02 - 21
* 하샤드 수
*/

function solution(x) {
    var y = x.toString().split('').reduce((a,b) => parseInt(a)+parseInt(b))

    return x % y == 0 ? true : false;
}
