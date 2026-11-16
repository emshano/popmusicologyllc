// Progressive enhancement: every page and download works without JavaScript.
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menu?.getAttribute("aria-expanded") === "true"
  ) {
    menu.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    menu.focus();
  }
});
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const rows = [...document.querySelectorAll(".chart-row")];
function filterCollection() {
  const term = search.value.trim().toLocaleLowerCase();
  let count = 0;
  rows.forEach((row) => {
    const visible =
      row.dataset.search.includes(term) &&
      (category.value === "all" || row.dataset.category === category.value);
    row.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector("#result-count").textContent =
    `${count} ${count === 1 ? "work" : "works"}`;
  document.querySelector("#no-results").hidden = count > 0;
}
if (search && category) {
  search.addEventListener("input", filterCollection);
  category.addEventListener("change", filterCollection);
  filterCollection();
}
document.querySelector("#year").textContent = new Date().getFullYear();
