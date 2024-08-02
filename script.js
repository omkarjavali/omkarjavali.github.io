var typed = new Typed(".auto-type",{
    strings: ["Computer Science Graduate", "Python Developer", "AI Enthusiast", "Data Science Enthusiast"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
})

// Add animation to project grid
// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});