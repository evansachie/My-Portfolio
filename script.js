(function () {
  "use strict";

  function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return h + ":" + m + ":" + s + " " + ampm;
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
