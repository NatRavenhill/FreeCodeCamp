$(document).ready(function(){

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        var lat = Math.round(position.coords.latitude);
        var long = Math.round(position.coords.longitude);

        var dest = 'https://fcc-weather-api.glitch.me/api/current?lat='
        + lat +'&lon=' + long;
        
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
});