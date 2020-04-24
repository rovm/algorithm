/* 2020 - 04 - 24
* 피보나치 수
*/

function solution(n) {
    var f1= 1; //f(1)
    var f2 = 1; //f(2)
    for(let i=3; i<=n; i++){
        let f3 = f1 + f2;
        f1 = f2 % 1234567;
        f2 = f3 % 1234567;
    }

    return f2;
}
