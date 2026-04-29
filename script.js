if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// ─── DATA ────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  // ─── ELECTRONICS ─────────────────────────
  { id: 1, name: 'Sony WH-1000XM5', cat: 'Electronics', price: 349.99, img: 'https://images.unsplash.com/photo-1612858249816-5a91a9fb9886', stock: 8, badge: 'Best seller', desc: 'Industry-leading noise cancellation with 30-hour battery life.' },
  { id: 2, name: 'Apple Watch Ultra', cat: 'Electronics', price: 799.00, img: 'https://images.unsplash.com/photo-1722153297252-8fb1645f5bfb', stock: 4, badge: 'Premium', desc: 'The most rugged and capable Apple Watch ever.' },
  { id: 3, name: '4K Portable Projector', cat: 'Electronics', price: 229.99, img: 'https://images.pexels.com/photos/31726737/pexels-photo-31726737.jpeg', stock: 6, badge: null, desc: 'Compact 1080p LED projector with built-in Dolby Audio.' },
  { id: 10, name: 'Smart RGB Desk Lamp', cat: 'Electronics', price: 79.99, img: 'https://images.pexels.com/photos/6913319/pexels-photo-6913319.jpeg', stock: 5, badge: null, desc: 'Touch-dimming LED desk lamp with 16M colour options.' },
  { id: 11, name: 'Mechanical Keyboard', cat: 'Electronics', price: 129.50, img: 'https://images.unsplash.com/photo-1625130694338-4110ba634e59', stock: 12, badge: 'New', desc: 'Tactile mechanical keyboard with customizable RGB.' },
  { id: 12, name: 'Wireless Earbuds', cat: 'Electronics', price: 159.00, img: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb', stock: 15, badge: null, desc: 'True wireless sound with active noise cancellation.' },
  { id: 13, name: 'Gaming Mouse', cat: 'Electronics', price: 69.99, img: 'https://images.unsplash.com/photo-1631749352438-7d576312185d', stock: 20, badge: 'Pro', desc: 'Ultra-lightweight gaming mouse with 25k DPI sensor.' },
  { id: 14, name: 'External SSD 1TB', cat: 'Electronics', price: 110.00, img: 'https://images.unsplash.com/photo-1720048170832-7bc1d7c9fb0f', stock: 10, badge: null, desc: 'Fast data transfer in a compact, rugged shell.' },
  { id: 15, name: 'MSI Gaming Headset', cat: 'Electronics', price: 89.00, img: 'https://images.unsplash.com/photo-1629429407756-4a7703614972', stock: 7, badge: null, desc: 'Control your entire home with voice commands.' },
  { id: 16, name: 'Bluetooth Speaker', cat: 'Electronics', price: 145.00, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1', stock: 9, badge: 'Outdoor', desc: 'Waterproof speaker with 360-degree deep bass.' },

  // ─── CLOTHING ────────────────────────────
  { id: 4, name: 'Merino Wool Jumper', cat: 'Clothing', price: 89.99, img: 'https://images.pexels.com/photos/7935229/pexels-photo-7935229.jpeg', stock: 15, badge: null, desc: 'Ethically sourced 100% Merino wool.' },
  { id: 5, name: 'Slim Leather Wallet', cat: 'Clothing', price: 45.00, img: 'https://images.unsplash.com/photo-1619169412695-de792ce344e4', stock: 20, badge: 'New', desc: 'Hand-stitched full-grain leather.' },
  { id: 6, name: 'Linen Shirt — Navy', cat: 'Clothing', price: 65.00, img: 'https://images.unsplash.com/photo-1740711152088-88a009e877bb', stock: 12, badge: null, desc: 'Pre-washed stonelinen for a lived-in feel.' },
  { id: 17, name: 'Classic Trench Coat', cat: 'Clothing', price: 199.00, img: 'https://images.pexels.com/photos/5424917/pexels-photo-5424917.jpeg', stock: 5, badge: 'Premium', desc: 'Timeless style with weather-resistant fabric.' },
  { id: 18, name: 'Denim Jacket', cat: 'Clothing', price: 75.00, img: 'https://images.pexels.com/photos/6770037/pexels-photo-6770037.jpeg', stock: 10, badge: null, desc: 'Standard fit denim jacket with metal buttons.' },
  { id: 19, name: 'Polarized Sunglasses', cat: 'Clothing', price: 120.00, img: 'https://images.pexels.com/photos/31259705/pexels-photo-31259705.jpeg', stock: 18, badge: 'Summer', desc: 'UV protection with lightweight frames.' },
  { id: 20, name: 'Canvas Sneakers', cat: 'Clothing', price: 55.00, img: 'https://images.pexels.com/photos/4271563/pexels-photo-4271563.jpeg', stock: 25, badge: 'Bestseller', desc: 'Comfortable everyday sneakers for all.' },
  { id: 21, name: 'Leather Belt', cat: 'Clothing', price: 35.00, img: 'https://images.pexels.com/photos/31367060/pexels-photo-31367060.png', stock: 30, badge: null, desc: 'Genuine leather belt with silver buckle.' },
  { id: 22, name: 'Cotton Hoodie', cat: 'Clothing', price: 49.00, img: 'https://images.pexels.com/photos/7479832/pexels-photo-7479832.jpeg', stock: 14, badge: null, desc: 'Soft-touch cotton hoodie with kangaroo pocket.' },
  { id: 23, name: 'Performance Leggings', cat: 'Clothing', price: 40.00, img: 'https://images.pexels.com/photos/7894597/pexels-photo-7894597.jpeg', stock: 20, badge: 'Sport', desc: 'High-waisted, moisture-wicking fabric.' },

  // ─── HOME & KITCHEN ──────────────────────
  { id: 7, name: 'Cast Iron Skillet 12"', cat: 'Home & Kitchen', price: 54.99, img: 'https://images.pexels.com/photos/34831934/pexels-photo-34831934.jpeg', stock: 10, badge: null, desc: 'Pre-seasoned cast iron for all cooktops.' },
  { id: 8, name: 'Bamboo Knife Block Set', cat: 'Home & Kitchen', price: 119.00, img: 'https://images.pexels.com/photos/16443132/pexels-photo-16443132.jpeg', stock: 7, badge: 'Eco Pick', desc: '5-piece stainless steel knives with bamboo block.' },
  { id: 9, name: 'Ceramic Pour-Over Kit', cat: 'Home & Kitchen', price: 42.50, img: 'https://images.pexels.com/photos/27902269/pexels-photo-27902269.jpeg', stock: 18, badge: null, desc: 'Japanese-style ceramic dripper for coffee.' },
  { id: 24, name: 'Electric Kettle', cat: 'Home & Kitchen', price: 65.00, img: 'https://images.pexels.com/photos/10965752/pexels-photo-10965752.jpeg', stock: 12, badge: null, desc: 'Fast-boil stainless steel kettle with auto-off.' },
  { id: 25, name: 'Non-Stick Cookware', cat: 'Home & Kitchen', price: 150.00, img: 'https://images.pexels.com/photos/12156176/pexels-photo-12156176.jpeg', stock: 5, badge: 'New', desc: '10-piece set with heat-resistant handles.' },
  { id: 26, name: 'Scented Candle Set', cat: 'Home & Kitchen', price: 29.99, img: 'https://images.pexels.com/photos/10772133/pexels-photo-10772133.jpeg', stock: 40, badge: null, desc: 'Natural soy wax with essential oils.' },
  { id: 27, name: 'Air Purifier', cat: 'Home & Kitchen', price: 199.00, img: 'https://images.unsplash.com/photo-1732229033839-c76b4071c449', stock: 6, badge: null, desc: 'HEPA filter removes 99.9% of pollutants.' },
  { id: 28, name: 'Pillow', cat: 'Home & Kitchen', price: 45.00, img: 'https://images.unsplash.com/photo-1629949009765-40fc74c9ec21', stock: 22, badge: 'Comfort', desc: 'Ergonomic support for better sleep.' },
  { id: 29, name: 'Bamboo Serving Tray', cat: 'Home & Kitchen', price: 34.00, img: 'https://images.unsplash.com/photo-1633107939685-2e7105a8f01d', stock: 15, badge: null, desc: 'Eco-friendly tray for breakfast in bed.' },
  { id: 30, name: 'Glass Food Containers', cat: 'Home & Kitchen', price: 38.00, img: 'https://images.pexels.com/photos/8580727/pexels-photo-8580727.jpeg', stock: 25, badge: null, desc: 'Airlock lids to keep food fresh longer.' },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('nova_cart') || '[]');
let currentFilter = 'All';
let currentSearch = '';
let modalProductId = null;

function saveCart() { localStorage.setItem('nova_cart', JSON.stringify(cart)); }

function getCartQty() { return cart.reduce((s,i)=>s+i.qty,0); }

function getCartTotal() { return cart.reduce((s,i)=>{
  const p = PRODUCTS.find(pr=>pr.id===i.id);
  return s + (p ? p.price * i.qty : 0);
}, 0); }

// ─── UI HELPERS ──────────────────────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  if(page==='cart') renderCart();
  if(page==='checkout') { renderCheckoutSummary(); resetCheckoutSteps(); }
  window.scrollTo(0,0);
}

function setActiveNav(btn) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = getCartQty();
}

function toast(msg, type='success') {
  const el = document.getElementById('toast');
  el.innerHTML = (type==='success'?'✓ ':'⚠ ') + msg;
  el.className = 'show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{ el.className=''; }, 3000);
}

// ─── PRODUCTS ────────────────────────────────────────────────────────────────
function filterCat(cat, chipEl) {
  currentFilter = cat;
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  if(chipEl) chipEl.classList.add('active');
  renderProducts();
}

function handleSearch(val) {
  currentSearch = val.toLowerCase();
  
  currentFilter = 'All';
  
  // 3. UI එකේ chips වල active class එක මාරු කරනවා
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.filter-chip').classList.add('active');
  renderProducts();
  if (val.trim().length > 0) {
    scrollToProducts();
  }
}
// Array එකක් shuffle කිරීමට භාවිතා කරන function එක
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
function renderProducts() {
  let list = [...PRODUCTS].sort(() => Math.random() - 0.5);


  if (currentFilter !== 'All') {
    list = list.filter(p => p.cat === currentFilter);
  }

  if (currentSearch) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(currentSearch) || 
      p.cat.toLowerCase().includes(currentSearch)
    );
  }

  const title = currentFilter === 'All' ? 'All Products' : currentFilter;
  const countSpan = `<span>${list.length} item${list.length !== 1 ? 's' : ''}</span>`;
  document.getElementById('sectionTitle').innerHTML = `${title} ${countSpan}`;


  const grid = document.getElementById('productsGrid');
  grid.innerHTML = list.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    const oos = p.stock === 0;

    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img" style="background-image: url('${p.img}');">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${oos ? '<div class="out-of-stock-badge">Out of Stock</div>' : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 90)}…</div>
        <div class="product-footer">
          <div class="product-price">£${p.price.toFixed(2)}</div>
          <button class="add-btn" ${oos ? 'disabled' : ''} onclick="event.stopPropagation(); addToCart(${p.id})">
            ${oos ? 'Out of Stock' : (inCart ? '✓ In Cart' : ' Add')}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function openModal(id) {
  const p = PRODUCTS.find(pr=>pr.id===id);
  modalProductId = id;
  const modalImg = document.getElementById('modalImg');
  modalImg.style.backgroundImage = `url('${p.img}')`;
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = `£${p.price.toFixed(2)}`;
  document.getElementById('modalStock').textContent = p.stock===0 ? '✗ Out of stock' : `✓ ${p.stock} in stock`;
  const btn = document.getElementById('modalAddBtn');
  btn.disabled = p.stock===0;
  btn.textContent = p.stock===0 ? 'Out of Stock' : ' Add to Cart';
  btn.onclick = ()=>{ addToCart(id); closeModal(); };
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if(!e || e.target.id==='modalOverlay' || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('open');
  }
}

// ─── CART ACTIONS ────────────────────────────────────────────────────────────
function addToCart(id) {
  const p = PRODUCTS.find(pr=>pr.id===id);
  if(!p || p.stock===0) return;
  const item = cart.find(c=>c.id===id);
  if(item) {
    if(item.qty >= p.stock) { toast('No more stock available', 'error'); return; }
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartCount();
  toast(`${p.name} added to cart`);
  renderProducts();
}

function removeFromCart(id) {
  cart = cart.filter(c=>c.id!==id);
  saveCart();
  updateCartCount();
  renderCart();
  renderProducts();
  toast('Item removed from basket');
}

function updateQty(id, delta) {
  const item = cart.find(c=>c.id===id);
  const p = PRODUCTS.find(pr=>pr.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty > p.stock) { item.qty = p.stock; toast('Maximum stock reached', 'error'); }
  if(item.qty < 1) { removeFromCart(id); return; }
  saveCart();
  updateCartCount();
  renderCart();
}

// ─── RENDER CART ─────────────────────────────────────────────────────────────
function renderCart() {
  const el = document.getElementById('cartContent');
  if(cart.length===0) {
    el.innerHTML = `<div class="empty-cart">
      <div class="icon">🛒</div>
      <h3>Your basket is empty</h3>
      <p style="color:var(--muted);margin-bottom:24px;">Add some products to get started</p>
      <button class="checkout-btn" style="max-width:240px;margin:0 auto;" onclick="showPage('home')">Browse Products</button>
    </div>`;
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  el.innerHTML = `<div class="cart-layout">
    <div class="cart-items">
      ${cart.map(item => {
        const p = PRODUCTS.find(pr=>pr.id===item.id);
        return `<div class="cart-item">
          <div class="cart-item-img" style="background-image: url('${p.img}'); background-size: cover; background-position: center; width: 60px; height: 60px; border-radius: 8px;"></div>
          <div>
            <div class="cart-item-cat">${p.cat}</div>
            <div class="cart-item-name">${p.name}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${p.id},1)">＋</button>
              <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
            </div>
          </div>
          <div class="cart-item-right">
            <div class="cart-item-price">£${(p.price*item.qty).toFixed(2)}</div>
            <div style="font-size:0.8rem;color:var(--muted);">£${p.price.toFixed(2)} each</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div>
      <div class="order-summary">
        <h3>Order Summary</h3>
        <div class="summary-row"><span>Subtotal (${getCartQty()} items)</span><span>£${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping===0?'<span style="color:var(--success)">FREE</span>':'£'+shipping.toFixed(2)}</span></div>
        ${shipping>0?'<div style="font-size:0.78rem;color:var(--muted);padding:4px 0;">Spend £50+ for free shipping</div>':''}
        <div class="summary-row total"><span>Total</span><span class="val">£${total.toFixed(2)}</span></div>
        <button class="checkout-btn" onclick="showPage('checkout')">Proceed to Checkout →</button>
        <button class="checkout-btn" style="background:var(--surface2);color:var(--text);margin-top:10px;" onclick="showPage('home')">← Continue Shopping</button>
      </div>
    </div>
  </div>`;
}

// ─── CHECKOUT ────────────────────────────────────────────────────────────────
function renderCheckoutSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  document.getElementById('checkoutSummary').innerHTML = `
    <h3>Order Summary</h3>
    ${cart.map(item => {
      const p = PRODUCTS.find(pr=>pr.id===item.id);
      return `<div class="summary-row"><span>${p.emoji} ${p.name} ×${item.qty}</span><span>£${(p.price*item.qty).toFixed(2)}</span></div>`;
    }).join('')}
    <div class="summary-row"><span>Shipping</span><span>${shipping===0?'FREE':'£'+shipping.toFixed(2)}</span></div>
    <div class="summary-row total"><span>Total</span><span class="val">£${total.toFixed(2)}</span></div>
  `;
}

function resetCheckoutSteps() {
  ['formStep1','formStep2','formStep3'].forEach((id,i)=>{
    document.getElementById(id).style.display = i===0?'block':'none';
  });
  ['step1ind','step2ind','step3ind'].forEach((id,i)=>{
    const el = document.getElementById(id);
    el.className = 'step-indicator' + (i===0?' active':'');
  });
}

function nextStep(step) {
  if(step===1) {
    const fields = ['firstName','lastName','email','address','city','postcode'];
    for(const f of fields) {
      if(!document.getElementById(f).value.trim()) {
        toast('Please fill in all delivery fields', 'error'); return;
      }
    }
    document.getElementById('formStep1').style.display='none';
    document.getElementById('formStep2').style.display='block';
    document.getElementById('step1ind').className='step-indicator done';
    document.getElementById('step2ind').className='step-indicator active';
  } else if(step===2) {
    const fields = ['cardName','cardNum','expiry','cvv'];
    for(const f of fields) {
      if(!document.getElementById(f).value.trim()) {
        toast('Please fill in all payment details', 'error'); return;
      }
    }
    buildReview();
    document.getElementById('formStep2').style.display='none';
    document.getElementById('formStep3').style.display='block';
    document.getElementById('step2ind').className='step-indicator done';
    document.getElementById('step3ind').className='step-indicator active';
  }
}

function prevStep(step) {
  if(step===2) {
    document.getElementById('formStep2').style.display='none';
    document.getElementById('formStep1').style.display='block';
    document.getElementById('step1ind').className='step-indicator active';
    document.getElementById('step2ind').className='step-indicator';
  } else if(step===3) {
    document.getElementById('formStep3').style.display='none';
    document.getElementById('formStep2').style.display='block';
    document.getElementById('step2ind').className='step-indicator active';
    document.getElementById('step3ind').className='step-indicator';
  }
}

function buildReview() {
  const fn = document.getElementById('firstName').value;
  const ln = document.getElementById('lastName').value;
  const addr = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const pc = document.getElementById('postcode').value;
  const country = document.getElementById('country').value;
  const cn = document.getElementById('cardNum').value;
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  document.getElementById('reviewDetails').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div style="background:var(--surface2);border-radius:10px;padding:16px;">
        <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">📦 Delivering to</div>
        <div style="font-weight:600;">${fn} ${ln}</div>
        <div style="color:var(--muted);font-size:0.88rem;line-height:1.6;">${addr}<br>${city}, ${pc}<br>${country}</div>
      </div>
      <div style="background:var(--surface2);border-radius:10px;padding:16px;">
        <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">💳 Paying with</div>
        <div style="font-weight:600;">Card ending in ${cn.replace(/\s/g,'').slice(-4)}</div>
        <div style="color:var(--muted);font-size:0.88rem;">Standard Checkout</div>
      </div>
    </div>
    <div style="background:var(--surface2);border-radius:10px;padding:16px;">
      <div style="font-size:0.75rem;color:var(--muted);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">🛒 Items</div>
      ${cart.map(item=>{
        const p=PRODUCTS.find(pr=>pr.id===item.id);
        return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);font-size:0.88rem;"><span>${p.emoji} ${p.name} ×${item.qty}</span><span style="color:var(--accent);font-weight:600;">£${(p.price*item.qty).toFixed(2)}</span></div>`;
      }).join('')}
      <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:1.1rem;font-weight:700;"><span>Total</span><span style="color:var(--accent);font-family:var(--font-display);">£${total.toFixed(2)}</span></div>
    </div>
  `;
}

function placeOrder() {
  const orderId = 'NOV-' + Date.now().toString(36).toUpperCase();
  const email = document.getElementById('email').value;
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  // Save order to localStorage
  const orders = JSON.parse(localStorage.getItem('nova_orders')||'[]');
  orders.push({ id: orderId, date: new Date().toISOString(), items: [...cart], total });
  localStorage.setItem('nova_orders', JSON.stringify(orders));

  // Update stock
  cart.forEach(item => {
    const p = PRODUCTS.find(pr=>pr.id===item.id);
    if(p) p.stock = Math.max(0, p.stock - item.qty);
  });

  // Show confirmation
  document.getElementById('orderRef').textContent = orderId;
  document.getElementById('confirmEmail').textContent = email;
  document.getElementById('confirmItems').innerHTML = `
    <h4>Items Ordered</h4>
    ${cart.map(item=>{
      const p=PRODUCTS.find(pr=>pr.id===item.id);
      return `<div class="confirm-item-row"><span>${p.emoji} ${p.name} ×${item.qty}</span><span class="price">£${(p.price*item.qty).toFixed(2)}</span></div>`;
    }).join('')}
    <div class="confirm-item-row" style="padding-top:12px;"><span><strong>Order Total</strong></span><span class="price"><strong>£${total.toFixed(2)}</strong></span></div>
  `;

  cart = [];
  saveCart();
  updateCartCount();
  showPage('confirmation');
}

function goHome() {
  showPage('home');
  renderProducts();
}

// ─── CARD FORMATTING ─────────────────────────────────────────────────────────
function formatCardNum(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.match(/.{1,4}/g)?.join(' ')||v;
  const display = v.padEnd(16,'•').match(/.{1,4}/g).join(' ');
  document.getElementById('displayCardNum').textContent = display;
}
function formatExpiry(el) {
  let v = el.value.replace(/\D/g,'');
  if(v.length>=2) v = v.substring(0,2)+'/'+v.substring(2,4);
  el.value = v;
  document.getElementById('displayExpiry').textContent = v||'MM/YY';
}
function scrollToProducts() {
    const element = document.getElementById("products-section");
    
    if (element) {
        // Header එකේ උස (height) ගන්නවා
        const headerHeight = document.querySelector("header").offsetHeight;
        
        // Section එක තියෙන තැන බලලා, Header එකේ උස අඩු කරනවා
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth" // Smooth scroll එකක් දෙන්න
        });
    }
}
// ─── INIT ────────────────────────────────────────────────────────────────────
updateCartCount();
renderProducts();
