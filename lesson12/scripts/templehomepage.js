var requestURL = "json/temples.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var templeData = request.response;

// var templeData = JSON.parse(temples.json)

    for (var i = 0; i < templeData.length; i++) {

            var section = document.createElement('section');
            var link = document.createElement('a');

            var h3 = document.createElement('h3');
            h3.textContent = templeData[i].name;
            
            var address = document.createElement('p');
            address.textContent = templeData[i].address;
            
            var dedicated = document.createElement('p');
            dedicated.textContent = "Dedicated: " + templeData[i].history.dedicated;

           var clothing = document.createElement ('p');
           clothing.textContent = templeData[i].services.clothing;

           var food = document.createElement ('p');
           food.textContent = templeData[i].services.food;

            var img = document.createElement('img');
            img.src = templeData[i].picture;

            // if (templeData[i].name === "Portland") {
            //     img.setAttribute("src", "images/portlandtemple.jpg");
            // } else if (templeData[i].name === "Preston") {
            //     img.setAttribute("src", "images/prestontemple.jpg");
            // } else if (templeData[i].name === "sandiego") {
            //     img.setAttribute("src", "images/sandiegotemple.jpg");
            // } else if (templeData[i].name === "rexburg") {
            //     img.setAttribute("src", "images/rexburgtemple.jpg");
            // }

            var link = document.createElement('a');

            if (templeData[i].name === "Preston") {
                link.setAttribute("src", "prestontemple.html");
            } else if (templeData[i].name === "Portland") {
                link.setAttribute("src", "portlandtemple.html");
            } else if (templeData[i].name === "rexburg") {
                link.onclick("src", "rexburgtemple.html");
            } else if (templeData[i].name === "sandiego") {
                link.onclick("src", "sandiegotemple.html");
            }

            section.appendChild(h3);
            section.appendChild(address);
            section.appendChild(dedicated);
            section.appendChild(clothing);
            section.appendChild(food);
            section.appendChild(img);
            section.appendChild(link)

            var main = document.querySelector('main');
            main.appendChild(section);
        }
    }
    
