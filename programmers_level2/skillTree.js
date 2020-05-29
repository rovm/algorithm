/* 2020 - 05 - 29
* 스킬트리
*/

function solution(skill, skill_trees) {
    var skillArr = skill.split('')

    return skill_trees.map(v =>{
        return v.split('').map(e =>{
            return skillArr.findIndex(el => el == e)
        }).filter(x => x != -1)
    }).reduce((answer, a) => {
       return a.every((b,i) => {return b == i}) ? answer+1 : answer
    },0);
}
