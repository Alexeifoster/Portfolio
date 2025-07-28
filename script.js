let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

// scroll fader for hero-section
function updateHeroTextOpacity() {
  const herotext = document.querySelector('.hero-content');
  const heroSection = document.querySelector('.hero-section');

  const rect = heroSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Custom target: fade out by 90% of viewport height
  const targetHeight = windowHeight * 1.0;
  const scrollProgress = 1 - rect.bottom / targetHeight;

  let opacity = 1 - scrollProgress * 2;
  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  herotext.style.opacity = opacity;

  if (opacity === 0) {
    herotext.classList.add("hero-inactive");
  } else {
    herotext.classList.remove("hero-inactive");
  }
}

// Bind to scroll
window.addEventListener('scroll', updateHeroTextOpacity);

// Also run once on page load (fixes refresh-in-scrolled-position bug)
window.addEventListener('DOMContentLoaded', updateHeroTextOpacity);

window.addEventListener('DOMContentLoaded', () => {
  const herotext = document.querySelector('.hero-content');
  
  // Add this first to avoid flashing unstyled text
  herotext.classList.add('js-visible');

  updateHeroTextOpacity(); // Then immediately run the scroll logic
});
