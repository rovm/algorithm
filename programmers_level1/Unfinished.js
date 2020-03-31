/* 2020 - 03 - 31
* 완주하지 못한 선수
*/

function solution(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();

    answer = participant.find((e, i) => e != completion[i]);

    return answer;
}
