// create script to get the date

//
var today= new Date();

//array to get weekday
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//get weekday
var dayOfWeek= weekday[today.getDay()];

//get fullyear
var fullYear= today.getFullYear();

//month
var month = new Array(7);
month[0] = "January";
month[1] = "Feburary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August"
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthName= month[today.getMonth];

//day of month

//debugging

console.log(today)
console.log(dayOfWeek)
console.log(fullYear)
console.log(monthName)

//full date
var fullDate= 
weekday + ", " +
today.getDate()+ " "+
monthName + ", " +
fullYear;

document.getElementById('currentyear').innerHTML= return fullDate;


