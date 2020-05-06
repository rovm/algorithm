/* 2020 - 05 - 06
* 탑
*/

function solution(heights) {
    var answer = [0];

    for(var i=1; i<heights.length; i++){
        var num = 0;
        for(var j=0; j<i; j++){
            if(heights[i] < heights[j])
                num = j+1
        }
        answer.push(num)
    }

    return answer;
}
