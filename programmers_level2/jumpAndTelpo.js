/* 2020 - 04 - 20
* 점프와 순간이동
*/

function solution(n)
{
    var ans = 0;

    while(n>1){
       if(n%2==1){
           ans += 1;
       }
       n = parseInt(n/2)
    }

    return ans+1;
}
