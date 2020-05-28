/* 2020 - 05- 12
* 예상 대진표
*/
 
function solution(n,a,b)
{
    var arr = new Array(n);
    arr.fill(0)
    arr[a-1] = a
    arr[b-1] = b

    return tournament(arr, 1, n);
}

function tournament(arr, answer, n){
    var tArr = [];

    if(arr.length < 1){
        return answer;
    }

    for(var i=0; i<n; i+=2){
        let a = arr[i];
        let b = arr[i+1];

        if(a == 0 && b == 0){
            tArr.push(0)
        }else if(a != 0 && b != 0){
            return answer;
        } else{
            a > b ? tArr.push(a) : tArr.push(b)
        }
    }

    return tournament(tArr, ++answer, n/2)
}
