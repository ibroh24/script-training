var secondsPerMinute = 60;
var minutePerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMinute * minutePerHour * hoursPerDay;
alert("The number of seconds in a day is: "+ secondsPerDay);
console.log("The number of seconds in a day is: "+ secondsPerDay);
var age = 30;
var yearsAlive = weeksPerYear * age;
var minuteAlive = secondsPerDay * yearsAlive
alert("Have been alive for "+ minuteAlive +" seconds");
console.log("Have been alive for "+ minuteAlive +" seconds");
