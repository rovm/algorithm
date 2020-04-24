/* 2020 - 04 - 24
* 위장
*/

function solution(clothes) {
    var answer = 1;

    var sp = clothes.reduce((arr, e) => {
        if (arr[e[1]]){
            arr[e[1]]++;
        } else {
            arr[e[1]] = 1;
        }
        return arr;
    }, {})

    for(var n in sp){
      answer = answer * (sp[n]+1);
    }

    return answer-1;
}
