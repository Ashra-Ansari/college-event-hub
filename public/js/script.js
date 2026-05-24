// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false,
//     );
//   });
// })();

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
