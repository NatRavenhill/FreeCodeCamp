window.onload = function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        var lat = Math.round(position.coords.latitude);
        var long = Math.round(position.coords.longitude);

        var dest = 'https://fcc-weather-api.glitch.me/api/current?lat='
        + lat +'&lon=' + long;

        /*
        
description
:
"clear sky"
icon
:
"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01n.png?1499366020783"
id
:
800
main
:
"Clear"*/
        $.getJSON(dest, function(json){
            console.log(json);
            var weather = "";
            var weatherArr = json.weather;
            weatherArr.forEach(element => {
               weather +=  '<img src=' + element.icon + '/>'
                + '<p>' + element.description + '</p>';
            });
        
            $('#weather').html(weather);

            $("#locationText").text(json.sys.country);
        });
      });
    }
};