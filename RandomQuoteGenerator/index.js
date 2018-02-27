var dest="https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
$(document).ready(function() {
  
  $("#newQuote").on("click", function(){
    var htmlString = "test";      
    $.getJSON(dest, function(json){
      $(".quote").text(json.quoteText);
      $(".quoteAuthor").text(json.quoteAuthor);
    });

    var color = changeColour();
    console.log(color);
    $(".jumbotron").css("background-color", color);
    $("body").css("background-color", color);
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

function changeColour(){
  var red = Math.round(Math.random() * 255).toString();
  var green = Math.round(Math.random() * 255).toString();
  var blue = Math.round(Math.random() * 255).toString();

  if(red < 30 || blue < 30 || green < 30){
    $("h1").css("color", "rgb(255,255,255)");
  }
  else{
    $("h1").css("color", "rgb(0,0,0)");
  }

  return "rgb(" + red + "," + green + "," + blue + ")";
};