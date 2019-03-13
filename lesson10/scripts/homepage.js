
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var townData = request.response;


    for (var i = 0; i < townData.towns.length; i++) {
        if (townData.towns[i].name === "Soda Springs" || townData.towns[i].name === "Fish Haven" || townData.towns[i].name === "Preston") {
            
            var section = document.createElement('section');

            var h3 = document.createElement('h3');
            h3.textContent = townData.towns[i].name;
            
            var motto = document.createElement('p');
            motto.textContent = townData.towns[i].motto;
            
            var yearFounded = document.createElement('p');
            yearFounded.textContent = "Year Founded: " + townData.towns[i].yearFounded;

           var population = document.createElement ('p');
           population.textContent = "Population: " + townData.towns[i].currentPopulation;

           var averageRainfall = document.createElement ('p');
            averageRainfall.textContent = "Average Rainfall: " + townData.towns[i].averageRainfall;

            var img = document.createElement('img');

            if (townData.towns[i].name === "Soda Springs") {
                img.setAttribute("src", "../images/example.jpg");
            } else if (townData.towns[i].name === "Fish Haven") {
                img.setAttribute("src", "../images/example.jpg");
            } else if (townData.towns[i].name === "Preston") {
                img.setAttribute("src", "../images/example.jpg");
            }

            section.appendChild(h3);
            section.appendChild(motto);
            section.appendChild(yearFounded);
            // append population and average rainfall here
            section.appendChild(img);

            var main = document.querySelector('main');
            main.appendChild(section);
        }
    }
}