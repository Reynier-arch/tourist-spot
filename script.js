// script.js

// Simple testimonial slider
const testimonials = [
    "\u201cBest trip of my life!\u201d — Jane D.",
    "\u201cUnforgettable views and friendly locals.\u201d — Mark T.",
    "\u201cPerfect family getaway destination!\u201d — Lisa R.",
  ];
  
  let testimonialIndex = 0;
  const testimonialSlider = document.querySelector(".testimonial-slider");
  
  function showTestimonial() {
    testimonialSlider.innerHTML = `<p>${testimonials[testimonialIndex]}</p>`;
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  }
  
  setInterval(showTestimonial, 4000);
  showTestimonial();
  