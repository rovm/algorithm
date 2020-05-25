/* 2020 - 05 - 25
* 1차 프렌즈4블록
*/

function solution(m, n, board) {
    var twoDeArr = board.map(v => v.split(''))

    return removeBlock(twoDeArr).reduce((tot, v) => {
        return tot += v.filter(x => x == 0 ).length;
    },0);
}

function removeBlock(twoDeArr) {
    var reomveValArr = [];
    for(var i=0; i<twoDeArr.length-1; i++){
        for(var j=0; j<twoDeArr[0].length-1; j++){
            if(twoDeArr[i][j] == twoDeArr[i][j+1]
              && twoDeArr[i][j] == twoDeArr[i+1][j]
              && twoDeArr[i][j] == twoDeArr[i+1][j+1]
              && twoDeArr[i][j] != '0'){
                reomveValArr.push([i,j])
            }
        }
    }

   reomveValArr.forEach(v => {
        twoDeArr[v[0]][v[1]] = ""
        twoDeArr[v[0]+1][v[1]] = ""
        twoDeArr[v[0]][v[1]+1] = ""
        twoDeArr[v[0]+1][v[1]+1] = ""
    })

    var tempArr = [];

    for(var k=0; k<twoDeArr[0].length; k++){
        let str = ""
        for(var l=0; l<twoDeArr.length; l++){
            str = str + twoDeArr[l][k]
        }
        tempArr.push(str.padStart(twoDeArr.length,0))
    }

    tempArr.forEach((v,i) => {
        v.split('').forEach((e,j) => {
            twoDeArr[j][i] = e
        })
    })

    return reomveValArr.length != 0 ? removeBlock(twoDeArr) : twoDeArr
}
