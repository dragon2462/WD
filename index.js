   var scrollToTop = document.getElementById("scrollUp");

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