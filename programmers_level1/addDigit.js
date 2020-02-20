/* 2020 - 02 - 20
* 자릿수 더하기
*/

//방법 1
function solution(n)
{
  var answer = 0;
  n = n.toString();
  var nLen = n.length;

  for(let i=0; i<nLen; i++){
      answer += parseInt(n.charAt(i));
  }
  return answer;
}

//방법 2
function solution2(n)
{
  return String(n).split("").reduce((tot,e) => tot + parseInt(e),0);
}
