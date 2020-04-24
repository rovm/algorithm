/* 2020 - 04 - 24
* 튜플
*/

function solution(s) {
    var answer = s.replace(/[\{\}]/gi,"").split(',').reduce((arr, e) => {
        if (arr[e]){
            arr[e]++;
        } else {
            arr[e] = 1;
        }
        return arr;
    }, {})

    return Object.entries(answer).sort((a,b) => {return b[1] - a[1]}).map(v => parseInt(v[0]));
}
