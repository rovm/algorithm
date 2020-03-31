/* 2020 - 03 - 31
* 2016
*/

function solution(a, b) {
   var date = new Date('2016/01/01');
	 var date1 = new Date('2016/'+a+'/'+b);
	 var diff = (date1.getTime()-date.getTime())/(1000*60*60*24)%7;

    var day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]

    return day[diff];
}
