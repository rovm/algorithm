/* 2020 - 04 - 24
* 폰켓몬
*/

function solution(nums) {
    var a = nums.filter((item, index) => nums.indexOf(item) === index).length
    var b = parseInt(nums.length/2)
    return a >= b ? b : a;
}
