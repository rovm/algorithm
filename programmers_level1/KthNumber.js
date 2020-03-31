/* 2020 - 03 - 31
* K번째수

*/

function solution(array, commands) {
    return commands.map((v,i) => {
        return array.slice(v[0]-1,v[1]).sort((a,b) => a - b).splice(v[2]-1,1)[0]
    });
}
