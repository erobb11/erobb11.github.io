// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var myImage = document.getElementsByClassName("myImage");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

  captionText.innerHTML = myImage[slideIndex-1].alt;
}

// Open the Modal
function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

slideIndex = 1;
showSlides2(slideIndex);

// Thumbnail image controls
function currentSlides2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var slides2 = document.getElementsByClassName("mySlides2");
  var myImage2 = document.getElementsByClassName("myImage2");
  //var dots = document.getElementsByClassName("demo");
  var captionText2 = document.getElementById("caption2");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slides2[slideIndex-1].style.display = "block";

  captionText2.innerHTML = myImage2[slideIndex-1].alt;
}

// Open the Modal
function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

slideIndex = 1;
showSlides3(slideIndex);

// Thumbnail image controls
function currentSlides3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var slides3 = document.getElementsByClassName("mySlides3");
  var myImage3 = document.getElementsByClassName("myImage3");
  var captionText3 = document.getElementById("caption3");
  if (n > slides3.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  slides3[slideIndex-1].style.display = "block";

  captionText3.innerHTML = myImage3[slideIndex-1].alt;
}

// Open the Modal
function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

// Close the Modal
function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

slideIndex = 1;
showSlides4(slideIndex);

// Thumbnail image controls
function currentSlides4(n) {
  showSlides4(slideIndex = n);
}

function showSlides3(n) {
  var slides4 = document.getElementsByClassName("mySlides4");
  var myImage4 = document.getElementsByClassName("myImage4");
  var captionText4 = document.getElementById("caption4");
  if (n > slides4.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
