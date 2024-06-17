   var mybutton = document.getElementById("myBtn");

   function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           mybutton.style.display = "block";
       } else {
           mybutton.style.display = "none";
       }
   }

   function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}