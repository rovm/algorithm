/* 2020 - 02 - 20
 * 수박수박수박수박수박수? */
function solution(n) {
    var answer = '';

    for(let i=0; i<n; i++){
        answer += i % 2 == 0 ? "수" : "박";
    }

    return answer;
}
