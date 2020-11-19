$(document).ready(function() {
   "use strict";

    let cityInput = "";
    let cityLat;
    let cityLon;

   let getDate = (addDay) => {
       if (addDay >= 0) {
           var today = new Date();
           today.setDate(today.getDate()+addDay)
           var dd = String(today.getDate()).padStart(2, '0');
           var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
           var yyyy = today.getFullYear();
           if (addDay === 0) {
               var todayFormat = "(TODAY) " + yyyy + '-' + mm + "-" + dd;
           } else {
               var todayFormat = yyyy + '-' + mm + "-" + dd;
           }
       } else {
           var today = new Date();
           var dd = String(today.getDate()).padStart(2, '0');
           var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
           var yyyy = today.getFullYear();
           var todayFormat = yyyy + '-' + mm + "-" + dd;
       }
      return todayFormat;
   }

    let getCoords = (cityInput) => {
        geocode(cityInput, mapboxToken).then(function(result) {
            cityLat = result[1];
            cityLon = result[0];
        });
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

   var weatherTemplateBuilder = function(daily, weekly) {
       var cardTemplate = `<div id="weather-cards" class="container-fluid row justify-content-center mt-1"></div>`;
       if (daily) {
           var cardPrepend = `<div id="weather-cards-h1" class="mx-auto"><h3><u>DAILY FORECAST</u></h3></div>`
       } else if (weekly) {
           var cardPrepend = `<div id="weather-cards-h1" class="mx-auto"><h3><u>WEEKLY FORECAST</u></h3></div>`
       }
       $('#weather-cards').remove();
       $('#weather-cards-h1').remove();
       $('#currentCityText').html(`<strong>Current City:</strong> ${cityInput}`);
       $('#weatherRow').append(cardPrepend);
       $('#weatherRow').append(cardTemplate);
   }

   var dailyWeatherBuilder = function(obj) {
       var entryHTML ='';
       var iconUrl = "http://openweathermap.org/img/wn/" + obj.weather[0].icon + "@2x.png";
       entryHTML += `
            <div class="card justify-content-center mt-2">
                <div class="card-header text-center">Today's Date: ${getDate()}</div>
                <div class="card-body">
                        <p class="mb-0">Current Temperature: <strong>${Math.ceil(obj.main.temp)} °F</strong></p>
                        <p class="mb-0 text-center">(Feels Like: <strong>${Math.ceil(obj.main.feels_like)} °F)</strong></p>
                        <div class="weather-icon"><img src="${iconUrl}"></div>   
                        <div>                             
                            <p>High: <strong>${obj.main.temp_max} °F</strong> / Low: <strong>${obj.main.temp_min} °F</strong></p>
                            <p>Description: <strong>${obj.weather[0].description}</strong></p>
                            <p>Humidity: <strong>${obj.main.humidity}%</strong></p>
                            <p>Wind Speed: <strong>${convertWindSpeed(obj.wind.speed)} mph</strong></p>
                            <p>Wind Direction: <strong>${obj.wind.direction?.code || convertDegtoCardinal(obj.wind.deg)}</strong></p>
                            <p>Pressure: <strong>${obj.main.pressure} hPa</strong></p>
                        </div>
                </div>
            </div>
            <br>
            <br>`
       return entryHTML;
    }

    var weeklyWeatherBuilder = function(objArr) {
        var entryHTML ='';
        objArr.daily.forEach((obj, index) => {
            if (index >= objArr.daily.length -3) return entryHTML;
            var iconUrl = "http://openweathermap.org/img/wn/" + obj.weather[0].icon + "@2x.png";
            entryHTML += `
                <div class="card justify-content-center mt-2">
                    <div class="card-header text-center">${getDate(index)}</div>
                    <div class="card-body">     
                            <p class="mb-0">High: <strong>${obj.temp.max} °F</strong> / Low: <strong>${obj.temp.min} °F</strong></p>
                            <div class="weather-icon"><img src="${iconUrl}"></div>   
                            <div>                             
                                <p class="mb-0">Description: <strong>${obj.weather[0].description}</strong></p>
                                <p class="mb-0">Humidity: <strong>${obj.humidity}%</strong></p>
                                <p class="mb-0">Wind Speed: <strong>${convertWindSpeed(obj.wind_speed)} mph</strong></p>
                                <p class="mb-0">Wind Direction: <strong>${convertDegtoCardinal(obj.wind_deg)}</strong></p>
                                <p class="mb-0">Pressure: <strong>${obj.pressure} hPa</strong></p>
                            </div>
                    </div>
                </div>
                <br>
                <br>`
            })
        return entryHTML;
    }

   function getDailyWeather(city){
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            q: `${city}, US`,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            $('#weather-cards').html(dailyWeatherBuilder(data));
            $('.currentCity').html("<strong>"+"Current City: "+"</strong>" + city).css("text-transform", "capitalize");
        }).fail(function (data) {
            $('#weather-cards').html("<p>Sorry, couldn't find that city.</p>");
            $('.currentCity').html("<strong>"+"Current City: "+"</strong>" + city);
        });
   }

    function getWeeklyWeather(city){
       Promise.resolve(geocode(city, mapboxToken))
           .then(function(result) {
           cityLat = result[1];
           cityLon = result[0];
       }).then(function() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: OPEN_WEATHER_APPID,
            lat: cityLat,
            lon: cityLon,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            $('#weather-cards').html(weeklyWeatherBuilder(data));
            $('.currentCity').html("<strong>"+"Current City: "+"</strong>" + city).css("text-transform", "capitalize");
        }).fail(function () {
            $('#weather-cards').html("<p>Sorry, couldn't find that city.</p>");
            $('.currentCity').html("<strong>"+"Current City: "+"</strong>" + city);
        })});
    }

   function combineDaily() {
       $('li').removeClass('active');
       $(this).toggleClass('active');
       weatherTemplateBuilder(true, null);
       if (cityInput != "") {
           getDailyWeather(cityInput);
       }
   }

   function combineWeekly() {
       $('li').removeClass('active');
       $(this).toggleClass('active');
       weatherTemplateBuilder(null, true);
       if (cityInput != "") {
           getWeeklyWeather(cityInput);
       }
   }

   ///////////////////
    //MAPBOX FNs//////
   ///////////////////
    mapboxgl.accessToken = mapboxToken;

    var mapboxOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 20,
    }
    var map = new mapboxgl.Map(mapboxOptions);
    geocode("800 Town and Country Blvd, Houston, TX 77024", mapboxToken).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(18);
    });

    ///////////////////
    //EVENT HANDLERS//
    //////////////////
    $('#currentWeather').on("click", combineDaily);
    $('#weeklyWeather').on("click", combineWeekly);

    $('#searchBtn').on('click', function(e) {
            e.preventDefault();
            // cityInput =  cityInput == "" ? $('#citySearchText').val() : cityInput;
        cityInput = $('#citySearchText').val();
            if (cityInput.trim() === "") {return}
            if ($('#currentWeather').hasClass('active')) {
                getDailyWeather(cityInput);
            } else {
                getWeeklyWeather(cityInput);
            }
        }
    )
    $('#clearBtn').on('click', function(e) {
        e.preventDefault();
        cityInput = $('#citySearchText').val('');
    })

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


    // getDailyWeather("San Antonio");
    // getCoords("San Antonio");

});