

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
function closeCookieConsent() {
  var message = document.getElementById('cookie-consent-message');
  message.style.display = 'none'; // hide the message
  localStorage.setItem('cookie-consent-closed', 'true'); // set the message to closed in localStorage
}

// Check if the user has already closed the message
if (localStorage.getItem('cookie-consent-closed') === 'true') {
  var message = document.getElementById('cookie-consent-message');
  message.style.display = 'none'; // hide the message if already closed
} else {
  var message = document.getElementById('cookie-consent-message');
  message.style.display = 'block'; // show the message if not closed yet
}


