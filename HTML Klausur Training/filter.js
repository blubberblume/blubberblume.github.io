"use strict";

(function() {
  const mainNode = document.querySelector("main");
  const filters = document.querySelector(".filter-list");

  for (const filter of filters.children) {
    filter.addEventListener("click", () => {
      mainNode.setAttribute(
        "data-active-filter",
        filter.getAttribute("data-filter-key")
      );
    });
  }

  mainNode.setAttribute("data-active-filter", "all");
})();
