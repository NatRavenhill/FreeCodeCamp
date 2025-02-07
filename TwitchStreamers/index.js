const twitchURL = "https://twitch-proxy.freecodecamp.rocks/twitch-api/";

$("document").ready(function(){
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    users.forEach(function(user){
        var link = twitchURL + "channels/" + user;
        $.getJSON(link, function(channelsJson){
            createListItem(channelsJson, user);
        });

    });

});

createListItem = function(channelsJson, user){
    

    var streamsLink = twitchURL + "streams/" + user;
    $.getJSON(streamsLink, function(streamsJson){

        var item = "<div class=\"card ";

        if(streamsJson.stream !== null)
        {
            item += "bg-success ";
        }

        item += "text-center\"><img class=\"card-img-top .img-fluid\" src=" 
         + channelsJson["logo"]
         + "><div class=\"card-body\"><h5 class=\"card-title\"> <a href=\""
         + channelsJson.url 
         + "\">"
        + channelsJson["display_name"]
         + "</a></h5><p class=\"card-text\">";

        console.log(streamsJson.stream);
        if(streamsJson.stream === null){
            item += "Not currently broadcasting";
        }
        else{
            item += "Broadcasting " + streamsJson.stream.game;
        }

        item += "</p></div></div>";
        console.log(item);
        $("#streamers").append(item);
    });

}