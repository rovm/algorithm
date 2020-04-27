/* 2020 - 04 - 27
* 숫자의 표현
*/

function solution(n) {
    var answer = 1; // n 자기 자신

    var len = Math.ceil(n/2);
    for(var i=1; i<len; i++){
        var tot = 0;
        for(var j=i; j<=len; j++){
            tot = tot + j;
            if(tot == n){
                answer++;
                break;
            }  else if(tot > n) break;
            else continue;
        }
    }
    return answer;
}
