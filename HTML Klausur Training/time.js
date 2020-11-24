"use strict";

(function() {
  function startUpdatingTimeIn(selector) {
    const containers = document.querySelectorAll(selector);

    for (const container of containers) {
      setInterval(function updateTime() {
        const now = new Date();

        const hours = padNumber(now.getHours());
        const minutes = padNumber(now.getMinutes());
        const seconds = padNumber(now.getSeconds());

        const time = hours + ":" + minutes + ":" + seconds;
        // oder kürzer:
        // const time = `${hours}:${minutes}:${seconds} Uhr`;

        container.innerHTML = time;
      }, 100);
    }
  }

  function padNumber(n) {
    return n.toString().padStart(2, "0");
  }

  window.timeModule = {
    startUpdatingTimeIn
  };
})();
