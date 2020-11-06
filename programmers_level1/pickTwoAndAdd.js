/* 2020 - 11 - 06
* 두 개 뽑아서 더하기
*/

function solution(numbers) {
    var answer = [];
    var numLen = numbers.length;
    for(let i=0; i <numLen; i++){
        let a = numbers.pop();

        for(let j=0; j<numbers.length; j++){
            let resNum = a+numbers[j]
            if(answer.indexOf(resNum) == -1)
                answer.push(resNum)
        }
    }

    return answer.sort((a,b)=>a-b);
}
