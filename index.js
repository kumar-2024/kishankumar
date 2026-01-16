// portfolio.js

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact form log
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  console.log('Form submitted:', {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  });
});

// Add simple animation to image on hover (optional)
const image = document.querySelector('.image');
image.addEventListener('mouseenter', () => {
  image.style.transform = 'rotateY(-50deg) rotateX(15deg)';
});
image.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateY(-30deg) rotateX(10deg)';
});