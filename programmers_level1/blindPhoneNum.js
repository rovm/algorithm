/* 2020 - 02 - 21
* 핸드폰 번호 가리기
*/

function solution(phone_number) {
    return "*".repeat(phone_number.length-4) + phone_number.substr(-4,4);
}
