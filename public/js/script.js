// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

const filters = document.getElementById("filters");

document.getElementById("scrollLeft").addEventListener("click", () => {
  filters.scrollBy({
    left: -220,
    behavior: "smooth",
  });
});

document.getElementById("scrollRight").addEventListener("click", () => {
  filters.scrollBy({
    left: 220,
    behavior: "smooth",
  });
});
