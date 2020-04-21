/* 2020 - 02 - 26
* 서울에서 김서방 찾기
*/

function solution(seoul) {
    var answer =  seoul.findIndex(e => e === "Kim");

    return "김서방은 " + answer + "에 있다";
}
