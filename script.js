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
const cartBranchSelect = document.getElementById("cartBranchSelect");
let selectedCartBranch = localStorage.getItem("caramel-cart-branch") || "";
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
const orderType = document.getElementById("orderType");
const deliveryAddressWrap = document.getElementById("deliveryAddressWrap");
const deliveryAddress = document.getElementById("deliveryAddress");
const useCurrentLocation = document.getElementById("useCurrentLocation");
const cartDeliverySummary = document.getElementById("cartDeliverySummary");
const cartDeliveryDistance = document.getElementById("cartDeliveryDistance");
const cartDeliveryFee = document.getElementById("cartDeliveryFee");
const cartGrandTotal = document.getElementById("cartGrandTotal");
const orderAccompanimentField = document.getElementById("orderAccompanimentField");
const orderAccompanimentLabel = document.getElementById("orderAccompanimentLabel");

const orderDeliverySummary = document.getElementById("orderDeliverySummary");
const orderDeliveryDistance = document.getElementById("orderDeliveryDistance");
const orderDeliveryFee = document.getElementById("orderDeliveryFee");
const orderGrandTotal = document.getElementById("orderGrandTotal");
const cartQuickModal = document.getElementById("cartQuickModal");
const cartQuickBackdrop = document.getElementById("cartQuickBackdrop");
const closeCartQuickModalBtn = document.getElementById("closeCartQuickModal");
const cartQuickSummary = document.getElementById("cartQuickSummary");
const cartQuickAccompaniment = document.getElementById("cartQuickAccompaniment");
const cartQuickAccompanimentOptions = document.getElementById("cartQuickAccompanimentOptions");
const cartQuickNote = document.getElementById("cartQuickNote");
const confirmAddToCartBtn = document.getElementById("confirmAddToCartBtn");

let selectedCartQuickItem = null;

const orderContacts = [
  { name: "Acacia", number: "256794417777", lat: 0.31367, lng: 32.58111 },
  { name: "Munyonyo", number: "256759859795", lat: 0.29034, lng: 32.62073 },
  { name: "Lubowa", number: "256709769548", lat: 0.31784, lng: 32.58264 },
  { name: "Ntinda", number: "256766550001", lat: 0.31254, lng: 32.58587 },
  { name: "Naalya", number: "256781800800", lat: 0.30718, lng: 32.61492 },
  { name: "Kansanga", number: "256709410410", lat: 0.28561, lng: 32.62348 }
];

const branchHours = {
  Acacia: {
    weekdays: { open: "08:00", close: "23:00" },
    weekends: { open: "08:00", close: "23:59" }
  },
  Munyonyo: {
    weekdays: { open: "08:00", close: "23:00" },
    weekends: { open: "08:00", close: "23:59" }
  },
  Lubowa: {
    weekdays: { open: "08:00", close: "22:00" },
    weekends: { open: "08:00", close: "23:00" }
  },
  Ntinda: {
    weekdays: { open: "08:00", close: "22:00" },
    weekends: { open: "08:00", close: "23:00" }
  },
  Naalya: {
    weekdays: { open: "08:00", close: "22:00" },
    weekends: { open: "08:00", close: "23:00" }
  },
  Kansanga: {
    weekdays: { open: "08:00", close: "22:00" },
    weekends: { open: "08:00", close: "23:00" }
  }
};

let orderActionMode = "whatsapp"; // "whatsapp" | "cart"

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
  { label: "Kids", group: "Kids Menu" },
  { label: "Bakery", group: "Bakery" }
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
const cartOrderType = document.getElementById("cartOrderType");
const cartDeliveryWrap = document.getElementById("cartDeliveryWrap");
const cartUseCurrentLocation = document.getElementById("cartUseCurrentLocation");
const cartDeliveryAddress = document.getElementById("cartDeliveryAddress");
const orderLocationSuggestions = document.getElementById("orderLocationSuggestions");
const branchToast = document.getElementById("branchToast");
let branchToastTimeout = null;
let selectedOrderPlaceData = null;
let selectedCartOrderType = localStorage.getItem("caramel-cart-order-type") || "";
let selectedCartDeliveryAddress = localStorage.getItem("caramel-cart-delivery-address") || "";
let activeMenuGroup = "Main Menu";
let activeCategory = "All";
let activeMobileButton = null;
let searchTerm = "";
let cart = JSON.parse(localStorage.getItem("caramel-cart")) || [];
let selectedOrderItem = null;
let selectedCartDeliveryDistanceKm = null;
let selectedCartDeliveryFee = 0;

let selectedOrderDeliveryDistanceKm = null;
let selectedOrderDeliveryFee = 0;

function timeToMinutes(value) {
  const [h, m] = value.split(":").map(Number);
  return (h * 60) + m;
}

function getBranchSchedule(branchName) {
  const branch = branchHours[branchName];
  if (!branch) return null;

  const now = new Date();
  const day = now.getDay(); // 0 Sunday, 6 Saturday
  const isWeekend = day === 0 || day === 6;

  return isWeekend ? branch.weekends : branch.weekdays;
}

function isBranchOpen(branchName) {
  const schedule = getBranchSchedule(branchName);
  if (!schedule) return true;

  const now = new Date();
  const currentMinutes = (now.getHours() * 60) + now.getMinutes();
  const openMinutes = timeToMinutes(schedule.open);
  const closeMinutes = timeToMinutes(schedule.close);

  return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
}

function getBranchStatusText(branchName) {
  const schedule = getBranchSchedule(branchName);
  if (!schedule) return "Open";

  return isBranchOpen(branchName)
    ? `Open now • closes ${schedule.close}`
    : `Closed now • opens ${schedule.open}`;
}

function showBranchToast(message) {
  if (!branchToast) return;

  branchToast.textContent = message;
  branchToast.classList.remove("hidden");
  branchToast.classList.add("show");

  clearTimeout(branchToastTimeout);
  branchToastTimeout = setTimeout(() => {
    branchToast.classList.remove("show");
    setTimeout(() => {
      branchToast.classList.add("hidden");
    }, 250);
  }, 2500);
}

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

function saveCartOrderType(value) {
  selectedCartOrderType = value;
  localStorage.setItem("caramel-cart-order-type", value);
}

function saveCartDeliveryAddress(value) {
  selectedCartDeliveryAddress = value;
  localStorage.setItem("caramel-cart-delivery-address", value);
}
function toggleCartDeliveryFields() {
  if (!cartOrderType || !cartDeliveryWrap || !cartDeliveryAddress || !cartUseCurrentLocation) return;

  const isDelivery = cartOrderType.value === "Delivery";
  cartDeliveryWrap.classList.toggle("hidden", !isDelivery);

  if (!isDelivery) {
    cartUseCurrentLocation.checked = false;
    cartDeliveryAddress.value = "";
    cartDeliveryAddress.disabled = false;
    saveCartDeliveryAddress("");
    updateCartDeliveryPricing();
  }
}

function saveCartBranch(value) {
  selectedCartBranch = value;
  localStorage.setItem("caramel-cart-branch", value);
}

function renderCartQuickAccompanimentOptions(category) {
  const options = getAccompaniments(category);

  cartQuickAccompanimentOptions.innerHTML = options
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

  cartQuickAccompaniment.value = "None";

  cartQuickAccompanimentOptions
    .querySelectorAll(".accompaniment-chip")
    .forEach(chip => {
      chip.addEventListener("click", () => {
        cartQuickAccompanimentOptions
          .querySelectorAll(".accompaniment-chip")
          .forEach(btn => btn.classList.remove("active"));

        chip.classList.add("active");
        cartQuickAccompaniment.value = chip.dataset.value;
      });
    });
}

function openCartQuickModal(item) {
  if (
    !cartQuickModal ||
    !cartQuickSummary ||
    !cartQuickNote ||
    !cartQuickAccompaniment ||
    !cartQuickAccompanimentOptions
  ) {
    alert("Quick cart modal HTML is missing.");
    return;
  }

  selectedCartQuickItem = item;

  closeCart();
  closeSidebar();
  closeMobileCategoryDropdown();

  cartQuickSummary.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${formatPrice(item.price)}
  `;

  cartQuickNote.value = "";
  renderCartQuickAccompanimentOptions(item.category);

  cartQuickModal.classList.remove("hidden");
  setBodyLock(true);
}

function submitQuickAddToCart() {
  if (!selectedCartQuickItem) return;

  addToCart({
    ...selectedCartQuickItem,
    quantity: 1,
    accompaniment: cartQuickAccompaniment.value || "None",
    note: cartQuickNote.value.trim(),
    branch: ""
  });

  closeCartQuickModal();
}

function isMorningBreakfastAllowed() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 6 && hour < 12; // 6am to 11:59am
}

function canOrderItem(item) {
  if (item.category === "Breakfast Menu" && item.breakfastWithDrink) {
    return isMorningBreakfastAllowed();
  }
  return true;
}

function isBreakfastWithDrinkItem(item) {
  return item?.category === "Breakfast Menu" && item?.breakfastWithDrink;
}

function toggleDeliveryAddress() {
  if (!orderType || !deliveryAddressWrap || !deliveryAddress || !useCurrentLocation) return;

  const isDelivery = orderType.value === "Delivery";
  deliveryAddressWrap.classList.toggle("hidden", !isDelivery);

  if (!isDelivery) {
    useCurrentLocation.checked = false;
    deliveryAddress.value = "";
    deliveryAddress.disabled = false;
  }
}

orderType?.addEventListener("change", toggleDeliveryAddress);

let selectedCartPlaceData = null;
const cartLocationSuggestions = document.getElementById("cartLocationSuggestions");

function renderCartLocationSuggestions(matches) {
  if (!cartLocationSuggestions) return;

  if (!matches.length) {
    cartLocationSuggestions.classList.add("hidden");
    cartLocationSuggestions.innerHTML = "";
    return;
  }

  cartLocationSuggestions.innerHTML = matches
    .map((place, index) => `
      <button
        type="button"
        class="cart-location-suggestion"
        data-place-index="${index}"
      >
        <span class="cart-location-name">${place.name}</span>
        <span class="cart-location-meta">${place.address}</span>
      </button>
    `)
    .join("");

  cartLocationSuggestions.classList.remove("hidden");

  cartLocationSuggestions
    .querySelectorAll(".cart-location-suggestion")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        const place = matches[index];

        cartDeliveryAddress.value = place.address;
        selectedCartPlaceData = {
          address: place.address,
          lat: place.lat,
          lng: place.lng,
          mapLink: `https://maps.google.com/?q=${place.lat},${place.lng}`
        };

        saveCartDeliveryAddress(selectedCartPlaceData.mapLink);
        updateCartDeliveryPricing();

        cartLocationSuggestions.classList.add("hidden");
      });
    });
}

function handleCartLocationSearch() {
  if (!cartDeliveryAddress) return;

  const term = cartDeliveryAddress.value.trim().toLowerCase();

  if (!term) {
    selectedCartPlaceData = null;
    saveCartDeliveryAddress("");
    updateCartDeliveryPricing();
    renderCartLocationSuggestions([]);
    return;
  }

  const matches = customDeliveryPlaces.filter(place => {
    const text = `${place.name} ${place.address}`.toLowerCase();
    return text.includes(term);
  }).slice(0, 6);

  renderCartLocationSuggestions(matches);
}

cartDeliveryAddress?.addEventListener("input", () => {
  if (cartUseCurrentLocation?.checked) return;
  handleCartLocationSearch();
});

cartDeliveryAddress?.addEventListener("focus", () => {
  if (cartUseCurrentLocation?.checked) return;
  handleCartLocationSearch();
});

document.addEventListener("click", event => {
  const insideCart =
    event.target.closest(".cart-location-picker") ||
    event.target.closest("#cartLocationSuggestions");

  const insideOrder =
    event.target.closest(".order-location-picker") ||
    event.target.closest("#orderLocationSuggestions");

  if (!insideCart && cartLocationSuggestions) {
    cartLocationSuggestions.classList.add("hidden");
  }

  if (!insideOrder && orderLocationSuggestions) {
    orderLocationSuggestions.classList.add("hidden");
  }
});

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
  openSidebarBtn?.classList.add("active");
  setBodyLock(true);
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
  openSidebarBtn?.classList.remove("active");

  if (orderFormModal.classList.contains("hidden") && cartDrawer.classList.contains("hidden")) {
    setBodyLock(false);
  }
}

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    closeSidebar();
    closeCart();
    closeOrderForm();
    closeMobileCategoryDropdown();
    openSidebar();
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
function toRad(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function extractLatLngFromGoogleMapsLink(value) {
  if (!value) return null;

  const text = value.trim();

  const qMatch = text.match(/[?&]q=(-?\d+\.?\d*),\s*(-?\d+\.?\d*)/i);
  if (qMatch) {
    return {
      lat: Number(qMatch[1]),
      lng: Number(qMatch[2])
    };
  }

  const atMatch = text.match(/@(-?\d+\.?\d*),\s*(-?\d+\.?\d*)/i);
  if (atMatch) {
    return {
      lat: Number(atMatch[1]),
      lng: Number(atMatch[2])
    };
  }

  const plainMatch = text.match(/(-?\d+\.?\d*),\s*(-?\d+\.?\d*)/);
  if (plainMatch) {
    return {
      lat: Number(plainMatch[1]),
      lng: Number(plainMatch[2])
    };
  }

  return null;
}

function getDeliveryFee(distanceKm) {
  if (distanceKm <= 3) return 3000;
  if (distanceKm <= 6) return 5000;
  if (distanceKm <= 10) return 7000;
  if (distanceKm <= 15) return 15000;
  if (distanceKm <= 20) return 20000;
  return null;
}
function updateCartDeliveryPricing() {
  if (!cartDeliverySummary || !cartDeliveryDistance || !cartDeliveryFee || !cartGrandTotal) return;

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  selectedCartDeliveryDistanceKm = null;
  selectedCartDeliveryFee = 0;

if (selectedCartOrderType !== "Delivery") {
  cartDeliverySummary.classList.remove("hidden");
  cartDeliverySummary.classList.add("pickup-mode");
  cartDeliveryDistance.textContent = "—";
  cartDeliveryFee.textContent = "—";
  cartGrandTotal.textContent = formatPrice(cartSubtotal);
  return;
}

cartDeliverySummary.classList.remove("pickup-mode");

const branch = orderContacts.find(item => item.name === selectedCartBranch);
const location = selectedCartPlaceData
  ? { lat: selectedCartPlaceData.lat, lng: selectedCartPlaceData.lng }
  : extractLatLngFromGoogleMapsLink(selectedCartDeliveryAddress);

  if (!branch || !location) {
    cartDeliverySummary.classList.remove("hidden");
    cartDeliveryDistance.textContent = "Enter location";
    cartDeliveryFee.textContent = "—";
    cartGrandTotal.textContent = formatPrice(cartSubtotal);
    return;
  }

  const distanceKm = getDistanceKm(branch.lat, branch.lng, location.lat, location.lng);
  const fee = getDeliveryFee(distanceKm);

  selectedCartDeliveryDistanceKm = distanceKm;
  selectedCartDeliveryFee = fee || 0;

  cartDeliverySummary.classList.remove("hidden");
  cartDeliveryDistance.textContent = `${distanceKm.toFixed(1)} km`;
  cartDeliveryFee.textContent = fee === null ? "To be confirmed" : formatPrice(fee);
  cartGrandTotal.textContent = fee === null ? `${formatPrice(cartSubtotal)} + fee confirm` : formatPrice(cartSubtotal + fee);
}

function updateOrderDeliveryPricing() {
  if (!orderDeliverySummary || !orderDeliveryDistance || !orderDeliveryFee || !orderGrandTotal || !selectedOrderItem) return;

  const quantity = Math.max(1, Number(orderQuantity.value) || 1);
  const subtotal = selectedOrderItem.price * quantity;

  selectedOrderDeliveryDistanceKm = null;
  selectedOrderDeliveryFee = 0;

if (orderType.value !== "Delivery") {
  orderDeliverySummary.classList.remove("hidden");
  orderDeliverySummary.classList.add("pickup-mode");
  orderDeliveryDistance.textContent = "—";
  orderDeliveryFee.textContent = "—";
  orderGrandTotal.textContent = formatPrice(subtotal);
  return;
}

orderDeliverySummary.classList.remove("pickup-mode");

const branch = orderContacts.find(item => item.name === orderBranch.value);
const location = selectedOrderPlaceData
  ? { lat: selectedOrderPlaceData.lat, lng: selectedOrderPlaceData.lng }
  : extractLatLngFromGoogleMapsLink(deliveryAddress.value);

  if (!branch || !location) {
    orderDeliverySummary.classList.remove("hidden");
    orderDeliveryDistance.textContent = "Enter location";
    orderDeliveryFee.textContent = "—";
    orderGrandTotal.textContent = formatPrice(subtotal);
    return;
  }

  const distanceKm = getDistanceKm(branch.lat, branch.lng, location.lat, location.lng);
  const fee = getDeliveryFee(distanceKm);

  selectedOrderDeliveryDistanceKm = distanceKm;
  selectedOrderDeliveryFee = fee || 0;

  orderDeliverySummary.classList.remove("hidden");
  orderDeliveryDistance.textContent = `${distanceKm.toFixed(1)} km`;
  orderDeliveryFee.textContent = fee === null ? "To be confirmed" : formatPrice(fee);
  orderGrandTotal.textContent = fee === null ? `${formatPrice(subtotal)} + fee confirm` : formatPrice(subtotal + fee);
}

function fillDeliveryAddressFromCurrentLocation() {
  if (!navigator.geolocation || !deliveryAddress) {
    alert("Location is not supported on this device.");
    return;
  }

  if (!window.isSecureContext) {
    alert("Location needs HTTPS. Open the secure https version of the site.");
    return;
  }

  deliveryAddress.value = "Getting your location...";

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;

      deliveryAddress.value = "Current location selected";
      deliveryAddress.disabled = true;

      selectedOrderPlaceData = {
        address: "Current location selected",
        lat: latitude,
        lng: longitude,
        mapLink
      };

      updateOrderDeliveryPricing();
    },
    error => {
      deliveryAddress.value = "";
      deliveryAddress.disabled = false;
      if (useCurrentLocation) useCurrentLocation.checked = false;

      alert(getLocationErrorMessage(error));
      console.log("Location error:", error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
}

console.log("hero container:", document.getElementById("heroBestSellers"));
console.log("menuItems:", menuItems);
console.log("best sellers:", menuItems.filter(item => item.tag === "Best Seller"));

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("heroBestSellers");

  if (!heroContainer) {
    console.log("heroBestSellers container not found");
    return;
  }

  if (typeof menuItems === "undefined") {
    console.log("menuItems is not defined");
    return;
  }

  const bestSellers = menuItems.filter(item => item.tag === "Best Seller");

  console.log("Best sellers found:", bestSellers);

  if (!bestSellers.length) {
    heroContainer.innerHTML = `<div class="mini-card"><p>No best sellers found</p></div>`;
    return;
  }

  let currentIndex = 0;

  function renderHeroItems() {
    heroContainer.innerHTML = "";

    const itemsToShow = [];
    for (let i = 0; i < 3; i++) {
      const item = bestSellers[(currentIndex + i) % bestSellers.length];
      if (item) itemsToShow.push(item);
    }

    itemsToShow.forEach(item => {
      const div = document.createElement("div");
      div.className = "mini-card tilt-card";
      div.innerHTML = `
        <p>${item.name}</p>
        <span>${Number(item.price).toLocaleString()} UGX</span>
      `;
      heroContainer.appendChild(div);
    });
  }

  renderHeroItems();

  setInterval(() => {
    currentIndex = (currentIndex + 3) % bestSellers.length;
    renderHeroItems();
  }, 3000);
});

function handleCurrentLocationToggle() {
  if (!useCurrentLocation || !deliveryAddress) return;

  if (useCurrentLocation.checked) {
    setTimeout(() => {
      fillDeliveryAddressFromCurrentLocation();
    }, 300);
  } else {
    deliveryAddress.disabled = false;
    deliveryAddress.value = "";
    selectedOrderPlaceData = null;
    updateOrderDeliveryPricing();
  }
}

function findNearestBranch(userLat, userLng) {
  let nearest = null;
  let smallestDistance = Infinity;

  orderContacts.forEach(branch => {
    if (typeof branch.lat !== "number" || typeof branch.lng !== "number") return;

    const distance = getDistanceKm(userLat, userLng, branch.lat, branch.lng);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearest = branch;
    }
  });

  return nearest;
}
function suggestNearestBranch() {
  if (!navigator.geolocation) return;

  const hasManualBranch =
    selectedCartBranch ||
    (orderBranch && orderBranch.value);

  if (hasManualBranch) return;

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const nearest = findNearestBranch(latitude, longitude);

      if (!nearest) return;

      selectedCartBranch = nearest.name;
      localStorage.setItem("caramel-cart-branch", nearest.name);

      if (cartBranchSelect) {
        cartBranchSelect.value = nearest.name;
      }

      if (orderBranch && !orderBranch.value) {
        orderBranch.value = nearest.name;
      }

      showBranchToast(`Nearest branch selected: ${nearest.name}`);
    },
    error => {
      console.log("Location not available:", error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    }
  );
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

useCurrentLocation?.addEventListener("change", handleCurrentLocationToggle);

function openMobileCategoryDropdown() {
  mobileCategoryDropdown.classList.add("show");
  cartFab?.classList.add("hidden");
}

function closeMobileCategoryDropdown() {
  mobileCategoryDropdown.classList.remove("show");
    if (cart.length > 0) {
    cartFab?.classList.remove("hidden");
  }
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
  const allowed = canOrderItem(item);
  const blockedText =
    item.category === "Breakfast Menu" && item.breakfastWithDrink && !allowed
      ? "Available with drink in morning only"
      : "";

  return `
    <article class="menu-card reveal-card">
      <div class="menu-thumb">
        ${
          item.image
            ? `<img src="${item.image}" alt="${item.name}" class="menu-image" loading="lazy">`
            : ""
        }
        ${item.tag ? `<span class="menu-badge">${item.tag}</span>` : ""}
      </div>

      <div class="menu-body">
        <div class="menu-meta">
          <span class="menu-category">${item.category}</span>
          <span class="menu-price">${formatPrice(item.price)}</span>
        </div>

        <h4 class="menu-name">${item.name}</h4>
        <p class="menu-desc">${item.description}</p>

        ${blockedText ? `<p class="menu-desc" style="margin-top:8px;color:#ff9b9b;">${blockedText}</p>` : ""}

        <div class="menu-footer">
          ${item.tag ? `<span class="menu-tag">${item.tag}</span>` : ""}

          <div class="menu-actions">
            <button
              class="menu-order-btn add-cart-trigger"
              type="button"
              data-name="${item.name}"
              ${!allowed ? "disabled" : ""}
            >
              Add to Cart
            </button>

            <button
              class="menu-order-btn order-trigger"
              type="button"
              data-name="${item.name}"
              ${!allowed ? "disabled" : ""}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

.small-inline-note,
.cart-static-note {
  font-size: 0.92rem;
  line-height: 1.5;
  color: #ffb3a7;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 12px;
  border-radius: 14px;
}

menuGrid?.addEventListener("click", event => {
  const addBtn = event.target.closest(".add-cart-trigger");
  if (addBtn) {
    const item = getItemByName(addBtn.dataset.name);
    if (!item || !canOrderItem(item)) {
      alert("This breakfast item with a drink is available in the morning only.");
      return;
    }

if (isBreakfastWithDrinkItem(item)) {
  addToCart({
    ...item,
    quantity: 1,
    accompaniment: "Not applicable",
    note: "",
    branch: ""
  });
} else {
  openOrderForm(item, "cart");
}
return;
  }

  const orderBtn = event.target.closest(".order-trigger");
  if (orderBtn) {
    const item = getItemByName(orderBtn.dataset.name);
    if (!item || !canOrderItem(item)) {
      alert("This breakfast item with a drink is available in the morning only.");
      return;
    }
    openOrderForm(item, "whatsapp");
  }
});


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

function getLocationErrorMessage(error) {
  if (!window.isSecureContext) {
    return "Location needs HTTPS. Open the secure https version of the site.";
  }

  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "Location permission was denied. On iPhone go to Settings > Safari > Location and set it to Ask or Allow, then try again.";
    case error.POSITION_UNAVAILABLE:
      return "Your location is unavailable right now. Please try again or type the address manually.";
    case error.TIMEOUT:
      return "Location took too long. Please try again in a place with better signal.";
    default:
      return "Could not get your location. Please enter the address manually.";
  }
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
  selectedCartOrderType = "";
  selectedCartDeliveryAddress = "";
  localStorage.removeItem("caramel-cart-order-type");
  localStorage.removeItem("caramel-cart-delivery-address");
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
</div>

${isBreakfastWithDrinkItem(item) ? `
  <div class="cart-item-accompaniment">
    <label class="cart-inline-label">Note</label>
    <div class="cart-static-note">
      Comes with drink in morning only. No accompaniment.
    </div>
  </div>
` : `
  <div class="cart-item-accompaniment">
    <label class="cart-inline-label">Accompaniment</label>
    <select class="cart-accompaniment-select" data-index="${index}">
      ${getAccompaniments(item.category).map(option => `
        <option value="${option}" ${item.accompaniment === option ? "selected" : ""}>
          ${option}
        </option>
      `).join("")}
    </select>
  </div>
`}
        <div class="cart-item-note">
          <textarea
            class="cart-note-input"
            data-index="${index}"
            placeholder="Add note (e.g. no onions, extra spicy)"
          >${item.note || ""}</textarea>
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
  populateCartBranches();

  if (cartOrderType) {
  cartOrderType.value = selectedCartOrderType;
}

if (cartDeliveryAddress) {
  cartDeliveryAddress.value = selectedCartDeliveryAddress;
}

toggleCartDeliveryFields();
  
}

function updateCartAccompaniment(index, value) {
  if (!cart[index]) return;
  cart[index].accompaniment = value || "None";
  saveCart();
  updateCartUI();
}

cartItems?.addEventListener("change", event => {
  const select = event.target.closest(".cart-accompaniment-select");
  if (!select) return;

  const index = Number(select.dataset.index);
  updateCartAccompaniment(index, select.value);
});

function handleOrderLocationSearch() {
  if (!deliveryAddress || !orderLocationSuggestions) return;

  const term = deliveryAddress.value.trim().toLowerCase();

  if (!term) {
    renderOrderLocationSuggestions(customDeliveryPlaces.slice(0, 6));
    return;
  }

  const matches = customDeliveryPlaces.filter(place => {
    const text = `${place.name} ${place.address}`.toLowerCase();
    return text.includes(term);
  }).slice(0, 6);

  renderOrderLocationSuggestions(matches);
}

deliveryAddress?.addEventListener("focus", () => {
  if (useCurrentLocation?.checked) return;
  handleOrderLocationSearch();
});

deliveryAddress?.addEventListener("input", () => {
  if (useCurrentLocation?.checked) return;
  handleOrderLocationSearch();
});

function fillCartDeliveryAddressFromCurrentLocation() {
  if (!navigator.geolocation || !cartDeliveryAddress) {
    alert("Location is not supported on this device.");
    return;
  }

  if (!window.isSecureContext) {
    alert("Location needs HTTPS. Open the secure https version of the site.");
    return;
  }

  cartDeliveryAddress.value = "Getting your location...";

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude, accuracy } = position.coords;
      const mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;

      cartDeliveryAddress.value = "Current location selected";
      cartDeliveryAddress.disabled = true;

      selectedCartPlaceData = {
        address: "Current location selected",
        lat: latitude,
        lng: longitude,
        mapLink
      };

      saveCartDeliveryAddress(mapLink);
      updateCartDeliveryPricing();
    },
    error => {
      cartDeliveryAddress.value = "";
      cartDeliveryAddress.disabled = false;
      if (cartUseCurrentLocation) cartUseCurrentLocation.checked = false;

      let msg = "Could not get your location.";

      switch (error.code) {
        case 1:
          msg = "Location permission was denied on iPhone. Please allow location for Safari and reload the page.";
          break;
        case 2:
          msg = "Your iPhone could not determine the location. Try going outside or checking signal.";
          break;
        case 3:
          msg = "Location request timed out. Try again.";
          break;
      }

      alert(msg);
      console.log("Cart location error:", error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0
    }
  );
}

function handleCartCurrentLocationToggle() {
  if (!cartUseCurrentLocation || !cartDeliveryAddress) return;

  if (cartUseCurrentLocation.checked) {
    setTimeout(() => {
      fillCartDeliveryAddressFromCurrentLocation();
    }, 300);
  } else {
    cartDeliveryAddress.disabled = false;
    cartDeliveryAddress.value = "";
    selectedCartPlaceData = null;
    saveCartDeliveryAddress("");
    updateCartDeliveryPricing();
  }
}

function updateCartNote(index, value) {
  if (!cart[index]) return;
  cart[index].note = value;
  saveCart();
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

function populateCartBranches() {
  if (!cartBranchSelect) return;

  cartBranchSelect.innerHTML = `
    <option value="">Select branch</option>
    ${orderContacts.map(contact => {
      const open = isBranchOpen(contact.name);
      return `
        <option
          value="${contact.name}"
          ${selectedCartBranch === contact.name ? "selected" : ""}
          ${open ? "" : "disabled"}
        >
          ${contact.name} ${getBranchStatusText(contact.name)}
        </option>
      `;
    }).join("")}
  `;
}

function renderAccompanimentOptions(item) {
  if (!orderAccompanimentOptions || !orderAccompaniment) return;

  if (isBreakfastWithDrinkItem(item)) {
    orderAccompaniment.value = "Not applicable";

    if (orderAccompanimentLabel) {
      orderAccompanimentLabel.textContent = "Note";
    }

    orderAccompanimentOptions.innerHTML = `
      <div class="small-inline-note">
        Served with drink in morning only. No accompaniment selection needed.
      </div>
    `;
    return;
  }

  if (orderAccompanimentLabel) {
    orderAccompanimentLabel.textContent = "Accompaniment";
  }

  const options = getAccompaniments(item.category);

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
      orderAccompanimentOptions
        .querySelectorAll(".accompaniment-chip")
        .forEach(btn => btn.classList.remove("active"));

      chip.classList.add("active");
      orderAccompaniment.value = chip.dataset.value;
    });
  });
}
function renderOrderLocationSuggestions(matches) {
  if (!orderLocationSuggestions) return;

  if (!matches.length) {
    orderLocationSuggestions.classList.add("hidden");
    orderLocationSuggestions.innerHTML = "";
    return;
  }

  orderLocationSuggestions.innerHTML = matches
    .map((place, index) => `
      <button
        type="button"
        class="order-location-suggestion"
        data-place-index="${index}"
      >
        <span class="order-location-name">${place.name}</span>
        <span class="order-location-meta">${place.address}</span>
      </button>
    `)
    .join("");

  orderLocationSuggestions.classList.remove("hidden");

  orderLocationSuggestions
    .querySelectorAll(".order-location-suggestion")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        const place = matches[index];

        deliveryAddress.value = place.address;
        selectedOrderPlaceData = {
          address: place.address,
          lat: place.lat,
          lng: place.lng,
          mapLink: `https://maps.google.com/?q=${place.lat},${place.lng}`
        };

        updateOrderDeliveryPricing();
        orderLocationSuggestions.classList.add("hidden");
      });
    });
}

function handleOrderLocationSearch() {
  if (!deliveryAddress) return;

  const term = deliveryAddress.value.trim().toLowerCase();

  if (!term) {
    selectedOrderPlaceData = null;
    updateOrderDeliveryPricing();
    renderOrderLocationSuggestions([]);
    return;
  }

  const matches = customDeliveryPlaces.filter(place => {
    const text = `${place.name} ${place.address}`.toLowerCase();
    return text.includes(term);
  }).slice(0, 6);

  renderOrderLocationSuggestions(matches);
}

deliveryAddress?.addEventListener("input", () => {
  if (useCurrentLocation?.checked) return;
  handleOrderLocationSearch();
});

deliveryAddress?.addEventListener("focus", () => {
  if (useCurrentLocation?.checked) return;
  handleOrderLocationSearch();
});

function openOrderForm(item, mode = "whatsapp") {
  selectedOrderItem = item;
  orderActionMode = mode;

  closeCart();
  closeSidebar();
  closeMobileCategoryDropdown();

  selectedOrderDeliveryDistanceKm = null;
  selectedOrderDeliveryFee = 0;

  orderFormSummary.innerHTML = `
    <strong>Item:</strong> ${item.name}<br>
    <strong>Category:</strong> ${item.category}<br>
    <strong>Price:</strong> ${formatPrice(item.price)}<br>
    <strong>Status:</strong> ${
      mode === "cart"
        ? "Choose quantity, accompaniment, and note"
        : "Complete order details"
    }
  `;

  orderQuantity.value = 1;
  orderNote.value = "";
  populateBranches();
  renderAccompanimentOptions(item);

  if (orderType) orderType.value = "";
  if (deliveryAddress) {
    deliveryAddress.value = "";
    deliveryAddress.disabled = false;
  }
  if (useCurrentLocation) useCurrentLocation.checked = false;

  selectedOrderPlaceData = null;

  toggleDeliveryAddress();
  updateOrderDeliveryPricing();

  continueOrderBtn.textContent =
    mode === "cart" ? "Add to Cart" : "Order on WhatsApp";

  orderFormModal.classList.remove("hidden");
  orderFormBackdrop.classList.remove("hidden");
  setBodyLock(true);
}

function submitSingleOrder() {
  if (!selectedOrderItem) return;

  const quantity = Math.max(1, Number(orderQuantity.value) || 1);
  const accompaniment = isBreakfastWithDrinkItem(selectedOrderItem)
  ? "Not applicable"
  : (orderAccompaniment.value || "None");
  const note = orderNote.value.trim();

  if (orderActionMode === "cart") {
    addToCart({
      ...selectedOrderItem,
      quantity,
      accompaniment,
      note,
      branch: ""
    });

    closeOrderForm();
    return;
  }

  const branchName = orderBranch.value;
  const type = orderType.value;
  const address = deliveryAddress.value.trim();

  if (!branchName) {
    alert("Please select a branch before ordering.");
    orderBranch.focus();
    return;
  }

  if (!isBranchOpen(branchName)) {
    alert(`${branchName} is currently closed. Please choose another open branch.`);
    orderBranch.focus();
    return;
  }

  if (!type) {
    alert("Please choose Pickup or Delivery.");
    orderType.focus();
    return;
  }

  if (type === "Delivery" && !address) {
    alert("Please enter a delivery address.");
    deliveryAddress.focus();
    return;
  }

  const contact = orderContacts.find(item => item.name === branchName);
  if (!contact) {
    alert("Selected branch is invalid.");
    return;
  }

  const subtotal = selectedOrderItem.price * quantity;

  const deliveryFeeText =
    type === "Delivery"
      ? (selectedOrderDeliveryDistanceKm !== null
          ? (selectedOrderDeliveryFee
              ? formatPrice(selectedOrderDeliveryFee)
              : "To be confirmed")
          : "To be confirmed")
      : "N/A";

  const grandTotalText =
    type === "Delivery"
      ? (selectedOrderDeliveryDistanceKm !== null && selectedOrderDeliveryFee
          ? formatPrice(subtotal + selectedOrderDeliveryFee)
          : `${formatPrice(subtotal)} + delivery fee confirm`)
      : formatPrice(subtotal);

  const messageLines = [
    `Hello ${contact.name}, I would like to order:`,
    "",
    `Item: ${selectedOrderItem.name}`,
    `Category: ${selectedOrderItem.category}`,
    `Unit Price: ${formatPrice(selectedOrderItem.price)}`,
    `Quantity: ${quantity}`,
    `Subtotal: ${formatPrice(subtotal)}`,
    `Order Type: ${type}`,
    `Grand Total: ${grandTotalText}`,
    `Branch: ${branchName}`,
    `Accompaniment: ${accompaniment}`,
    `Special instructions: ${note || "None"}`
  ];

  if (type === "Delivery") {
    messageLines.splice(8, 0,
      `Delivery Address: ${address}`,
      `Distance: ${selectedOrderDeliveryDistanceKm !== null ? `${selectedOrderDeliveryDistanceKm.toFixed(1)} km` : "To be confirmed"}`,
      `Delivery Fee: ${deliveryFeeText}`
    );
  }

  const message = encodeURIComponent(messageLines.join("\n"));
  window.open(`https://wa.me/${contact.number}?text=${message}`, "_blank");
  closeOrderForm();
}

function populateBranches() {
  if (!orderBranch) return;

  orderBranch.innerHTML = `
    <option value="" selected disabled>Select branch</option>
    ${orderContacts.map(contact => {
      const open = isBranchOpen(contact.name);
      return `
        <option value="${contact.name}" ${open ? "" : "disabled"}>
          ${contact.name} ${getBranchStatusText(contact.name)}
        </option>
      `;
    }).join("")}
  `;
}


function checkoutCart() {
  if (!cart.length) return;

  if (!selectedCartBranch) {
    alert("Please select a branch before checkout.");
    cartBranchSelect?.focus();
    return;
  }
  if (!isBranchOpen(selectedCartBranch)) {
  alert(`${selectedCartBranch} is currently closed. Please choose another open branch.`);
  cartBranchSelect.focus();
  return;
}

  if (!selectedCartOrderType) {
    alert("Please choose Pickup or Delivery.");
    cartOrderType?.focus();
    return;
  }

  if (selectedCartOrderType === "Delivery" && !selectedCartDeliveryAddress.trim()) {
    alert("Please enter a delivery address.");
    cartDeliveryAddress?.focus();
    return;
  }

  const branchContact = orderContacts.find(contact => contact.name === selectedCartBranch);
  if (!branchContact) {
    alert("Selected branch is invalid.");
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryFeeText =
    selectedCartOrderType === "Delivery"
      ? (selectedCartDeliveryDistanceKm !== null
          ? (selectedCartDeliveryFee
              ? formatPrice(selectedCartDeliveryFee)
              : "To be confirmed")
          : "To be confirmed")
      : "N/A";

  const grandTotalText =
    selectedCartOrderType === "Delivery"
      ? (selectedCartDeliveryDistanceKm !== null && selectedCartDeliveryFee
          ? formatPrice(subtotal + selectedCartDeliveryFee)
          : `${formatPrice(subtotal)} + delivery fee confirm`)
      : formatPrice(subtotal);

const messageLines = [
  `Hello ${branchContact.name}, I would like to order:`,
  "",
  `Order Type: ${selectedCartOrderType}`
];

if (selectedCartOrderType === "Delivery") {
  messageLines.push(
    `Delivery Address: ${selectedCartDeliveryAddress}`,
    `Distance: ${selectedCartDeliveryDistanceKm !== null ? `${selectedCartDeliveryDistanceKm.toFixed(1)} km` : "To be confirmed"}`,
    `Delivery Fee: ${deliveryFeeText}`
  );
}

messageLines.push("");

  cart.forEach((item, index) => {
    messageLines.push(
      `${index + 1}. ${item.name}`,
      `Category: ${item.category}`,
      `Price: ${formatPrice(item.price)}`,
      `Quantity: ${item.quantity}`,
      `Branch: ${selectedCartBranch}`,
      `Accompaniment: ${item.accompaniment || "None"}`,
      `Special instructions: ${item.note || "None"}`,
      ""
    );
  });

  messageLines.push(
    `Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`,
    `Subtotal: ${formatPrice(subtotal)}`,
    `Grand Total: ${grandTotalText}`
  );

  const message = encodeURIComponent(messageLines.join("\n"));
  window.open(`https://wa.me/${branchContact.number}?text=${message}`, "_blank");
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

function closeOrderForm() {
  orderFormModal.classList.add("hidden");
  orderFormBackdrop.classList.add("hidden");

  if (!sidebar.classList.contains("open") && cartDrawer.classList.contains("hidden")) {
    setBodyLock(false);
  }
}

orderFormBackdrop?.addEventListener("click", closeOrderForm);

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

cartItems?.addEventListener("input", event => {
  const noteInput = event.target.closest(".cart-note-input");
  if (!noteInput) return;

  const index = Number(noteInput.dataset.index);
  updateCartNote(index, noteInput.value);
});

qtyMinus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = Math.max(1, current - 1);
});

cartBranchSelect?.addEventListener("change", event => {
  saveCartBranch(event.target.value);
});

cartOrderType?.addEventListener("change", event => {
  saveCartOrderType(event.target.value);
  toggleCartDeliveryFields();
});

cartUseCurrentLocation?.addEventListener("change", handleCartCurrentLocationToggle);

cartDeliveryAddress?.addEventListener("input", event => {
  saveCartDeliveryAddress(event.target.value);
});

qtyPlus?.addEventListener("click", () => {
  const current = parseInt(orderQuantity.value || "1", 10);
  orderQuantity.value = current + 1;
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

cartBranchSelect?.addEventListener("change", event => {
  saveCartBranch(event.target.value);
});

cartOrderType?.addEventListener("change", event => {
  saveCartOrderType(event.target.value);
  toggleCartDeliveryFields();
});

cartUseCurrentLocation?.addEventListener("change", handleCartCurrentLocationToggle);

cartDeliveryAddress?.addEventListener("input", event => {
  saveCartDeliveryAddress(event.target.value);
});

cartBranchSelect?.addEventListener("change", event => {
  saveCartBranch(event.target.value);
  updateCartDeliveryPricing();
});

cartOrderType?.addEventListener("change", event => {
  saveCartOrderType(event.target.value);
  toggleCartDeliveryFields();
});

cartDeliveryAddress?.addEventListener("input", event => {
  saveCartDeliveryAddress(event.target.value);
  updateCartDeliveryPricing();
});

cartOrderType.addEventListener("change", () => {
  if (cartOrderType.value === "Delivery") {
    cartDeliveryWrap.classList.remove("hidden");
  } else {
    cartDeliveryWrap.classList.add("hidden");
  }
});

orderBranch?.addEventListener("change", updateOrderDeliveryPricing);
orderQuantity?.addEventListener("input", updateOrderDeliveryPricing);
deliveryAddress?.addEventListener("input", updateOrderDeliveryPricing);
orderType?.addEventListener("change", updateOrderDeliveryPricing);

function handleCartCurrentLocationToggle() {
  if (!cartUseCurrentLocation || !cartDeliveryAddress) return;

  if (cartUseCurrentLocation.checked) {
    setTimeout(() => {
      fillCartDeliveryAddressFromCurrentLocation();
    }, 300);
  } else {
    cartDeliveryAddress.disabled = false;
    cartDeliveryAddress.value = "";
    selectedCartPlaceData = null;
    saveCartDeliveryAddress("");
    updateCartDeliveryPricing();
  }
}

searchInput?.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderMenu();
});

openSidebarBtn?.addEventListener("click", toggleSidebar);
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
confirmAddToCartBtn?.addEventListener("click", submitQuickAddToCart);
cartQuickBackdrop?.addEventListener("click", closeCartQuickModal);
closeCartQuickModalBtn?.addEventListener("click", closeCartQuickModal);

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
closeOrderFormBtn?.addEventListener("click", closeOrderForm);
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
suggestNearestBranch();
closeCartQuickModal();

