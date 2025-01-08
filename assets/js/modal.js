// Get elements for modals and overlay
const showRequestBtn = document.getElementById("leave-request-btn");
const requestModal = document.getElementById("request-modal");
const closeRequestBtn = document.getElementById("close-btn");

const showOrderCallBtn = document.getElementById("order-call-btn");
const orderModal = document.getElementById("order-call-modal");
const closeOrderBtn = document.getElementById("order-close-btn");
const overlay = document.getElementById("overlay");

const buyButtons = document.querySelectorAll('#buy-btn');

const serviceBtn = document.getElementById("service-leave-request-btn");
// Toggle modal visibility
const toggleModal = (modal, show = true) => {
  modal.classList.toggle("hidden", !show);
  overlay.classList.toggle("hidden", !show);
};

// Event handlers for showing and hiding modals
showRequestBtn.addEventListener("click", () => toggleModal(requestModal, true));
closeRequestBtn.addEventListener("click", () => toggleModal(requestModal, false));

if (serviceBtn) {
  serviceBtn.addEventListener("click", () => toggleModal(requestModal, true));
}

showOrderCallBtn.addEventListener("click", () => toggleModal(orderModal, true));
closeOrderBtn.addEventListener("click", () => toggleModal(orderModal, false));

// Hide modals when overlay is clicked
overlay.addEventListener("click", () => {
  toggleModal(requestModal, false);
  toggleModal(orderModal, false);
});

// Add event listeners to all buy buttons
buyButtons.forEach((button) => {
  button.addEventListener("click", () => toggleModal(requestModal, true));
});

// Close modals with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleModal(requestModal, false);
    toggleModal(orderModal, false);
  }
});

// SERVICE PAGE VIDEO SECTION
const video = document.querySelector("video");
const playButton = document.querySelector(".play-button");

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "flex";
  }
}

if (video) {
  video.addEventListener("play", () => {
    playButton.style.display = "none";
  });
  video.addEventListener("pause", () => {
    playButton.style.display = "flex";
  });
}

// products page image switcher js start
const topImage = document.querySelector(".left-switcher-wrapper .top img");
const bottomImage = document.querySelectorAll(
  ".left-switcher-wrapper .bottom img"
);

bottomImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    topImage.src = img.src;
  });
});
// products page image switcher js end

new Glider(document.querySelector(".glider"), {
  slidesToScroll: 1,
  slidesToShow: 4.5,
  draggable: true,
  loop: true,
  dots: false,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // Для экранов шириной 1024px и больше
      breakpoint: 1200,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
      },
    },
    {
      // Для экранов шириной 768px и больше
      breakpoint: 992,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      // Для экранов шириной 576px и больше
      breakpoint: 576,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      // Для экранов меньше 576px
      breakpoint: 0,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
});
