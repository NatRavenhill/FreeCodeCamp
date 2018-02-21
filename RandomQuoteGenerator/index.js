var dest="https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
$(document).ready(function() {
  
  $("#newQuote").on("click", function(){
    var htmlString = "test";      
    $.getJSON(dest, function(json){
      $(".quote").text(json.quoteText);
      $(".quoteAuthor").text(json.quoteAuthor);
    });
  });

  $("#tweetButton").on("click", function(){
    var quoteText = $(".quote").html();
    if(quoteText)
    {
      var link = 'https://twitter.com/intent/tweet?text='
      var tweetText = encodeURIComponent( 
        quoteText
        + ' - '
        + $(".quoteAuthor").html()
        + ' #RandomQuoteGenerator');
        window.open(link+tweetText);
    }
  }); 

});