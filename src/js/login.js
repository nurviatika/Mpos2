const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index === 0) {
        return `<span class="${className} w-[32px] h-[10px] rounded-full bg-[#2865FF] hover:bg-[#7c9ae6] block"></span>`;
      } else {
        return `<span class="${className} w-[10px] h-[10px] rounded-full bg-[#2865FF] hover:bg-[#7c9ae6] block"></span>`;
      }
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("passwordInput");
  const eyeIcon = document.getElementById("eyeSlashIcon");
  const eyeSlashIcon = document.getElementById("eyeIcon");

  eyeIcon.addEventListener("click", togglePassword);
  eyeSlashIcon.addEventListener("click", togglePassword);

  eyeIcon.style.display = "block";
  eyeSlashIcon.style.display = "none";
  function togglePassword() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.style.display = "none";
      eyeSlashIcon.style.display = "block";
    } else {
      passwordInput.type = "password";
      eyeIcon.style.display = "block";
      eyeSlashIcon.style.display = "none";
    }
  }
});
