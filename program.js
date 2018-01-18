
$(document).ready(function() {
    var long;
    var lat;
    
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    var api = "https://fcc-weather-api.glitch.me/api/current?lat="+ lat +"&lon="+ long +"";
    $.getJSON(api, function(data){
      $("#location").text(data.name);
      $("#temperature").text(data.main.temp + " °");
      document.getElementById("icon").src=(data.weather[0].icon);
      $("#description").text(data.weather[0].main);
      var degree = document.getElementById("degree").textContent;
      var degreeValue = data.main.temp;
      var fvalue = 0;
      console.log(degreeValue);
      $("#degree").on("click", function(){
      if (degree === "C"){
        fvalue = Math.round(degreeValue * 9 / 5 + 32);
        $("#temperature").text(fvalue + " °");
        $("#degree").text("F");
        degree = document.getElementById("degree").textContent;
      } else if (degree === "F"){
        $("#temperature").text(degreeValue+ " °");
        $("#degree").text("C");
        degree = document.getElementById("degree").textContent;
      };
      });
    });
  });    
  };
  });