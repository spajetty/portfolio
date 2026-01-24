function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav button
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Typewriter effect
const typewriterText = "Hi, I'm Jetty";
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
  if (charIndex < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150); // Adjust speed here (lower = faster)
  } else {
    // Remove cursor after typing is complete
    setTimeout(() => {
      typewriterElement.style.borderRight = 'none';
    }, 1000);
  }
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500); // Start after 500ms delay
});