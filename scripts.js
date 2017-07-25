var navToggle = document.getElementById('nav-toggle');
//identify nav items
var navItems = document.getElementById('nav-items');
//buttons is waiting
navToggle.addEventListener('click',function(){
  navItems.classList.toggle('mobile-nav-hidden');
});