
/* sticky menu on scroll */
window.addEventListener('scroll', function() {
    let element = document.querySelector('.nav-scroll');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { // Adjust this value as per your requirement
      element.classList.add('slide-in-top');
      element.classList.remove('dark-nav');
      element.style.backgroundColor = 'rgba(33, 33, 33, 0.80)';
    } else {
      element.classList.remove('slide-in-top');
      element.classList.add('dark-nav');
      element.removeAttribute("style");
    }
  });

