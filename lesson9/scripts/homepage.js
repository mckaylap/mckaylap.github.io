var townData =
{
    "towns": [
        {
            "name": "Franklin",
            "motto": "Where you will grow!",
            "yearFounded": 1788,
            "currentPopulation": 30458,
            "averageRainfall": 21,
            "events": [
                "March 4: March to the Drum of Donuts",
                "September 5 - 11: Founder Days",
                "December 1 - 26: Christmas in the Heart"
            ]
        },
        {
            "name": "Fish Haven",
            "motto": "This is Fish Heaven.",
            "yearFounded": 1864,
            "currentPopulation": 501,
            "averageRainfall": 14.20,
            "events": [
                "April 1: How Big Was That Fish Day",
                "May 15-30: Rush the Creek Days",
                "July 24: Bear Lake Blunder Run",
                "December 12: Light the Tree"
            ]
        },
        {
            "name": "Greenville",
            "motto": "Green is our way of life.",
            "yearFounded": 1805,
            "currentPopulation": 33458,
            "averageRainfall": 25,
            "events": [
                "February 10-12: Greenbration",
                "May 8 - 18: Greenville Founder Days",
                "June 20: Verde and Valiant Day",
                "November 15-16: Greensome Gathering"
            ]
        },
        {
            "name": "Placerton",
            "motto": "Positive Placement in Placerton.",
            "yearFounded": 1946,
            "currentPopulation": 512,
            "averageRainfall": 39,
            "events": [
                "July 4: A Blaze of Glory",
                "October 20: Fall through Fall"
            ]
        },
        {
            "name": "Preston",
            "motto": "Home of Napoleon Dynamite",
            "yearFounded": 1866,
            "currentPopulation": 5204,
            "averageRainfall": 16.65,
            "events": [
                "March 29: Work Creek Revival",
                "July 8-12: Napoleon Dynamite Festival",
                "November 2-4: Freedom Days"
            ]
        },
        {
            "name": "Soda Springs",
            "motto": "Historic Oregon Trail Oasis. The Soda is on Us",
            "yearFounded": 1858,
            "currentPopulation": 2985,
            "averageRainfall": 15.75,
            "events": [
                "February 29: Geyser Song Day",
                "May 1-6: Days of May Celebration",
                "October 15-16: Octoberfest"
            ]
        },
        {
            "name": "Springfield",
            "motto": "Where everyone is lifted.",
            "yearFounded": 1826,
            "currentPopulation": 17852,
            "averageRainfall": 17,
            "events": [
                "January 8: Spring into Winter",
                "April 10-20: Celebration of Life",
                "July 31-Aug 15: Dog Days of Summer Festival"
            ]
        }
    ]
}



// document.getElementById("fishHavenName").innerHTML = townData.towns[1].name;
// document.getElementById("fishHavenMotto").innerHTML = townData.towns[1].motto;
// document.getElementById("fishHavenPopulation").innerHTML = "Population: " + townData.towns[1].currentPopulation;

// for (var i=0; i< townData.towns.length; i++) {
//     if (i === 0 || i === 2 || i===3 || i === 6) {
//         continue;
//     }

//     document.write('<h1>'+ townData.towns[i].name + '</h1>');
// }

for (var i=0; i< townData.towns.length; i++) {
    if (townData.towns[i].name === "Soda Springs" || townData.towns[i].name === "Fish Haven" || townData.towns[i].name === "Preston") {
        document.write('<h1>'+ townData.towns[i].name + '</h1>');
        document.write('<h2>'+ townData.towns[i].motto + '</h2>');
        document.write('<h3>'+ "Year Founded: " + townData.towns[i].yearFounded + '</h3>');
        document.write('<h4>'+ "Population: " + townData.towns[i].currentPopulation + '</h4>')
        document.write('<h5>'+ "Average Rainfall: " + townData.towns[i].averageRainfall + '</h5>');

        var imgSodaSprings = document.createElement('img');
        imgSodaSprings.setAttribute("src", "example.jpg");
    }
    // else if (townData.towns[i].name === "Fish Haven") {
        // document.getElementById(townData.towns[i].name???).innerHTML += townData.towns[1].name;
        // document.getElementById(townData.towns[i].name???).innerHTML += townData.towns[1].motto;
        // document.getElementById(townData.towns[i].name???).innerHTML += townData.towns[1].currentPopulation;
 
        // var imgSodaSprings = document.createElement('img');
        // imgSodaSprings.setAttribute("src", "example.jpg");
    // }
    // else if (townData.towns[i].name === "Preston") {
    //     document.write('<h1>'+ townData.towns[i].name + '</h1>');
    //     document.write('<h2>'+ townData.towns[i].motto + '</h2>');
    //     document.write('<h3>'+ townData.towns[i].yearFounded + '</h3>');
    //     document.write('<h4>'+ townData.towns[i].averageRainfall + '</h4>');

    //     var imgSodaSprings = document.createElement('img');
    //     imgSodaSprings.setAttribute("src", "example.jpg");
    // }

}

//practice
// var person= {
//     "name": "McK",
//     "location": "rexburg,ID"
// };

// document.write(person.location);