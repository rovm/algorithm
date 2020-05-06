/* 2020 - 05 - 06
* 주식 가격
*/

class Solution {
    public int[] solution(int[] prices) {
        int pl = prices.length;
        int[] answer = new int[pl];;

        for(int i=0; i<pl; i++){
            int cnt = 0;
            int pr = prices[i];
            for(int j=i+1; j<pl; j++){
                if(pr > prices[j]){
                    answer[i] = ++cnt;
                    break;
                } else{
                    cnt++;
                    if(j==pl-1){answer[i] = cnt;}
                }
            }
        }
        return answer;
    }
}
