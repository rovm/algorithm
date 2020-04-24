/* 2020 - 04 - 24
* 다음 큰 숫자
*/

function solution(n) {
    var answer = 0;
    var nCnt = n.toString(2).match(/1/gi).length;

    for(var i=n+1; i<1000000; i++){
        if(nCnt ==  i.toString(2).match(/1/gi).length){
            answer = i;
            break;
        }
    }

    return answer;
}
