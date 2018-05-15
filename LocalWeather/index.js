var isC = true;
var cDegrees = "&#8451;";
var fDegrees = "&#8457;";

$(document).ready(function(){

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

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
            $('#temperature').html(json.main.temp + cDegrees);

            var location = json.name + ", " + json.sys.country;
            $("#locationText").text(location);
        });
      });

      $("#toggleTemp").click(function(){
        console.log("isC", isC);
        if(isC){
            $("#toggleTemp").html("To " + cDegrees);
            centToFaren($('#temperature').html());
            isC = false;
        }
        else{
            $("#toggleTemp").html("To " + fDegrees);
            fahrenToCent($('#temperature').html());
            isC = true;
        }
        });
    }
});

centToFaren = function(temp){
    temp = $('#temperature').html().match(/\d+.\d+/)[0];
    var fahren = (temp * (9/5) + 32).toFixed(2);
    $('#temperature').html(fahren + "&#8457;");
};

fahrenToCent = function(temp){
    temp = $('#temperature').html().match(/\d+.\d+/)[0];
    var fahren = ((temp - 32) * (5/9)).toFixed(2);
    $('#temperature').html(fahren + "&#8451;");
};

