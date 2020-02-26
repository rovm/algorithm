/* 2020 - 02 - 26
* 문자열 다루기 기본
*/

function solution(s) {
    return /^\d{4}$|^\d{6}$/.test(s) ? true : false;
}
