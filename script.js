let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}
