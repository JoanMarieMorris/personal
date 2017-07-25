// 7. We need 2 targets for JavaScript to act on: 1) the "MENU" button; 2) the nav items (id="nav-items")

// 8. Store the IDs in variables 

var navToggle = document.getElementById('nav-toggle');

var navItems = document.getElementById('nav-items');

//9. Add an "event listener" for the button. When the button is clicked, we'll call a function

navToggle.addEventListener('click', function(){
  navItems.classList.toggle('mobile-nav-hidden');
  // 
});