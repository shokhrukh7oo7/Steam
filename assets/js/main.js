const tabsList = document.querySelectorAll(".ap-tab-list li");
const appTabContainer = document.querySelector(".ap-tab-row");
const cards = document.querySelectorAll(".card");

// Функция для отображения карточек по категории
function displayCards(dataCategory) {
  // Создаем новый контейнер .row для размещения карточек
  const row = document.createElement("div");
  row.classList.add("row");

  // Фильтруем карточки по категории
  let filteredCards;
  if (dataCategory === "all") {
    filteredCards = Array.from(cards);
  } else {
    filteredCards = Array.from(cards).filter((card) => {
      return card.getAttribute("data-category") === dataCategory;
    });
  }

  // Вставляем отфильтрованные карточки в контейнер .row
  filteredCards.forEach((card) => {
    row.appendChild(card.parentNode);
  });

  // Очищаем appTabContainer и добавляем новый .row с карточками
  appTabContainer.innerHTML = "";
  appTabContainer.appendChild(row);
}

// Событие клика по вкладкам
tabsList.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    const dataCategory = e.target.getAttribute("data-category");
    console.log(dataCategory);

    tabsList.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    // Сохраняем выбранную категорию в localStorage
    localStorage.setItem("selectedCategory", dataCategory);

    // Отображаем карточки по выбранной категории
    displayCards(dataCategory);
  });
});

// Получаем сохраненную категорию при загрузке страницы
const savedCategory = localStorage.getItem("selectedCategory") || "all";

// Устанавливаем активную вкладку и отображаем карточки
tabsList.forEach((tab) => {
  if (tab.getAttribute("data-category") === savedCategory) {
    tab.classList.add("active");
  }
});
displayCards(savedCategory);

// ================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('total-slides').textContent = totalSlides;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    document.getElementById('current-slide').textContent = index + 1;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}