$(document).ready(function() {
   "use strict";

   //human readable date
   let getDate = () => {
       var today = new Date();
       var dd = String(today.getDate()).padStart(2, '0');
       var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = today.getFullYear();

       today = yyyy + '-' + mm + "-" + dd;
      return today;
   }

   let convertWindSpeed = (currentWind) => {
       return (currentWind / 0.44704).toFixed(2);
   }

   //convert degrees to cardinal directions
   let convertDegtoCardinal = (deg) => {
           var val = Math.floor((deg / 22.5) + 0.5);
           var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
           return arr[(val % 16)];
   }



    var blogEntryBuilder = function(obj) {
        var entryHTML ='';
        var iconUrl = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
            entryHTML += `
                    <div class="card mt-2">
                        <div class="card-header">Today's Date: ${getDate()}</div>
                        <div class="card-body">
                                <p class="mb-0">Current Temperature: <strong>${Math.ceil(obj.main.temp)} °F</strong></p>
                                <div class="weather-icon"><img src="${iconUrl}"></div>   
                                <div>                             
                                    <p>Low: <strong>${obj.main.temp_min} °F</strong> / High: <strong>${obj.main.temp_max} °F</strong></p>
                                    <p> Description: <strong>${obj.weather[0].description}</strong></p>
                                    <p> Humidity: <strong>${obj.main.humidity}%</strong></p>
                                    <p> Wind Speed: <strong>${convertWindSpeed(obj.wind.speed)} MPH</strong></p>
                                    <p> Wind Direction: <strong>${obj.wind.direction?.code || convertDegtoCardinal(obj.wind.deg)}</strong></p>
                                    <p> Pressure: <strong>${obj.main.pressure} hPa</strong></p>
                                </div>
                        </div>
                    </div>
                    <br>
                    <br>
            `
        return entryHTML;
    }

   function getCurrentWeather(city){
    $.get("http://api.openweathermap.org/data/2.5/weather", {
    	APPID: OPEN_WEATHER_APPID,
    	q: `${city}, US`,
        units: "imperial"
    }).done(function (data) {
    	console.log(data);
    	$('#weather-cards').html(blogEntryBuilder(data));
    	$('.currentCity').html("<strong>"+"Current City: "+"</strong>" + city)
    }).fail(function () {

    });
   }

    getCurrentWeather("San Antonio")

   $('#searchBtn').on('click', function(e) {
       e.preventDefault();
       //user city input
       let cityInput = $('#citySearchText').val();
       if (cityInput.trim() == "") {return}
       console.log(cityInput);
       getCurrentWeather(cityInput);
    }
   )

    // Execute a function when the user releases a key on the keyboard
    $('#citySearchText').on("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            $('#searchBtn').click();
        }
    });



});