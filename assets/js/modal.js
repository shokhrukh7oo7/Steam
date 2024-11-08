// Get elements for modals and overlay
const showRequestBtn = document.getElementById("leave-request-btn");
const requestModal = document.getElementById("request-modal");
const closeRequestBtn = document.getElementById("close-btn");

const showOrderCallBtn = document.getElementById("order-call-btn");
const orderModal = document.getElementById("order-call-modal");
const closeOrderBtn = document.getElementById("order-close-btn");
const overlay = document.getElementById("overlay");

const serviceBtn = document.getElementById("service-leave-request-btn");
// Toggle modal visibility
const toggleModal = (modal, show = true) => {
  modal.classList.toggle("hidden", !show);
  overlay.classList.toggle("hidden", !show);
};

// Event handlers for showing and hiding modals
showRequestBtn.addEventListener("click", () => toggleModal(requestModal, true));
closeRequestBtn.addEventListener("click", () =>
  toggleModal(requestModal, false)
);
serviceBtn.addEventListener("click", () => toggleModal(requestModal, true));

showOrderCallBtn.addEventListener("click", () => toggleModal(orderModal, true));
closeOrderBtn.addEventListener("click", () => toggleModal(orderModal, false));

// Hide modals when overlay is clicked
overlay.addEventListener("click", () => {
  toggleModal(requestModal, false);
  toggleModal(orderModal, false);
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

video.addEventListener("play", () => {
  playButton.style.display = "none";
});

video.addEventListener("pause", () => {
  playButton.style.display = "flex";
});
