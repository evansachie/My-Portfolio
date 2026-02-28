(function () {
  "use strict";

  function formatTime(date) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Africa/Accra",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  }

  function updateFooterTime() {
    var el = document.getElementById("footerTime");
    if (el) el.textContent = formatTime(new Date());
  }

  updateFooterTime();
  if (document.getElementById("footerTime")) {
    setInterval(updateFooterTime, 1000);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
