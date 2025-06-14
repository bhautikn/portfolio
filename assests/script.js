const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
});



// script for add progress 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.progress').forEach(bar => {
        bar.style.width = bar.getAttribute('data-level') + '%';
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector('.skills-section'));


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}