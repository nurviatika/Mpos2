document.addEventListener("DOMContentLoaded", function () {
  const passwordConfrm = document.getElementById("passwordConfrm");
  const eyeIcon = document.getElementById("eyeSlashConfrm");
  const eyeSlashIcon = document.getElementById("eyeConfrm");

  eyeIcon.addEventListener("click", togglePassword);
  eyeSlashIcon.addEventListener("click", togglePassword);

  eyeIcon.style.display = "block";
  eyeSlashIcon.style.display = "none";
  function togglePassword() {
    if (passwordConfrm.type === "password") {
      passwordConfrm.type = "text";
      eyeIcon.style.display = "none";
      eyeSlashIcon.style.display = "block";
    } else {
      passwordConfrm.type = "password";
      eyeIcon.style.display = "block";
      eyeSlashIcon.style.display = "none";
    }
  }
});
