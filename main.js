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
  const navbar = document.getElementById("navbar");
  console.log();

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("translate-x-full");
      // navLinks.classList.toggle("translate-y-[4rem]");
      navbar.classList.toggle("menu-active");
      // navLinks.classList.toggle("opacity-0");
      // navLinks.classList.toggle("opacity-100");
      navLinks.classList.toggle("pointer-events-none");
      navLinks.classList.toggle("pointer-events-auto");
    });
  }

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
  });

  const logoMarquee = new Swiper(".logo-marquee", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  const featuresSwiperContainer = document.querySelector(".features-image");
  if (featuresSwiperContainer) {
    const swiper = new Swiper(".features-image", {
      slidesPerView: "auto",
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      slidePerGroup: 2,
      breakpoints: {
        1024: {
          slidePerGroup: 2,
        },
      },
    });

    const nextSlideBtn = document.querySelector(".next-slide");
    const prevSlideBtn = document.querySelector(".prev-slide");

    if (nextSlideBtn) {
      nextSlideBtn.addEventListener("click", function () {
        swiper.slideNext();
      });
    }

    if (prevSlideBtn) {
      prevSlideBtn.addEventListener("click", function () {
        swiper.slidePrev();
      });
    }
  }

  const faqItems = document.querySelectorAll(".faq-item > div:first-child");
  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      toggleFAQ(item);
    });
  });

  if (navbar) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        scrollTop > lastScrollTop &&
        !navbar.classList.contains("menu-active")
      ) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }
});
