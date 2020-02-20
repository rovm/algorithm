/* 2020 - 02 - 20
* 자연수 뒤집어 배열로 만들기
*/

//방법 1
function solution(n) {
    var answer = [];
    n = n.toString();
    var len =  n.length-1;

    for(let i=len; i>=0; i--){
        answer.push(parseInt(n.charAt(i)));
    }
    return answer;
}

//방법 2
function solution2(n)
{
  return String(n).split('').reverse().map(v => +v);
}
