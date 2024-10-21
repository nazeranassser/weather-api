function renderweather(weather){
    console.log(weather);
    var resultscontanier= document.getElementById("weather-results")
   
    var city = document.createElement("h2");
    city.textContent = weather.name;
    resultscontanier.append(city);

    var temp = document.createElement("p");
    temp.textContent = "temp: " + weather.main.temp + " F" ;
    resultscontanier.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "humidity: " + weather.main.humidity+ " %" ;
    resultscontanier.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "wind: " + weather.wind.speed + " mph, " + weather.wind.deg + "d" ;
    resultscontanier.append(wind);

    var weatherdetails =weather.weather[0]

    if (weatherdetails && weatherdetails.description){
        var description = document.createElement("p");
        description.textContent = weatherdetails.description ;
    resultscontanier.append(description);

    }
}




function featchweather(query){
    var url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ef53e05068b9579da47a0813e131da4b";
   
    fetch (url)
    
      .then((response) => response.json())
      .then ((data) => renderweather(data))
}

featchweather("London");