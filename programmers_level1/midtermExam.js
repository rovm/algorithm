/* 2020 - 03 - 31
* 모의고사
*/

function solution(answers) {
    var answer = [];

    var supo1 = [1,2,3,4,5]
    var supo2 = [2,1,2,3,2,4,2,5]
    var supo3 = [3,3,1,1,2,2,4,4,5,5]

    var a = corAns(answers, supo1)
    var b = corAns(answers, supo2);
    var c = corAns(answers, supo3);

    var maxNum = Math.max(a,b,c)
    if(maxNum == a)
        answer.push(1);
    if(maxNum == b)
        answer.push(2);
    if(maxNum == c)
        answer.push(3);
    answer.sort();

    return answer;
}

function corAns(answers, arr){
    return answers.reduce((cnt, v, i) => {
        if(v == arr[i% arr.length]){
            cnt++;
        }
        return cnt
    },0)
}
