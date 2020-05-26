/* 2020 - 05 - 26
* 행렬의 곱셈
*/

function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach(v => answer.push(Array(arr2[0].length).fill(0)))
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j< arr2[0].length; j++){
            for(var k =0; k< arr2.length; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    return answer;
}

//다른사람 풀이
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}
