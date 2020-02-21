/* 2020 - 02 - 21
* [1차] 다트 게임
*/

function solution(dartResult) {
    var answer = 0;

    var dr = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g )

    var score = [];
    for(var i=0; i<3; i++){
        var num = dr[i].match(/\d{1,2}/g)

        var ch = dr[i].match(/[SDT]{1}/g)
        if(ch == "S"){
            num = parseInt(num)
        } else if(ch == "D"){
            num = num * num
        } else if(ch == "T"){
            num = num * num * num
        }
        var kiho = dr[i].match(/[*|#]/g)
        if(kiho == "*"){
            num = num * 2;
            if(i != 0){
                score[i-1] = score[i-1] * 2;
            }
        } else if(kiho == "#"){
            num = num * (-1);
        }
        score.push(num)
    }
    return score.reduce((a,b) => a+b,0);
}
