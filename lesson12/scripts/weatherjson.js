var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';


var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {

    var weatherData = weatherRequest.response;

    // Temp
    console.log(weatherData);

    var nowtemp = weatherData.main.temp;
    var windSpeed = weatherData.wind.speed;

    var windChill = 35.74 + 0.6215 * nowtemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * nowtemp * Math.pow(windSpeed, 0.16);


    document.getElementById('temp').innerHTML = nowtemp.toFixed(0) + '&deg';
    document.getElementById('windSpeed').innerHTML = windSpeed.toFixed(0) + 'mph';
    document.getElementById('windChill').innerHTML = windChill.toFixed(0) + '&deg';


    // document.getElementById("temp").innerHTML = weatherData.main.temp;
    // document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;
    // document.getElementById("windChill").innerHTML = weatherData.wind.windchill;


    //icon
    document.getElementById("current-icon").setAttribute("src", 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');

}

// var apiURLforecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';

// var forecastRequest = new XMLHttpRequest();
// forecastRequest.open('GET', apiURLforecast, true);
// forecastRequest.responseType = 'json';
// forecastRequest.send();

// forecastRequest.onload = function () {

//     //today
//     var today = new Date();

//     //array to get weekday
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";


//     //get weekday
//     var dayOfWeek = weekday[today.getDay()];
//     var tomorrow = weekday[today.getDay()+1];
//     var dayAfterTomorrow = weekday[today.getDay()+2];
//     var dayAfterAfter = weekday[today.getDay()+3];
//     var lastday = weekday[today.getDay()+4];

//     var forecastData = forecastRequest.response;

//     // Forecast Temp
//     console.log(forecastData.list);

//     //document.getElementById("fivedayforecast").innerHTML = forecastData.list[0].main.temp;
//      document.getElementById("day1").innerhtml = dayOfWeek;
//      document.getElementById("icon1").innerhtml = forecastData.list[0].weather.icon;
//      document.getElementById("temp1").innerhtml = forecastData.list[0].main.temp;
//      document.getElementById("day2").innerhtml = tomorrow;
//      document.getElementById("icon2").innerhtml = forecastData.list[1].weather.icon;
//      document.getElementById("temp2").innerhtml = forecastData.list[1].main.temp;
//      document.getElementById("day3").innerhtml = dayAfterTomorrow;
//      document.getElementById("icon3").innerhtml = forecastData.list[2].weather.icon;
//      document.getElementById("temp3").innerhtml = forecastData.list[2].main.temp;
//      document.getElementById("day4").innerhtml = dayAfterAfter;
//      document.getElementById("icon4").innerhtml = forecastData.list[3].weather.icon;
//      document.getElementById("temp4").innerhtml = forecastData.list[3].main.temp;
//      document.getElementById("day5").innerhtml = lastday;
//      document.getElementById("icon5").innerhtml = forecastData.list[4].weather.icon;
//      document.getElementById("temp5").innerhtml = forecastData.list[4].main.temp;

//}

// forecast
var openWeatherMapId = '013d6d29c603417bd1d69a7c49208244'; // place your OpenWeatherMap id between the single quotes
var cityId = '5604473'; // place the city id between the single quotes (e.g. 5604473 for Preston)

var apiForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast' +
    '?id=' + cityId + 
    '&appid=' + openWeatherMapId +
    '&units=imperial';

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiForecastUrl, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
    var forecastData = forecastRequest.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDate;
    var forecastTemp;

    for (i = 0; i < forecastData.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastData.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDate = new Date(forecastData.list[i].dt_txt);
            
            // set temperature variable
            forecastTemp = forecastData.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("temp1").innerHTML = forecastTemp;
                    break;
                case 2:
                    document.getElementById("day2").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("temp2").innerHTML = forecastTemp;
                    break;
                case 3:
                    document.getElementById("day3").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("temp3").innerHTML = forecastTemp;
                    break;
                case 4:
                    document.getElementById("day4").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("temp4").innerHTML = forecastTemp;
                    break;
                case 5:
                    document.getElementById("day5").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("temp5").innerHTML = forecastTemp;
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDate) {
    // day of week
    var dayOfWeekNumber = forecastDate.getDay();

    var dayNames = new Array(7);
    dayNames[0] = 'Sunday';
    dayNames[1] = 'Monday';
    dayNames[2] = 'Tuesday';
    dayNames[3] = 'Wednesday';
    dayNames[4] = 'Thursdsay';
    dayNames[5] = 'Friday';
    dayNames[6] = 'Saturday';

    return dayNames[dayOfWeekNumber];
}
