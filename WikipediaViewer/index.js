$(document).ready(function(){

    $("#random").click(function(){
        var link ="https://en.wikipedia.org/wiki/Special:Random";
        window.open(link);
    });

    $("#search").click(function(){
        var searchTerm = $("input[id=searchTerm]").val();

        var link = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;
        $.ajax(link, {
            dataType: "json",
            data: {
              origin: "*"
            },
            type: "GET",
            success: function(data) {
                var titles = data[1];
                var summaries = data[2];
                var links = data[3];
                $("#results").empty();
                for(var i = 1; i < titles.length; i++){
                    createListItem(titles[i], summaries[i], links[i]);
                }

            }
        });

    });
});

createListItem = function(title, summary, link){   
    var item = '<li> <div class="card" <div class="card-body"><h4 class="card-title"><a href="' +
    link + '">' + title + '</a></h4><p>' + summary + '</p></div></div></li>'; 
    $("#results").append(item);
}

