/* 2020 - 03 - 31
* 같은 숫자는 싫어
*/

function solution(arr)
{
    var answer = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            answer.push(arr[i])
        }
    }

    return answer;
}
