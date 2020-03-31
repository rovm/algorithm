/* 2020 - 03 - 31
* 문자열 내 p와 y의 개수
*/

function solution(s){
    var pMatch = s.match(/p/gi)
    var yMatch = s.match(/y/gi)

    return (pMatch != null ? pMatch.length : 0) == (yMatch != null ? yMatch.length : 0) ? true : false;
}
