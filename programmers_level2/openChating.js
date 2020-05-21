/* 2020 - 05 - 21
* N진수 게임
*/

function solution(record) {
    var splitRecord = record.map(v=> v.split(" "));

    var userArray = splitRecord.reduce((infoArr,v) => {
        let key = v[1]

        if (!infoArr[key]) {
          infoArr[key] = v[2]
        }

        if(v[2]){
            infoArr[key] = v[2]
        }

        return infoArr
    }, {})

    return splitRecord.filter((v) => v[0] !== 'Change').map((v) => {
         let nick = userArray[v[1]]
         return v[0] === "Enter" ? nick + "님이 들어왔습니다."
                        : nick + "님이 나갔습니다."
    });
}
