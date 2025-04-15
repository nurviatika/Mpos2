
function toggleFAQ(element) {
  const content = element.parentElement.querySelector(".faq-content");
  const icon = element.querySelector("img");

  if (!content || !icon) return;

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.src = "/min.svg";
    icon.alt = "minus";
  } else {
    content.classList.add("hidden");
    icon.src = "/plus.svg";
    icon.alt = "plus";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("-translate-y-full");
    navLinks.classList.toggle("translate-y-0");
  });

  closeMenu.addEventListener("click", function () {
    navLinks.classList.add("-translate-y-full");
    navLinks.classList.remove("translate-y-0");
  });

  new Swiper(".frame-image", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    initialSlide: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      375: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 15 },
    },
  });

  const swiper = new Swiper(".features-image", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
  });

  document.querySelector(".next-slide").addEventListener("click", function () {
    swiper.slideNext();
  });

  document.querySelector(".prev-slide").addEventListener("click", function () {
    swiper.slidePrev();
  });

  const faqItems = document.querySelectorAll(".faq-item > div:first-child");
  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      toggleFAQ(item);
    });
  });

  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
