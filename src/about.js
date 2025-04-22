document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".ourteamslider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    slidePerGroup: 2,
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
})