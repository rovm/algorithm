/* 2020 - 02 - 24
* 실패율
*/

function solution(N, stages) {
    var len = stages.length
    var eachStage = Array(N).fill(0)

    stages.forEach(v => {
        if(N!=v-1)
            eachStage[v-1]++
    })

    var failedRate = eachStage.map((v,i) => {
        var param = {
            percentage : len == 0 ? 0 : v/len,
            num : i+1
        }
        len = len - v;
        return param
    })

    failedRate.sort((a,b) => {
        return a.percentage == b.percentage ? (a.num - b.num) : (b.percentage-a.percentage)
    });

    return failedRate.map(v =>{
        return v.num
    });
}
