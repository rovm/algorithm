/* 2020 - 03 - 31
* 가운데 글자 가져오기
*/

function solution(s) {
    var strLen = s.length;
    return strLen%2==0 ? s.substr(strLen/2-1,2) : s.substr(strLen/2,1);
}
