$(document).ready(function(){

    $("#random").click(function(){
        var link ="https://en.wikipedia.org/wiki/Special:Random";
        window.open(link);
    });

    $("#search").click(function(){
        search();
        });
});

createListItem = function(result){ 
    var title = result.title;
    var summary = result.snippet;
    var link =   "https://en.wikipedia.org/wiki/" + result.title;
    var item = '<li> <div class="card" <div class="card-body"><h4 class="card-title"><a href="' +
    link + '">' + title + '</a></h4><p>' + summary + '</p></div></div></li>'; 
    $("#results").append(item);
}

search = function(){
    var searchTerm = $("input[id=searchTerm]").val();

    var link = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm;
    $.ajax(link, {
        dataType: "json",
        data: {
          origin: "*"
        },
        type: "GET",
        success: function(data) {
            var searchResults = data.query.search;
            $("#results").empty();
            for(var i = 1; i < searchResults.length; i++){
                createListItem(searchResults[i]);
            }

        }
    });
};

$(document).keypress(
    function(event){
     if (event.which == '13') {
        event.preventDefault();
        search();
      }
});

