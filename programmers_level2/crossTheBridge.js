/* 2020 - 05 - 26
* 다리를 지나는 트럭
*/

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var blArr = Array(bridge_length).fill(0)
    var bwSum = 0;

    while(1){
        let blShift = blArr.shift()

        bwSum = bwSum - blShift

        let twShift = weight >= (bwSum + truck_weights[0]) ? truck_weights.shift() : 0

        blArr.push(twShift)
        bwSum = bwSum + twShift

        answer++

        if(bwSum == 0){
            break;
        }
    }

    return answer;
}
