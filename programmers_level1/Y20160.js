/* 2020 - 04 - 20
* 크레인 인형뽑기 게임
*/

function solution(board, moves) {
    var answer = 0;

    var arr = [];
    var temp = 0;
    for(var i=0; i<moves.length; i++){
        for(var j=0; j<board.length; j++){
          if(board[j][moves[i]-1] != 0){
            if(temp == board[j][moves[i]-1]){
                answer += 2;
                if(arr.length > 0){
                    arr.pop()
                    temp = arr[arr.length-1]
                } else {
                    temp = 0;
                }
            } else{
                arr.push(board[j][moves[i]-1])
                temp = board[j][moves[i]-1]
            }
            board[j][moves[i]-1] = 0
            break;
          }
        }
    }
    return answer;
}
