$(document).ready(function(){

    $("#random").click(function(){
        var link ="https://en.wikipedia.org/wiki/Special:Random";
        window.open(link);
    });

    $("#search").click(function(){
        var searchTerm = $("input[id=searchTerm]").val();
        alert("am searching for " + searchTerm + "!");

        var link = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm;

        $.getJSON(link, function(json){
            $("#result").text(json);
          });
    });
});

