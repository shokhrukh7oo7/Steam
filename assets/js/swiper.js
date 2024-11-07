// Glider configuration
new Glider(document.getElementById("slider"), {
  // Optional parameters
  slidesToShow: 1,
  slidesToScroll: 1,
  //   draggable: true,
  rewind: true,
  duration: 0.5,
  // dots: ".pagination",
  arrows: {
    prev: ".slider-prev",
    next: ".slider-next",
  },

  // Responsive breakpoints
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        scrollLock: false,
        rewind: true,
      },
    },
  ],
});

// swiper nasted swiper js
const sliderImages = document.querySelectorAll(".slider-image");

sliderImages.forEach((sliderImage) => {
  const topImg = sliderImage.querySelector(".switcher-top img");
  const bottomImgs = sliderImage.querySelectorAll(".switcher-bottom img");

  bottomImgs.forEach((img) => {
    img.addEventListener("click", () => {
      topImg.src = img.src;
    });
  });
});
//

