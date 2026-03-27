const menuGrid = document.getElementById("menu-grid");
const chipsWrap = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const mobileCategoryChips = document.getElementById("mobileCategoryChips");
const mobileBottomNav = document.getElementById("mobileBottomNav");
const orderFormModal = document.getElementById("orderFormModal");
const orderFormBackdrop = document.getElementById("orderFormBackdrop");
const orderFormSummary = document.getElementById("orderFormSummary");
const orderQuantity = document.getElementById("orderQuantity");
const orderAccompaniment = document.getElementById("orderAccompaniment");
const orderAccompanimentOptions = document.getElementById("orderAccompanimentOptions");
const orderNote = document.getElementById("orderNote");
const continueOrderBtn = document.getElementById("continueOrderBtn");
const closeOrderFormBtn = document.getElementById("closeOrderForm");
const orderContacts = [
  { name: "Acacia", number: "256794417777" },
  { name: "Munyonyo", number: "256759859795" },
  { name: "Lubowa", number: "256709769548" },
  { name: "Ntinda", number: "256766550001" },
  { name: "Naalya", number: "256781800800" },
  { name: "Kansanga", number: "256709410410" }
];
const accompanimentOptions = {
  Coffee: ["None", "No sugar", "Extra hot", "Oat milk", "Takeaway"],
  Burger: ["None", "Fries", "Salad", "Extra sauce", "Takeaway"],
  Pizza: ["None", "Extra cheese", "Chili flakes", "Ketchup", "Takeaway"],
  Juice: ["None", "No ice", "Less sugar", "Takeaway"],
  Default: ["None", "Takeaway"]
};

const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeToggleSidebar = document.getElementById("themeToggleSidebar");

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const itemPopup = document.getElementById("itemPopup");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupPrice = document.getElementById("popupPrice");
const popupDesc = document.getElementById("popupDesc");
const popupOrderBtn = document.getElementById("popupOrderBtn");
const popupClose = document.querySelector(".popup-close");
const popupBackdrop = document.querySelector(".item-popup-backdrop");
const cartFab = document.getElementById("cartFab");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotalItems = document.getElementById("cartTotalItems");
const closeCartBtn = document.getElementById("closeCartBtn");
const checkoutCartBtn = document.getElementById("checkoutCartBtn");
const cartDrawerBackdrop = document.querySelector(".cart-drawer-backdrop");
let activeMenuGroup = "Main Menu";
let activeCategory = "All";
let searchTerm = "";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const menuGroups = {
  "Breakfast Menu": ["Breakfast Menu"],

  "Main Menu": [
    "Starters",
    "Fresh Salads",
    "Main Course (chicken)",
    "Main Course (beef)",
    "Main Course (fish)",
    "Habesha",
    "Pasta",
    "Burgers",
    "Sandwich",
    "Pizzeria",
    "Bakery",
    "Cookies",
    "Pastries"
  ],

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
  ]
};

function getCategories(items) {
  const allowedCategories = menuGroups[activeMenuGroup] || [];
  return ["All", ...allowedCategories];
}

qtyMinus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = Math.max(1, current - 1);
});

qtyPlus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = current + 1;
});

function openItemPopup(item) {
  popupImage.src = item.image;
  popupName.textContent = item.name;
  popupPrice.textContent = item.price;
  popupDesc.textContent = item.description;

  itemPopup.classList.remove("hidden");

  popupOrderBtn.onclick = () => {
    openOrderForm(item); // your existing function
    closeItemPopup();
  };
}
function closeItemPopup() {
  itemPopup.classList.add("hidden");
}
popupClose?.addEventListener("click", closeItemPopup);
popupBackdrop?.addEventListener("click", closeItemPopup);

function createChips() {
  const categories = getCategories(menuItems);

  chipsWrap.innerHTML = categories
    .map(
      category => `
        <button
          class="${category === activeCategory ? "chip active" : "chip"}"
          data-category="${category}"
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

function getAccompaniments(category) {
  return accompanimentOptions[category] || accompanimentOptions.Default;
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

function renderAccompanimentOptions(category) {
  const options = getAccompaniments(category);

  if (!orderAccompanimentOptions || !orderAccompaniment) return;

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

function filterMenu() {
  const allowedCategories = menuGroups[activeMenuGroup] || [];

  return menuItems.filter(item => {
    const menuMatch = allowedCategories.includes(item.category);
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const term = searchTerm.trim().toLowerCase();
    const text = `${item.name} ${item.category} ${item.description} ${item.tag || ""}`.toLowerCase();
    const searchMatch = !term || text.includes(term);

    return menuMatch && categoryMatch && searchMatch;
  });
}

const orderPicker = document.getElementById("orderPicker");
const orderPickerBackdrop = document.getElementById("orderPickerBackdrop");
const orderPickerList = document.getElementById("orderPickerList");
const orderPickerText = document.getElementById("orderPickerText");
const closeOrderPickerBtn = document.getElementById("closeOrderPicker");

let selectedOrderItem = null;
let preparedOrderDetails = null;


function openOrderPicker(item) {
  selectedOrderItem = item;

  orderPickerText.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${item.price}<br>
    <strong>Quantity:</strong> ${item.quantity}<br>
    <strong>Accompaniment:</strong> ${item.accompaniment}<br>
    <strong>Description:</strong> ${item.description}<br>
    <strong>Special instructions:</strong> ${item.note || "None"}<br><br>
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
lockBodyScroll();

  orderPickerList.querySelectorAll(".order-contact-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const number = btn.dataset.number;
      const name = btn.dataset.name;

      const message = encodeURIComponent(
        `Hello ${name}, I would like to order:\n\n` +
        `Item: ${selectedOrderItem.name}\n` +
        `Category: ${selectedOrderItem.category}\n` +
        `Price: ${selectedOrderItem.price}\n` +
        `Quantity: ${selectedOrderItem.quantity}\n` +
        `Accompaniment: ${selectedOrderItem.accompaniment}\n` +
        `Description: ${selectedOrderItem.description}\n` +
        `Special instructions: ${selectedOrderItem.note || "None"}`
      );

      window.open(`https://wa.me/${number}?text=${message}`, "_blank");
      closeOrderPicker();
    });
  });
}


function closeOrderPicker() {
  orderPicker?.classList.add("hidden");
  orderPickerBackdrop?.classList.add("hidden");
  unlockBodyScroll();
}

function openOrderForm(item) {
  selectedOrderItem = item;
  preparedOrderDetails = null;

  orderFormSummary.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${item.price}<br>
    <strong>Description:</strong> ${item.description}
  `;

  orderQuantity.value = 1;
  renderAccompanimentOptions(item.category);
  orderNote.value = "";

  orderFormModal.classList.remove("hidden");
  orderFormBackdrop.classList.remove("hidden");
  lockBodyScroll();
}

function closeOrderForm() {
  orderFormModal?.classList.add("hidden");
  orderFormBackdrop?.classList.add("hidden");
  unlockBodyScroll();
}

function continueOrderFlow() {
  const quantity = orderQuantity.value || "1";
  const accompaniment = orderAccompaniment.value || "None";
  const note = orderNote.value.trim();

preparedOrderDetails = {
  ...selectedOrderItem,
  quantity,
  accompaniment,
  note
};

  closeOrderForm();

  setTimeout(() => {
    openOrderPicker(preparedOrderDetails);
  }, 50);
}

function createCard(item) {
  return `
    <article class="menu-card reveal-card">
      <div class="menu-thumb">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-image">` : ""}
        ${item.tag ? `<span class="menu-badge">${item.tag}</span>` : ""}
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
          <span class="menu-tag">${item.tag || ""}</span>
          <div style="display:grid; gap:8px; width:100%;">
            <button
              class="menu-order-btn add-cart-trigger"
              type="button"
              data-item="${item.name}"
              data-category="${item.category}"
              data-price="${item.price}"
              data-description="${item.description}"
              data-image="${item.image || ""}"
            >
              Add to Cart
            </button>

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
      </div>
    </article>
  `;
}

orderPickerBackdrop?.addEventListener("click", closeOrderPicker);
closeOrderPickerBtn?.addEventListener("click", closeOrderPicker);

continueOrderBtn?.addEventListener("click", continueOrderFlow);
orderFormBackdrop?.addEventListener("click", closeOrderForm);
closeOrderFormBtn?.addEventListener("click", closeOrderForm);

function renderMenu() {
  const filtered = filterMenu();

  if (!filtered.length) {
    menuGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  menuGrid.innerHTML = filtered.map(item => createCard(item)).join("");

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

function lockBodyScroll() {
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  document.body.style.overflow = "";
}

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
  lockBodyScroll();
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
  unlockBodyScroll();
}

function initMobileBottomNav() {
  if (!mobileBottomNav) return;

  const links = mobileBottomNav.querySelectorAll(".mobile-bottom-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");

      activeMenuGroup = link.dataset.menuGroup;
      activeCategory = "All";

      createChips();
      renderMenu();
      syncMobileCategoryChips();

      document.getElementById("categoryBar")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
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

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = totalCount;
  cartTotalItems.textContent = totalCount;

  if (totalCount > 0) {
    cartFab.classList.remove("hidden");
  } else {
    cartFab.classList.add("hidden");
  }

  if (!cart.length) {
    cartItems.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image || ""}" alt="${item.name}">
      <div>
        <div class="cart-item-name">${item.name}</div>
<div class="cart-item-meta">
  ${item.category ? `${item.category}<br>` : ""}
  ${item.price}<br>
  ${item.accompaniment ? `Accompaniment: ${item.accompaniment}<br>` : ""}
  ${item.note ? `Note: ${item.note}` : ""}
</div>
        <div class="cart-item-actions">
          <button class="cart-qty-btn" type="button" data-action="decrease" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="cart-qty-btn" type="button" data-action="increase" data-index="${index}">+</button>
          <button class="cart-remove-btn" type="button" data-action="remove" data-index="${index}">Remove</button>
        </div>
      </div>
    </div>
  `).join("");
}

function addToCart(item) {
  const existingIndex = cart.findIndex(cartItem =>
    cartItem.name === item.name &&
    cartItem.accompaniment === item.accompaniment &&
    cartItem.note === item.note
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push({ ...item });
  }

  saveCart();
  updateCartUI();
}

function openCart() {
  cartDrawer.classList.remove("hidden");
  lockBodyScroll();
}

function closeCart() {
  cartDrawer.classList.add("hidden");
  unlockBodyScroll();
}

function handleCartAction(action, index) {
  const item = cart[index];
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  if (action === "remove") {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function checkoutCart() {
  if (!cart.length) return;

  closeCart();

  const combinedOrder = {
    name: "Cart Order",
    category: "Multiple Items",
    price: "",
    description: cart.map(item =>
      `Item: ${item.name}
Category: ${item.category}
Price: ${item.price}
Quantity: ${item.quantity}
${item.accompaniment ? `Accompaniment: ${item.accompaniment}` : ""}
${item.note ? `Special instructions: ${item.note}` : ""}`
    ).join("\n\n")
  };

  openOrderPicker(combinedOrder);
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

menuGrid?.addEventListener("click", (event) => {
  // ADD TO CART
  const addBtn = event.target.closest(".add-cart-trigger");
  if (addBtn) {
    const item = {
      name: addBtn.dataset.item,
      category: addBtn.dataset.category,
      price: addBtn.dataset.price,
      description: addBtn.dataset.description,
      image: addBtn.dataset.image,
      quantity: 1,
      accompaniment: "",
      note: ""
    };

    addToCart(item);
    return;
  }

  // ORDER BUTTON
  const orderBtn = event.target.closest(".order-trigger");
  if (orderBtn) {
    openOrderForm({
      name: orderBtn.dataset.item,
      category: orderBtn.dataset.category,
      price: orderBtn.dataset.price,
      description: orderBtn.dataset.description
    });
  }
});

cartFab?.addEventListener("click", openCart);
closeCartBtn?.addEventListener("click", closeCart);
cartDrawerBackdrop?.addEventListener("click", closeCart);
checkoutCartBtn?.addEventListener("click", checkoutCart);

cartItems?.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const index = Number(button.dataset.index);
  handleCartAction(action, index);
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

updateCartUI();
