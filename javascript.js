$(window).resize(function() {

$("#mainDiv").css("height", "100%");
  
if ($(document).width() < 500) {
  
  $(".appearText").css("font-size", "100%");
  
} else if ($(document).width() < 850) {
  
  $(".appearText").css("font-size", "130%");
  
} else if ($(document).width() < 1300) {
  
  $(".appearText").css("font-size", "160%");
  
} else {
  
  $(".appearText").css("font-size", "200%");
  
}

});

var tweetQuote = "";

$(document).ready(function() {

  $("#button").on("click", function() {

    $.ajax({

      type: 'GET',
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en&callback=",
      dataType: 'json',
      success: function(data) {
        
        $("#randomQuote").html(data.quoteText);

        if (data.quoteAuthor !== "") {

          $("#randomQuoteAuthor").html(data.quoteAuthor);

        } else {

          $("#randomQuoteAuthor").html("Anonymous");

        }
        
        var quoteHeight = parseInt($("#randomQuote").css("height"));
          
        $("#scrollDiv").css("height", quoteHeight * 2.5 + "px");
        
      }
      
    });
    
  });

});

$("#tweetThis").on("click", function (){
  
  $("#tweetThis").attr("href", "https://twitter.com/intent/tweet?text=" + $("#randomQuote").html() + " " +      $("#randomQuoteAuthor").html());
    
});
