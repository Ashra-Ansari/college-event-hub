// auto-scroll

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();

          // 🔥 ADDED PART (AUTO-SCROLL TO ERROR)
          const firstInvalid = form.querySelector(":invalid");
          if (firstInvalid) {
            firstInvalid.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            firstInvalid.focus();
          }
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
