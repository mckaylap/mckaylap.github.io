var requestURL = "json/temples.json"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var templeData = request.response;

    for  (var i = 0; i < templeData.length; i++) {

        if (templeData[i].name === "Preston England Temple") {
            var section = document.createElement('section');
            
            var h3 = document.createElement('h1');
            h3.textContent = templeData[i].name;

            var location = document.createElement('p');
            location.textContent = templeData[i].location;
            
            var address = document.createElement('p');
            address.textContent = templeData[i].address;

            var phone = document.createElement('p');
            phone.textContent = "Phone: " + templeData[i].phone;

            var announced = document.createElement('p');
            announced.textContent = "Announced: " + templeData[i].history.announced; 

            var groundbreaking = document.createElement('p');
            groundbreaking.textContent = "Groundbreaking: " + templeData[i].history.groundbreaking; 

            var dedicated = document.createElement('p');
            dedicated.textContent = "Dedicated: " + templeData[i].history.dedicated;

           var clothing = document.createElement ('p');
           clothing.textContent = templeData[i].services.clothing;

           var food = document.createElement ('p');
           food.textContent = templeData[i].services.food;

           var db = document.createElement ('p');
           db.textContent = templeData[i].services.db;

           var closedfrom = document.createElement ('p');
           closedfrom.textContent = templeData[i].closures.start;

           var closeduntil = document.createElement ('p');
           closeduntil.textContent = templeData[i].closures.end;

            section.appendChild(h3);
            section.appendChild(location);
            section.appendChild(address);
            section.appendChild(announced);
            section.appendChild(groundbreaking);
            section.appendChild(dedicated);
            section.appendChild(clothing);
            section.appendChild(food);
            section.appendChild(db);
            section.appendChild(closedfrom);
            section.appendChild(closeduntil);
            section.appendChild(clothing);
            

            var main = document.querySelector('main2');
            main.appendChild(section);
        }
    }

}
