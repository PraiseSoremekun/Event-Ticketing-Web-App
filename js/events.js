document.addEventListener("DOMContentLoaded", function () {
  var seeMoreButtons = document.querySelectorAll(".upcoming button");
  var cardSections = document.querySelectorAll(".cardgrid");
  var eventCards = document.querySelectorAll(".eventss");

  seeMoreButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var targetSection = cardSections[index] || cardSections[0];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  eventCards.forEach(function (card) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      window.location.href = "./singlevent.html";
    });
  });
});
