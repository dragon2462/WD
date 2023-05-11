navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = "";
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
       }
    });
    // Smooth scroll effect for internal links
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
  const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active'); /* toggle the visibility of the navigation menu */
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Get the message and close button elements
const message = document.getElementById('cookie-consent-message');
const closeBtn = document.getElementById('cookie-consent-close');

// Check if the user has already closed the message
if (localStorage.getItem('cookie-consent-closed') === 'true') {
  message.style.display = 'none'; // hide the message if already closed
} else {
  message.style.display = 'block'; // show the message if not closed yet
}

// Add event listener to the close button
closeBtn.addEventListener('click', function() {
  localStorage.setItem('cookie-consent-closed', 'true'); // set the message to closed in localStorage
  message.style.display = 'none'; // hide the message
});

