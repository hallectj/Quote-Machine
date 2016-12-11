$(document).ready(function(){
  $(".quote_btn").on("click", function(){
    changeColors();
    callQuotes();
  });
});

function changeColors(){
  var colorBank = [
    "#D17B2F", "#D1F043", "#7AA878", "#255C32",
    "#19837C", "#53477F", "#F84156", "#627064"
  ];
    
  var randomNum = Math.floor(Math.random() * (8+1));
  $("#page_wrapper").fadeOut(300, function(){
    $(".affected_color_bg").css({
      "background-color": colorBank[randomNum] 
    });
    
    $(".affected_color").css({
      "color": colorBank[randomNum]
    });
    $("#page_wrapper").fadeIn(1000);
  });
}

function callQuotes(){
  var quote = "", author = "";
  $.ajax({
    type: "POST",
    dataType: "json",
    headers: {
      "X-Mashape-Key": "i6kz29N5ZWmshFHlxM6c3p0bRe1zp1mnXHejsnqt5YIUCI2TML",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    
    success: function(response){
      quote = response.quote;
      author = response.author;
      
      $(".quote").text(quote);
      $(".author").text(author);
    }
  });
}