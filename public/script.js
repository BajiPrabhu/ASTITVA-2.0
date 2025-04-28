// You can add small interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Astitva Community!');
  
    // Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  