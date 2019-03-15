var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var news = JSON.parse(this.responseText);
    document.getElementById("news1").innerHTML = news.news1;
      console.log(news.news1);
  }
};
xmlhttp.open("GET", "news.json", true);
xmlhttp.send();
