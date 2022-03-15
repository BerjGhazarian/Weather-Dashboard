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
    