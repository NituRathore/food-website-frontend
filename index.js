// slider element

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".review .slide"); 
  let count = 0;

  
  slides.forEach((slide, index) => {
    slide.style.position = "absolute"; 
    slide.style.left = `${index * 100}%`; 
  });

  function slider() {
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${count * 100}%)`; 
      slide.style.transition = "transform 0.5s ease-in-out"; 
    });
  }

  
  setInterval(() => {
    count++;
    if (count >= slides.length) {
      count = 0; 
    }
    slider();
  }, 2000); 
});


// dark mode light mode slide

let sevetheme = localStorage.getItem('theme') || 'light';
document.body.className = sevetheme

const toggleLight = document.getElementById('toggleLight');
const toggleDark = document.getElementById('toggleDark')

toggleLight.addEventListener('click', function() {
  document.body.className = 'light';
  localStorage.setItem('theme', 'light');
  toggleLight.classList.add('active');
  toggleDark.classList.remove('active');

});

toggleDark.addEventListener('click', function() {
  document.body.className = 'dark';
  localStorage.setItem('theme', 'dark');
  toggleDark.classList.add('active');
  toggleLight.classList.remove('active');

});

if (sevetheme === 'light'){
  toggleLight.classList.add('active');
}
else{
  toggleDark.classList.add('active');
}


// navbar 

let baricon = document.getElementById("bar");
let ul = document.querySelector("ul");


baricon.addEventListener("click", function(){
  ul.classList.toggle("showitem");
  if(ul.className == "showitem"){
    baricon.className = "fa-solid fa-xmark";
  }

  else{
    baricon.className = "fa-solid fa-bars";
  }
})


