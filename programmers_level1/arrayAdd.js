/* 2020 - 02 - 21
* 행렬의 덧셈
*/

//방법1
function solution(arr1, arr2) {
    var answer = [];

    for(let i=0; i<arr1.length; i++){
        let temp = [];
        for(let j=0; j<arr1[i].length; j++){
            temp.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(temp)
    }

    return answer;
}

//방법2
function solution2(arr1, arr2) {
     return arr1.map((e,i) => arr2[i].map((v,j) => arr1[i][j]+arr2[i][j]))
}
