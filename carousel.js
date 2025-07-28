document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-row");
  const items = document.querySelectorAll(".carousel-item");
  const nextBtn = document.querySelector(".btn-next");
  const prevBtn = document.querySelector(".btn-prev");

  let index = 0;

  function getItemsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const visible = getItemsPerSlide();
    if (index < items.length - visible) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    const visible = getItemsPerSlide();
    if (index > 0) {
      index--;
    } else {
      index = items.length - visible;
    }
    updateCarousel();
  });

  // Auto-slide
  let autoSlide = setInterval(() => {
    const visible = getItemsPerSlide();
    index = (index + 1) % (items.length - visible + 1);
    updateCarousel();
  }, 3000);

  // Resize adjustment
  window.addEventListener("resize", updateCarousel);
});
