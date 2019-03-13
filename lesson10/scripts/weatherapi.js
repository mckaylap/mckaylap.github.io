var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';


var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload =  function () {

    var weatherData = weatherRequest.response;

// Temp
console.log(weatherData);

document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}

// var apiURLforecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';

// var forecastRequest = new XMLHttpRequest();
// forecastRequest.open('GET', apiURLforecast, true);
// forecastRequest.responseType = 'json';
// forecastRequest.send();

// forecastRequest.onload =  function () {

//     var forecastData = forecastRequest.response;

// // Forecast Temp
// console.log(forecastData);

// document.getElementById("forecast-temp").innerHTML = forecastData.main.temp;
// }