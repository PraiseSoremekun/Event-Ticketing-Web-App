document.addEventListener("DOMContentLoaded", function () {
  var buyButtons = document.querySelectorAll(".buy-btn");
  var similarCards = document.querySelectorAll(".similar .events");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var card = button.closest(".ticket-card");
      var planName = card ? card.querySelector(".card-header h2") : null;
      var selectedPlan = planName ? planName.textContent.trim() : "this ticket";

      alert("You selected " + selectedPlan + ".");
    });
  });

  similarCards.forEach(function (card) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
