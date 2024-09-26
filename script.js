// Get the elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show the menu when toggle is clicked
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu'); // Add class to show menu
  });
}

// Hide the menu when close is clicked
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu'); // Remove class to hide menu
  });
}
