const menuGrid = document.getElementById("menu-grid");
const chipsWrap = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const heroItemCount = document.getElementById("heroItemCount");

const mobileBottomNav = document.getElementById("mobileBottomNav");
const mobileCategoryDropdown = document.getElementById("mobileCategoryDropdown");
const mobileCategoryChips = document.getElementById("mobileCategoryChips");

const desktopMenuGroups = document.getElementById("desktopMenuGroups");

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

const themeToggle = document.getElementById("themeToggle");
const themeToggleSidebar = document.getElementById("themeToggleSidebar");

const cartFab = document.getElementById("cartFab");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const closeCartBtn = document.getElementById("closeCartBtn");
const checkoutCartBtn = document.getElementById("checkoutCartBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const cartDrawerBackdrop = document.querySelector(".cart-drawer-backdrop");

const orderFormModal = document.getElementById("orderFormModal");
const orderFormBackdrop = document.getElementById("orderFormBackdrop");
const orderFormSummary = document.getElementById("orderFormSummary");
const orderBranch = document.getElementById("orderBranch");
const orderQuantity = document.getElementById("orderQuantity");
const orderAccompaniment = document.getElementById("orderAccompaniment");
const orderAccompanimentOptions = document.getElementById("orderAccompanimentOptions");
const orderNote = document.getElementById("orderNote");
const continueOrderBtn = document.getElementById("continueOrderBtn");
const closeOrderFormBtn = document.getElementById("closeOrderForm");
const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");

const orderContacts = [
  { name: "Acacia", number: "256794417777" },
  { name: "Munyonyo", number: "256759859795" },
  { name: "Lubowa", number: "256709769548" },
  { name: "Ntinda", number: "256766550001" },
  { name: "Naalya", number: "256781800800" },
  { name: "Kansanga", number: "256709410410" }
];

const menuGroups = {
  "Main Menu": [
    "Starters",
    "Fresh Salads",
    "Main Course (Chicken)",
    "Main Course (Beef)",
    "Main Course (Fish)",
    "Habesha",
    "Pasta",
    "Burgers",
    "Sandwich",
    "Pizzeria"
  ],
  "Breakfast Menu": ["Breakfast Menu"],
  "Kids Menu": ["Kids Menu"],
  "Drinks Menu": [
    "Coffee",
    "Tea",
    "Smoothies",
    "Fresh Juice",
    "Mojitos",
    "Milkshake",
    "Soft Drinks",
    "Mocktails",
    "Cocktails"
  ],
    "Bakery": [
    "Cookies",
    "Pastries"
  ]
};

const mobileNavConfig = [
  { label: "Main", group: "Main Menu" },
  { label: "Drinks", group: "Drinks Menu" },
  { label: "Breakfast", group: "Breakfast Menu" },
  { label: "Kids", group: "Kids Menu" }
];

const accompanimentOptions = {
  Coffee: ["None", "No sugar", "Extra hot", "Oat milk", "Takeaway"],
  Tea: ["None", "No sugar", "Extra hot", "Takeaway"],
  Burgers: ["None", "Fries", "Salad", "Extra sauce", "Takeaway"],
  Pizzeria: ["None", "Extra cheese", "Chili flakes", "Ketchup", "Takeaway"],
  "Fresh Juice": ["None", "No ice", "Less sugar", "Takeaway"],
  Smoothies: ["None", "No ice", "Less sugar", "Takeaway"],
  Milkshake: ["None", "No ice", "Takeaway"],
  Default: ["None", "Takeaway"]
};

let activeMenuGroup = "Main Menu";
let activeCategory = "All";
let activeMobileButton = null;
let searchTerm = "";
let cart = JSON.parse(localStorage.getItem("caramel-cart")) || [];
let selectedOrderItem = null;

function formatPrice(value) {
  return `UGX ${Number(value).toLocaleString()}`;
}

function getCategoriesForGroup(groupName) {
  return ["All", ...(menuGroups[groupName] || [])];
}

function getAccompaniments(category) {
  return accompanimentOptions[category] || accompanimentOptions.Default;
}

function saveCart() {
  localStorage.setItem("caramel-cart", JSON.stringify(cart));
}

function setBodyLock(locked) {
  document.body.classList.toggle("modal-open", locked);
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  localStorage.setItem("caramel-theme", theme);

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
  setBodyLock(true);
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
  if (orderFormModal.classList.contains("hidden") && cartDrawer.classList.contains("hidden")) {
    setBodyLock(false);
  }
}

function initDesktopMenuGroups() {
  desktopMenuGroups.innerHTML = Object.keys(menuGroups)
    .map(group => `
      <button
        type="button"
        class="desktop-menu-group-btn ${group === activeMenuGroup ? "active" : ""}"
        data-menu-group="${group}"
      >
        ${group.replace(" Menu", "")}
      </button>
    `)
    .join("");

  desktopMenuGroups.querySelectorAll(".desktop-menu-group-btn").forEach(button => {
    button.addEventListener("click", () => {
      activeMenuGroup = button.dataset.menuGroup;
      activeCategory = "All";
      syncDesktopGroups();
      renderChips();
      renderMenu();
      syncMobileCategoryChips();
    });
  });
}

function syncDesktopGroups() {
  desktopMenuGroups.querySelectorAll(".desktop-menu-group-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.menuGroup === activeMenuGroup);
  });
}

function initMobileBottomNav() {
  mobileBottomNav.innerHTML = mobileNavConfig
    .map(item => `
      <button
        class="mobile-bottom-link ${item.group === activeMenuGroup ? "active" : ""}"
        type="button"
        data-menu-group="${item.group}"
      >
        ${item.label}
      </button>
    `)
    .join("");

  const links = mobileBottomNav.querySelectorAll(".mobile-bottom-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      const sameButton = activeMobileButton === link;
      const wasOpen = mobileCategoryDropdown.classList.contains("show");

      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");

      activeMobileButton = link;
      activeMenuGroup = link.dataset.menuGroup;
      activeCategory = "All";

      syncDesktopGroups();
      renderChips();
      renderMenu();
      syncMobileCategoryChips();

      if (sameButton && wasOpen) {
        closeMobileCategoryDropdown();
      } else {
        openMobileCategoryDropdown();
      }
    });
  });

  document.addEventListener("click", event => {
    const clickedNav = event.target.closest("#mobileBottomNav");
    const clickedDropdown = event.target.closest("#mobileCategoryDropdown");

    if (!clickedNav && !clickedDropdown) {
      closeMobileCategoryDropdown();
    }
  });
}

function openMobileCategoryDropdown() {
  mobileCategoryDropdown.classList.add("show");
}

function closeMobileCategoryDropdown() {
  mobileCategoryDropdown.classList.remove("show");
}

function renderChips() {
  const categories = getCategoriesForGroup(activeMenuGroup);

  chipsWrap.innerHTML = categories
    .map(category => `
      <button
        type="button"
        class="chip ${category === activeCategory ? "active" : ""}"
        data-category="${category}"
      >
        ${category}
      </button>
    `)
    .join("");

  chipsWrap.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      renderChips();
      renderMenu();
      syncMobileCategoryChips();
    });
  });
}

function syncMobileCategoryChips() {
  const categories = getCategoriesForGroup(activeMenuGroup);

  mobileCategoryChips.innerHTML = categories
    .map(category => `
      <button
        type="button"
        class="mobile-category-chip ${category === activeCategory ? "active" : ""}"
        data-category="${category}"
      >
        ${category}
      </button>
    `)
    .join("");

  mobileCategoryChips.querySelectorAll(".mobile-category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      renderChips();
      renderMenu();
      syncMobileCategoryChips();
      closeMobileCategoryDropdown();
    });
  });
}

function filterMenu() {
  const allowedCategories = menuGroups[activeMenuGroup] || [];
  const term = searchTerm.trim().toLowerCase();

  return menuItems.filter(item => {
    const menuMatch = allowedCategories.includes(item.category);
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const text = `${item.name} ${item.category} ${item.description} ${item.tag || ""}`.toLowerCase();
    const searchMatch = !term || text.includes(term);

    return menuMatch && categoryMatch && searchMatch;
  });
}

function createCard(item) {
  return `
    <article class="menu-card reveal-card">
      <div class="menu-thumb">
        ${
          item.image
            ? `<img src="${item.image}" alt="${item.name}" class="menu-image" loading="lazy">`
            : ""
        }
        ${item.tag ? `<span class="menu-badge">${item.tag}</span>` : ""}
        <span class="thumb-badge">${item.category}</span>
      </div>

      <div class="menu-body">
        <div class="menu-meta">
          <span class="menu-category">${item.category}</span>
          <span class="menu-price">${formatPrice(item.price)}</span>
        </div>

        <h4 class="menu-name">${item.name}</h4>
        <p class="menu-desc">${item.description}</p>

        <div class="menu-footer">
          <span class="menu-tag">${item.tag || "Fresh pick"}</span>

          <div class="menu-actions">
            <button
              class="menu-order-btn add-cart-trigger"
              type="button"
              data-name="${item.name}"
            >
              Add to Cart
            </button>

            <button
              class="menu-order-btn order-trigger"
              type="button"
              data-name="${item.name}"
            >
              Order Now
            </button>
          </div>
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

  requestAnimationFrame(() => {
    document.querySelectorAll(".menu-card").forEach((card, index) => {
      setTimeout(() => card.classList.add("is-visible"), index * 35);
    });
  });
}

function getItemByName(name) {
  return menuItems.find(item => item.name === name);
}

function addToCart(item) {
  const existingIndex = cart.findIndex(
    cartItem =>
      cartItem.name === item.name &&
      cartItem.branch === item.branch &&
      cartItem.accompaniment === item.accompaniment &&
      cartItem.note === item.note
  );

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += item.quantity || 1;
  } else {
    cart.push({
      ...item,
      quantity: item.quantity || 1,
      accompaniment: item.accompaniment || "None",
      note: item.note || "",
      branch: item.branch || ""
    });
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function changeCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  closeCart();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPriceValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotalItems.textContent = totalItems;
  cartTotalPrice.textContent = formatPrice(totalPriceValue);

  if (!cart.length) {
    cartFab.classList.add("hidden");
    cartItems.innerHTML = `
      <div class="empty-state glass-soft">
        <h4>Your cart is empty</h4>
        <p>Add items to start your order.</p>
      </div>
    `;
    return;
  }

  cartFab.classList.remove("hidden");

  cartItems.innerHTML = cart
    .map((item, index) => `
      <div class="cart-item">
        <img src="${item.image || "https://via.placeholder.com/200x200?text=Menu"}" alt="${item.name}">
        <div>
          <p class="cart-item-name">${item.name}</p>
          <div class="cart-item-meta">
            ${formatPrice(item.price)} • Qty ${item.quantity}<br>
            ${item.branch ? `Branch: ${item.branch}<br>` : ""}
            ${item.accompaniment ? `Accompaniment: ${item.accompaniment}<br>` : ""}
            ${item.note ? `Note: ${item.note}` : ""}
          </div>

          <div class="cart-item-actions">
            <button class="cart-qty-btn" data-action="decrease" data-index="${index}">−</button>
            <button class="cart-qty-btn" data-action="increase" data-index="${index}">+</button>
            <button class="cart-remove-btn" data-action="remove" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `)
    .join("");
}

function openCart() {
  cartDrawer.classList.remove("hidden");
  setBodyLock(true);
}

function closeCart() {
  cartDrawer.classList.add("hidden");

  if (orderFormModal.classList.contains("hidden") && !sidebar.classList.contains("open")) {
    setBodyLock(false);
  }
}

function populateBranches() {
  orderBranch.innerHTML = orderContacts
    .map(contact => `<option value="${contact.name}">${contact.name}</option>`)
    .join("");
}

function renderAccompanimentOptions(category) {
  const options = getAccompaniments(category);

  orderAccompanimentOptions.innerHTML = options
    .map(option => `
      <button
        type="button"
        class="accompaniment-chip ${option === "None" ? "active" : ""}"
        data-value="${option}"
      >
        ${option}
      </button>
    `)
    .join("");

  orderAccompaniment.value = "None";

  orderAccompanimentOptions.querySelectorAll(".accompaniment-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      orderAccompanimentOptions.querySelectorAll(".accompaniment-chip").forEach(btn => {
        btn.classList.remove("active");
      });

      chip.classList.add("active");
      orderAccompaniment.value = chip.dataset.value;
    });
  });
}

function openOrderForm(item) {
  selectedOrderItem = item;

  orderFormSummary.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${formatPrice(item.price)}
  `;

  orderQuantity.value = 1;
  orderNote.value = "";
  populateBranches();
  renderAccompanimentOptions(item.category);

  orderFormModal.classList.remove("hidden");
  orderFormBackdrop.classList.remove("hidden");
  setBodyLock(true);
}

function closeOrderForm() {
  orderFormModal.classList.add("hidden");
  orderFormBackdrop.classList.add("hidden");

  if (cartDrawer.classList.contains("hidden") && !sidebar.classList.contains("open")) {
    setBodyLock(false);
  }
}

function submitSingleOrder() {
  if (!selectedOrderItem) return;

  const branchName = orderBranch.value;
  const quantity = Math.max(1, Number(orderQuantity.value) || 1);
  const accompaniment = orderAccompaniment.value || "None";
  const note = orderNote.value.trim();

  const contact = orderContacts.find(item => item.name === branchName);
  if (!contact) return;

  const message = encodeURIComponent(
    `Hello ${contact.name}, I would like to order:\n\n` +
    `Item: ${selectedOrderItem.name}\n` +
    `Category: ${selectedOrderItem.category}\n` +
    `Price: ${formatPrice(selectedOrderItem.price)}\n` +
    `Quantity: ${quantity}\n` +
    `Accompaniment: ${accompaniment}\n` +
    `Special instructions: ${note || "None"}\n`
  );

  window.open(`https://wa.me/${contact.number}?text=${message}`, "_blank");
  closeOrderForm();
}

function checkoutCart() {
  if (!cart.length) return;

  const defaultContact = orderContacts[0];

  const messageLines = [
    `Hello ${defaultContact.name}, I would like to order:`,
    ""
  ];

  cart.forEach((item, index) => {
    messageLines.push(
      `${index + 1}. ${item.name}`,
      `Category: ${item.category}`,
      `Price: ${formatPrice(item.price)}`,
      `Quantity: ${item.quantity}`,
      `Branch: ${item.branch || "Not specified"}`,
      `Accompaniment: ${item.accompaniment || "None"}`,
      `Special instructions: ${item.note || "None"}`,
      ""
    );
  });

  messageLines.push(
    `Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`,
    `Total Price: ${formatPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}`
  );

  const message = encodeURIComponent(messageLines.join("\n"));
  window.open(`https://wa.me/${defaultContact.number}?text=${message}`, "_blank");
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

qtyMinus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = Math.max(1, current - 1);
});

qtyPlus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = current + 1;
});

menuGrid?.addEventListener("click", event => {
  const addBtn = event.target.closest(".add-cart-trigger");
  if (addBtn) {
    const item = getItemByName(addBtn.dataset.name);
    if (!item) return;

    addToCart({
      ...item,
      quantity: 1,
      accompaniment: "None",
      note: "",
      branch: ""
    });
    return;
  }

  const orderBtn = event.target.closest(".order-trigger");
  if (orderBtn) {
    const item = getItemByName(orderBtn.dataset.name);
    if (!item) return;
    openOrderForm(item);
  }
});

cartItems?.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const index = Number(button.dataset.index);

  if (action === "increase") changeCartQty(index, 1);
  if (action === "decrease") changeCartQty(index, -1);
  if (action === "remove") removeCartItem(index);
});

searchInput?.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderMenu();
});

openSidebarBtn?.addEventListener("click", openSidebar);
closeSidebarBtn?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

document.querySelectorAll(".sidebar-nav a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

cartFab?.addEventListener("click", openCart);
closeCartBtn?.addEventListener("click", closeCart);
cartDrawerBackdrop?.addEventListener("click", closeCart);
checkoutCartBtn?.addEventListener("click", checkoutCart);
clearCartBtn?.addEventListener("click", clearCart);

continueOrderBtn?.addEventListener("click", submitSingleOrder);
orderFormBackdrop?.addEventListener("click", closeOrderForm);
closeOrderFormBtn?.addEventListener("click", closeOrderForm);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeSidebar();
    closeCart();
    closeOrderForm();
    closeMobileCategoryDropdown();
  }
});

handleThemeToggle(themeToggle);
handleThemeToggle(themeToggleSidebar);

heroItemCount.textContent = `${menuItems.length}+`;
renderChips();
renderMenu();
syncMobileCategoryChips();
initDesktopMenuGroups();
initMobileBottomNav();
initTheme();
initReveal();
initMagneticButtons();
updateCartUI();
