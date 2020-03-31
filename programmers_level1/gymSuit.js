/* 2020 - 03 - 31
* 체육복

*/

function solution(n, lost, reserve) {
    var answer = 0;

    let arr1 = lost.filter(x => !reserve.includes(x));
    let arr2 = reserve.filter(x => !lost.includes(x));

    arr1.forEach(v => {
        if(arr2.indexOf(v-1) != -1){
            arr2.splice(arr2.indexOf(v-1),1)
        } else if (arr2.indexOf(v+1) != -1){
            arr2.splice(arr2.indexOf(v+1),1)
        } else{
            answer++
        }
    })
    return n-answer;
}
