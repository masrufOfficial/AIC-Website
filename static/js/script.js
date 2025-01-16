// This is for the menubar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// This is for the slideshow
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Function to show the correct slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index); // Show current, hide others
  });
}

// Check if buttons and slides exist before adding listeners
if (prevButton && nextButton && slides.length > 0) {
  // Add event listeners for navigation buttons
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop backward
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop forward
    showSlide(currentIndex);
  });

  // Optional: Auto-play the slideshow
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);

  // Show the first slide initially
  showSlide(currentIndex);
} else {
  console.error('Slideshow buttons or slides are missing in the DOM!');
}

  // JavaScript to handle "Show More" functionality
  const showMoreBtn = document.getElementById('show-more-btn');
  const testimonialContainer = document.getElementById('testimonial-container');
  const fadeOverlay = document.getElementById('fade-overlay');

  showMoreBtn.addEventListener('click', () => {
    testimonialContainer.style.maxHeight = 'none'; // Remove height limit
    fadeOverlay.style.display = 'none'; // Hide the fade overlay
  });


  function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  }