var dest = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?';

$(document).ready(function() {
    $("#newQuote").on("click", function(){
      var htmlString = "test";

      
      $.getJSON(dest, function(json){
        console.log(json);
         $(".quote").html(json[0].content);
        
      });
    });
});