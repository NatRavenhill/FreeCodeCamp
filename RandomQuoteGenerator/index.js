var dest="https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
$(document).ready(function() {
    $("#newQuote").on("click", function(){
      var htmlString = "test";

      
      $.getJSON(dest, function(json){
        console.log(json);
         $(".quote").html(json.quoteText);
         $(".quoteAuthor").html(json.quoteAuthor);
        
      });
    });
});