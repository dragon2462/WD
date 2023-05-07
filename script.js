navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = "";
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
       }
    });