//FÄRGTEMA
function darkModeFunction(){
  let wrapper = document.getElementById("wrapper");
  if (document.getElementById("darkMode").checked){
    wrapper.classList.add("classLightMode");    
    document.getElementById("logo").src = "img/header3.png";
  }
  else{
    wrapper.classList.remove("classLightMode");    
    document.getElementById("logo").src = "img/header3.png";
  }
  
}
document.getElementById("darkMode").addEventListener("change", darkModeFunction);


//BILDGALLERI
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}