const showBtn = document.getElementById("leave-request-btn");
const requestModal = document.getElementById("request-modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// Function remove hidden
const removeHidden = () => {
  requestModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function add hidden
const addHidden = () => {
  requestModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
