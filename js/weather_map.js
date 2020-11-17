$(document).ready(function() {
   "use strict";

   var getDate = () => {
       var today = new Date();
       var dd = String(today.getDate()).padStart(2, '0');
       var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = today.getFullYear();

       today = mm + '/' + dd + '/' + yyyy;
      return today;
   }

    var blogEntryBuilder = function(obj) {
        var entryHTML ='';
            entryHTML += `
                    <div class="card">
                        <div class="card-header">${getDate()}</div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${obj.content}</p>
                                <br>
                                <footer class="blockquote-footer"> Date Posted:
                                <br>
                                <br>
                                <cite title="Source Title">Categories:</cite></footer>
                            </blockquote>
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
    	q: `${city}, US`
    }).done(function (data) {
    	console.log(data);
    	$('#posts').html(blogEntryBuilder(data));
    });
   }

   getCurrentWeather("San Antonio");






});