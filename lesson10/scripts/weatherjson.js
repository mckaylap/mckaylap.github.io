var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';


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
    document.getElementById("current-icon").setAttribute("src", 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');

}

var apiURLforecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=013d6d29c603417bd1d69a7c49208244&units=imperial';

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiURLforecast, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {

    var forecastData = forecastRequest.response;

    // Forecast Temp
    console.log(forecastData);

    document.getElementById("dayforecast").innerHTML = forecastData.main.temp;
}
