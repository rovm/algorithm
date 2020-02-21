/* 2020 - 02 - 21
* 최대공약수와 최소공배수
*/

function solution(phone_number) {
    return "*".repeat(phone_number.length-4) + phone_number.substr(-4,4);
}
