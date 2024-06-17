   // Get the button
   var mybutton = document.getElementById("myBtn");

   function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           mybutton.style.display = "block";
       } else {
           mybutton.style.display = "none";
       }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
    const scrollDuration = 1000; // Total duration of the scroll in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate the step size

    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
  }

  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}