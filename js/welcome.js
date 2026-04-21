document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".log h5");
  var continueBtn = document.querySelector(".container a");

  if (!tabs.length || !continueBtn) {
    return;
  }

  var activeTab = "Login";

  tabs.forEach(function (tab) {
    tab.style.cursor = "pointer";
    tab.addEventListener("click", function () {
      tabs.forEach(function (item) {
        item.classList.remove("in");
      });
      tab.classList.add("in");
      activeTab = tab.textContent.trim();
    });
  });

  continueBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (activeTab === "Signup") {
      window.location.href = "./signup.html";
      return;
    }
    window.location.href = "./login.html";
  });
});
