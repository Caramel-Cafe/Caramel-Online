const menuGrid = document.getElementById("menu-grid");
const chipsWrap = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const mobileCategoryChips = document.getElementById("mobileCategoryChips");
const mobileBottomNav = document.getElementById("mobileBottomNav");
const orderContacts = [
  { name: "Aca", number: "256794417777" },
  { name: "Mun", number: "256759859795" },
  { name: "Lub", number: "256709769548" }
];

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeToggleSidebar = document.getElementById("themeToggleSidebar");

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

let activeCategory = "All";
let searchTerm = "";

function getCategories(items) {
  return ["All", ...new Set(items.map(item => item.category))];
}



function createChips() {
  const categories = getCategories(menuItems);

  chipsWrap.innerHTML = categories
    .map(
      (category, index) => `
        <button
          class="${category === activeCategory ? "chip active" : "chip"}"
          data-category="${category}"
          style="animation-delay:${index * 0.04}s"
        >
          ${category}
        </button>
      `
    )
    .join("");

  chipsWrap.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      createChips();
      renderMenu();
      syncMobileCategoryChips();
    });
  });
}

function syncMobileCategoryChips() {
  if (!mobileCategoryChips || !chipsWrap) return;

  mobileCategoryChips.innerHTML = "";

  chipsWrap.querySelectorAll(".chip").forEach(chip => {
    const clone = chip.cloneNode(true);

    clone.addEventListener("click", () => {
      activeCategory = clone.dataset.category;
      createChips();
      renderMenu();
      syncMobileCategoryChips();
    });

    mobileCategoryChips.appendChild(clone);
  });
}

function filterMenu() {
  return menuItems.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const term = searchTerm.trim().toLowerCase();
    const text = `${item.name} ${item.category} ${item.description} ${item.tag}`.toLowerCase();
    const searchMatch = !term || text.includes(term);
    return categoryMatch && searchMatch;
  });
}

const orderPicker = document.getElementById("orderPicker");
const orderPickerBackdrop = document.getElementById("orderPickerBackdrop");
const orderPickerList = document.getElementById("orderPickerList");
const orderPickerText = document.getElementById("orderPickerText");
const closeOrderPickerBtn = document.getElementById("closeOrderPicker");

let selectedOrderItem = null;

function openOrderPicker(item) {
  selectedOrderItem = item;

  orderPickerText.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${item.price}<br>
    <strong>Description:</strong> ${item.description}<br><br>
    Choose who should handle this order.
  `;

  orderPickerList.innerHTML = orderContacts
    .map(
      contact => `
        <button
          type="button"
          class="order-contact-btn"
          data-number="${contact.number}"
          data-name="${contact.name}"
        >
          ${contact.name}
        </button>
      `
    )
    .join("");

  orderPicker.classList.remove("hidden");
  orderPickerBackdrop.classList.remove("hidden");

  orderPickerList.querySelectorAll(".order-contact-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const number = btn.dataset.number;
      const name = btn.dataset.name;

      const message = encodeURIComponent(
        `Hello ${name}, I would like to order:\n\n` +
        `Item: ${selectedOrderItem.name}\n` +
        `Category: ${selectedOrderItem.category}\n` +
        `Price: ${selectedOrderItem.price}\n` +
        `Description: ${selectedOrderItem.description}`
      );

      window.open(`https://wa.me/${number}?text=${message}`, "_blank");
      closeOrderPicker();
    });
  });
}

function closeOrderPicker() {
  orderPicker.classList.add("hidden");
  orderPickerBackdrop.classList.add("hidden");
}

function createCard(item) {
  return `
    <article class="menu-card reveal-card">
      <div class="menu-thumb">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-image">` : ""}
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
<button
  class="menu-order-btn order-trigger"
  type="button"
  data-item="${item.name}"
  data-category="${item.category}"
  data-price="${item.price}"
  data-description="${item.description}"
>
  Order
</button>
        </div>
      </div>
    </article>
  `;
}

orderPickerBackdrop?.addEventListener("click", closeOrderPicker);
closeOrderPickerBtn?.addEventListener("click", closeOrderPicker);

function renderMenu() {
  const filtered = filterMenu();

  if (!filtered.length) {
    menuGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  menuGrid.innerHTML = filtered.map((item, index) => createCard(item, index)).join("");

document.querySelectorAll(".order-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    openOrderPicker({
      name: btn.dataset.item,
      category: btn.dataset.category,
      price: btn.dataset.price,
      description: btn.dataset.description
    });
  });
});
  requestAnimationFrame(() => {
    document.querySelectorAll(".menu-card").forEach((card, index) => {
      setTimeout(() => card.classList.add("is-visible"), index * 35);
    });

    initTiltCards();
  });
}

function applyTheme(theme) {
  const isLight = theme === "light";
  body.classList.toggle("light-mode", isLight);
  localStorage.setItem("caramel-theme", theme);
  syncThemeButtons(theme);
}

function syncThemeButtons(theme) {
  document.querySelectorAll("[data-theme-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.themeBtn === theme);
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("caramel-theme") || "dark";
  applyTheme(savedTheme);
}

function handleThemeToggle(container) {
  if (!container) return;

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-theme-btn]");
    if (!button) return;
    applyTheme(button.dataset.themeBtn);
  });
}

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
}

function initMobileBottomNav() {
  if (!mobileBottomNav) return;

  const links = mobileBottomNav.querySelectorAll(".mobile-bottom-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const topSection = document.getElementById("top");
    const menuSection = document.getElementById("menu-area");
    const contactSection = document.getElementById("contact");

    links.forEach(item => item.classList.remove("active"));

    if (contactSection && scrollY >= contactSection.offsetTop - 120) {
      mobileBottomNav.querySelector('[href="#contact"]')?.classList.add("active");
    } else if (menuSection && scrollY >= menuSection.offsetTop - 120) {
      mobileBottomNav.querySelector('[href="#menu-area"]')?.classList.add("active");
    } else if (topSection) {
      mobileBottomNav.querySelector('[href="#top"]')?.classList.add("active");
    }
  });
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("is-in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealEls.forEach(el => observer.observe(el));
}

function initTiltCards() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initMagneticButtons() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  document.querySelectorAll(".magnetic").forEach(button => {
    button.addEventListener("mousemove", e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

searchInput.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderMenu();
});

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

document.querySelectorAll(".sidebar-nav a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSidebar();
});

handleThemeToggle(themeToggle);
handleThemeToggle(themeToggleSidebar);

createChips();
renderMenu();
syncMobileCategoryChips();
initTheme();
initReveal();
initMagneticButtons();
initMobileBottomNav();
