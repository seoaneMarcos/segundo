var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}


function localStorageFriendList(plist){

localStorage.setItem('localFriendList',)


}






function registro(){

  let datos={
  usu:""  ,
  pass:"",
  correo:"",
  nam:"",
  
  rp:"",
 pho:""
  
  };
    datos.usu=document.getElementById("usuario").value;
    datos.pass=document.getElementById("password").value;
    datos.correo=document.getElementById("mail").value;
    datos.nam=document.getElementById("nombres").value;
    datos.rp=document.getElementById("password2").value;
   datos.pho=document.getElementById("phone").value;

  
   localStorage.setItem("usuario",datos.usu);
   localStorage.setItem("nombres",datos.nam);
   localStorage.setItem("password",datos.pass);
   localStorage.setItem("Rpassword",datos.rp);
   localStorage.setItem("Correo",datos.correo);
   localStorage.setItem("Phone",datos.pho);







      }









