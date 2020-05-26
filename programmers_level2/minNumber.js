/* 2020 - 05 - 26
* 최솟값 만들기
*/

function solution(A,B){
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)

    return A.reduce((tot, v, i) => {
       return tot + (v * B[i])
    },0);
}
