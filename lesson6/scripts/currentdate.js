// create script to do the date

var date= new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n= weekday[date.getDay()];

document.getElementById('copy-right-year').innerhtml= "n";