<div class="cart-delivery-wrap hidden" id="cartDeliveryWrap">
  <label class="current-location-check">
    <input type="checkbox" id="cartUseCurrentLocation">
    <span>Use my current location</span>
  </label>

  <div class="cart-location-picker">
    <input
      id="cartDeliveryAddress"
      class="cart-location-input"
      type="text"
      placeholder="Search delivery location..."
      autocomplete="off"
    />
    <div id="cartLocationSuggestions" class="cart-location-suggestions hidden"></div>
  </div>
</div> <!-- ✅ CLOSE HERE -->

<!-- ✅ OUTSIDE -->
<div class="cart-delivery-summary hidden" id="cartDeliverySummary">
  <div><strong>Distance:</strong> <span id="cartDeliveryDistance">—</span></div>
  <div><strong>Delivery Fee:</strong> <span id="cartDeliveryFee">—</span></div>
  <div><strong>Total + Delivery:</strong> <span id="cartGrandTotal">—</span></div>
</div>

<!-- ✅ OUTSIDE -->
<div class="cart-footer-actions">
  <button id="clearCartBtn" class="secondary-btn" type="button">Clear Cart</button>
  <button id="checkoutCartBtn" class="primary-btn" type="button">
    Checkout on WhatsApp
  </button>
</div>
