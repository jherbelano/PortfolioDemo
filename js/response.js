window.addEventListener('DOMContentLoaded', function(){
  footerDate();
  createRainAnimation(document.getElementById('rain-container'));
  setInterval(function(){ 
    plusSlides(1);
}, 6000);
});

function footerDate(){
  const date = document.querySelector("#date");
  date.innerHTML = new Date().getFullYear();
}

function menuClicked() {
    const menuToggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// function menuItemClicked() {
//   var menuDiv = document.querySelector('.menu');
//   menuDiv.classList.remove('active');
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("btnUp").style.visibility = "visible";
  } else {
    document.getElementById("btnUp").style.visibility = "hidden";
  }
}

function run() {
  var image = document.getElementById('background');
  image.onload = function () {
      var engine = new RainyDay({
          image: this
      });
      engine.rain([
          [3, 2, 2]
      ], 100);
  };
  image.crossOrigin = 'anonymous';
  image.src = '../img/nature_wet.jpg';
}
