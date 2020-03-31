/* 2020 - 03 - 31
* 문자열 내 마음대로 정렬하기
*/

function solution(strings, n) {
    return strings.sort((a,b)=> {
        if (a.substr(n,1) > b.substr(n,1)) return 1;
        else if (b.substr(n,1) > a.substr(n,1)) return -1;
        else{
            if (a > b) return 1;
            else if (b > a) return -1;
            else return 0;
        }
    });
}
