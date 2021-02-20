$(document).ready(function(){
  $(".button").click(function () {
    go();
  });
  function go() {
    if ($("#username").val() == "") {
      $(".display").html("<span>Please Write Github UserName</span>");
    } else {
      $(".display").html("");
      $url =
        "https://api.github.com/users/" + $("#username").val() + "/repos";

      var x = $.getJSON($url, function (data) {
        data.forEach((data) => {
          var div = document.createElement("div");
          var vistars = document.createElement("div");
          var link = document.createElement("a");
          var span = document.createElement("span");
          var text = document.createTextNode(data.html_url);
          var linktext = document.createTextNode("Visit");
          var stars = document.createTextNode(data.stargazers_count);
          var spanstars = document.createElement("span");
          spanstars.append(stars);
          link.append(linktext);
          link.href = data.html_url;
          link.setAttribute("target", "_blank");
          span.append(text);
          vistars.append(link);
          vistars.append(spanstars);

          vistars.className = "vistars";
          div.append(span);
          div.append(vistars);
          $(".display").append(div);
        });
      }).fail(function () {
        $(".display").html("<span>User Not Found</span>");
      });
    }
  }
});
