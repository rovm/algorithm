/* 2020 - 04 - 20
* JadenCase 문자열 만들기
*/

function solution(s) {
    s = s.toLowerCase()
    var answer = s.split(" ").map(s => {
        let arr = s.split("")
        if(arr[0] != null)
           arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }).join(' ');

    return answer;
}
