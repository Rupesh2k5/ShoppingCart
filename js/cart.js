let cart = JSON.parse(localStorage.getItem("cart")) || [];
const items = document.getElementById("items");
const totalEl = document.getElementById("total");

function render() {
  items.innerHTML = "";
  let total = 0;
  
  cart.forEach((p, i) => {
    if (!p.qty) {
      p.qty = 1;
    }
    
    total += p.price * p.qty;
    items.innerHTML += `
    <div class="item">
      ${p.name} ₹${p.price} x 
      <input type="number" value="${p.qty}" min="1" onchange="update(${i},this.value)">
      <button onclick="remove(${i})">Remove</button>
    </div>`;
  });
  
  totalEl.textContent = total;
  
  localStorage.setItem("cart", JSON.stringify(cart));
}

function update(i, qty) {
  cart[i].qty = parseInt(qty) || 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  render();
}

function remove(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  render();
}

function checkout() { 
  location = "checkout.html"; 
}

function back() { 
  location = "shopping.html"; 
}

cart = cart.map(item => {
  if (typeof item === 'object' && item !== null) {
    return {
      id: item.id || 0,
      name: item.name || 'Unknown',
      price: item.price || 0,
      qty: item.qty || 1
    };
  }
  return null;
}).filter(item => item !== null);

localStorage.setItem("cart", JSON.stringify(cart));
render();