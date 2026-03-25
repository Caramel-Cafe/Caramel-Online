const menuGrid = document.getElementById("menu-grid");
const chipsWrap = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

let activeCategory = "All";
let searchTerm = "";

function getCategories(items) {
  return ["All", ...new Set(items.map(item => item.category))];
}

function createChips() {
  const categories = getCategories(menuItems);

  chipsWrap.innerHTML = categories
    .map(category => {
      const activeClass = category === activeCategory ? "chip active" : "chip";
      return `<button class="${activeClass}" data-category="${category}">${category}</button>`;
    })
    .join("");

  chipsWrap.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      createChips();
      renderMenu();
    });
  });
}

function filterMenu() {
  return menuItems.filter(item => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;

    const term = searchTerm.trim().toLowerCase();
    const text = `${item.name} ${item.category} ${item.description} ${item.tag}`.toLowerCase();
    const searchMatch = !term || text.includes(term);

    return categoryMatch && searchMatch;
  });
}

function createCard(item) {
  return `
    <article class="menu-card">
      <div class="menu-thumb">
        <span class="thumb-badge">${item.category}</span>
      </div>

      <div class="menu-body">
        <div class="menu-meta">
          <span class="menu-category">${item.category}</span>
          <span class="menu-price">${item.price}</span>
        </div>

        <h4 class="menu-name">${item.name}</h4>
        <p class="menu-desc">${item.description}</p>

        <div class="menu-footer">
          <span class="menu-tag">${item.tag}</span>
          <a class="menu-order-btn" href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer">
            Order
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderMenu() {
  const filtered = filterMenu();

  if (!filtered.length) {
    menuGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  menuGrid.innerHTML = filtered.map(createCard).join("");
}

searchInput.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderMenu();
});

createChips();
renderMenu();
