/* 2020 - 04 - 20
* 소수만들기
*/

function solution(nums) {
    var answer = 0;
    var leng = nums.length;

    for(let i=0; i<leng-2; i++){
        for(let j=i+1; j<leng-1; j++){
            for(let k=j+1; k<leng; k++){
                if(chkDecimal(nums[i]+nums[j]+nums[k])){
                    answer += 1
                }
            }
        }
    }

    return answer;
}

function chkDecimal(v){
    var decimal = true;
    for (let i=2; i<= Math.sqrt(v); i++)
    {
        if(v%i==0){
            decimal = false;
        }
    }
    return decimal;
}
