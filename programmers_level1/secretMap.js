/* 2020 - 02 - 21
* [1차] 비밀지도
*/

function solution(n, arr1, arr2) {
    var answer = [];

    for(var i=0; i<n; i++){
        answer.push(pad((arr1[i] | arr2[i]).toString(2),n).replace(/1/gi,"#").replace(/0/gi," "));
    }
    return answer;
}

function pad(n, strlen) {
  n = n + '';
  return n.length >= strlen ? n : new Array(strlen - n.length + 1).join('0') + n;
}
