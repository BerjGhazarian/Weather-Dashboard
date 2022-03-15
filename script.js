$(document).ready(function () {
    //   Adding Event listener
    $(".btn").on("click", function (event) {
      event.preventDefault();
      var citySearch = $("#inputCity").val();
      var cityButtonEl = $("<button>");
      cityButtonEl.text(citySearch);
      cityButtonEl.attr("id", "button" + citySearch);
      cityButtonEl.attr("class", "btn-light btn-lg btn-block");
      cityButtonEl.on("click", function () {
        var text = this.textContent;
        getCity(text);
      });
      cityButtonEl.attr(
        "style",
        "margin:30px; width:80%; background-color:rgba(38, 109, 241, 0.979"
      );
      $(".card-bodyA").append(cityButtonEl);
  
      localStorage.setItem("cityName" + citySearch, citySearch);
      getCity(citySearch);
      $(".forecast").show();
    });
    var now = moment().format("(M/D/YYYY)");
//   Current weather API
    function getCity(citySearch) {
      var APIKey = "0cf9e00acc3e517c41f78060d290e7fe";
      var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        citySearch +
        "&appid=" +
        APIKey +
        "&units=imperial";
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        $(".city").text(response.name + now);
        $(".wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".temp").text("Temperature: " + response.main.temp + " ℉");
        localStorage.getItem("cityName", citySearch);
  
        $("#weather-icon").attr(
          "src",
          "https://openweathermap.org/img/wn/" +
            response.weather[0].icon +
            "@2x.png"
        );
        var lat = response.coord.lat;
        var long = response.coord.lon;