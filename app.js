(function(){
  'use strict';

  /* =====================================================
     PRODUCT DATA (initial seed) — Afghan Afghani prices
     ===================================================== */
  const initialProducts = {
    women: [
      { name:'مانتو کتان کرم', cat:'مانتو زنانه', price:1480, oldPrice:1850, off:20,
        img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=520&fit=crop&auto=format' },
      { name:'پیراهن سرمه‌ای شب', cat:'پیراهن مجلسی', price:2100, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=520&fit=crop&auto=format' },
      { name:'شلوار پارچه‌ای زغالی', cat:'شلوار زنانه', price:960, oldPrice:1130, off:15,
        img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=520&fit=crop&auto=format' },
      { name:'ژاکت بافت خردلی', cat:'ژاکت زنانه', price:1220, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=520&fit=crop&auto=format' },
      { name:'شومیز گلدار بهاری', cat:'شومیز زنانه', price:650, oldPrice:930, off:30,
        img:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=520&fit=crop&auto=format' },
      { name:'دامن پلیسه بلند', cat:'دامن زنانه', price:840, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=520&fit=crop&auto=format' }
    ],
    men: [
      { name:'کاپشن اسپرت مشکی', cat:'کاپشن مردانه', price:1950, oldPrice:2380, off:18,
        img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=520&fit=crop&auto=format' },
      { name:'پیراهن یقه‌دار سفید', cat:'پیراهن مردانه', price:890, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=520&fit=crop&auto=format' },
      { name:'شلوار جین آبی تیره', cat:'شلوار مردانه', price:720, oldPrice:960, off:25,
        img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=520&fit=crop&auto=format' },
      { name:'هودی سنگ‌شور طوسی', cat:'هودی مردانه', price:980, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=520&fit=crop&auto=format' },
      { name:'کت تک اداری سرمه‌ای', cat:'کت تک مردانه', price:2640, oldPrice:3000, off:12,
        img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=520&fit=crop&auto=format' },
      { name:'تیشرت ساده کرم', cat:'تیشرت مردانه', price:390, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=520&fit=crop&auto=format' }
    ],
    kids: [
      { name:'ست دورنگ پاییزه', cat:'لباس پسرانه', price:520, oldPrice:580, off:10,
        img:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=520&fit=crop&auto=format' },
      { name:'پیراهن گلدار صورتی', cat:'لباس دخترانه', price:480, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=520&fit=crop&auto=format' },
      { name:'کیف دستی چرم قهوه‌ای', cat:'کیف دستی', price:1150, oldPrice:1350, off:15,
        img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=520&fit=crop&auto=format' },
      { name:'کتونی اسپرت سفید', cat:'کتونی', price:1080, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=520&fit=crop&auto=format' },
      { name:'بوت چرم مشکی', cat:'بوت و چکمه', price:1490, oldPrice:1860, off:20,
        img:'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=520&fit=crop&auto=format' },
      { name:'شال ابریشمی طرح‌دار', cat:'شال و روسری', price:320, oldPrice:null, off:0,
        img:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=520&fit=crop&auto=format' }
    ]
  };

  /* =====================================================
     STATE
     ===================================================== */
  let products = JSON.parse(JSON.stringify(initialProducts));
  let cart = [];

  /* =====================================================
     HELPERS
     ===================================================== */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ✅ Afghan Afghani currency
  function toman(n){ return Number(n).toLocaleString('fa-IR') + ' افغانی'; }

  /* =====================================================
     RENDER RAILS
     ===================================================== */
  function productCardHTML(p){
    const offBadge = p.off > 0
      ? `<span class="off">${p.off.toLocaleString('fa-IR')}٪</span>`
      : '';
    const wasPrice = p.oldPrice
      ? `<span class="was">${toman(p.oldPrice)}</span>`
      : '';
    return `
      <div class="p-card">
        <div class="media">
          ${offBadge}
          <button class="wish" aria-label="افزودن به علاقه‌مندی‌ها">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>
            </svg>
          </button>
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="body">
          <p class="cat">${p.cat}</p>
          <h3>${p.name}</h3>
          <div class="prices">
            <span class="now">${toman(p.price)}</span>
            ${wasPrice}
          </div>
          <button class="add"
            data-name="${p.name}"
            data-price="${p.price}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            افزودن به سبد
          </button>
        </div>
      </div>
    `;
  }

  function renderRail(railId, list){
    const rail = document.getElementById(railId);
    if(!rail) return;
    rail.innerHTML = list.map(productCardHTML).join('');
    bindCardEvents(rail);
  }

  function renderAllRails(){
    renderRail('railWomen', products.women);
    renderRail('railMen', products.men);
    renderRail('railKids', products.kids);
  }

  function bindCardEvents(root){
    // wishlist toggles
    $$('.wish', root).forEach(btn => {
      btn.addEventListener('click', () => btn.classList.toggle('active'));
    });
    // add-to-cart buttons
    $$('.add', root).forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.p-card');
        const img = card.querySelector('.media img').getAttribute('src');
        cart.push({
          name: btn.getAttribute('data-name'),
          price: parseFloat(btn.getAttribute('data-price')),
          img: img
        });
        renderCart();
        const original = btn.innerHTML;
        btn.classList.add('added');
        btn.innerHTML = 'افزوده شد ✓';
        setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = original; }, 1200);
        openCart();
      });
    });
  }

  /* =====================================================
     CART
     ===================================================== */
  const cartCount   = document.getElementById('cartCount');
  const drawerItems = document.getElementById('drawerItems');
  const subtotalEl  = document.getElementById('subtotal');
  const cartDrawer  = document.getElementById('cartDrawer');
  const overlay     = document.getElementById('overlay');

  function renderCart(){
    cartCount.textContent = cart.length.toLocaleString('fa-IR');
    if(cart.length === 0){
      drawerItems.innerHTML = '<p class="drawer-empty">سبد خرید شما خالی است.</p>';
      subtotalEl.textContent = toman(0);
      return;
    }
    let html = '';
    let total = 0;
    cart.forEach((item, i) => {
      total += item.price;
      html += `
        <div class="d-item">
          <div class="thumb"><img src="${item.img}" alt=""></div>
          <div style="flex:1;">
            <div class="name">${item.name}</div>
            <div class="meta"><span>۱ عدد</span><span>${toman(item.price)}</span></div>
            <button class="remove" data-index="${i}">حذف</button>
          </div>
        </div>
      `;
    });
    drawerItems.innerHTML = html;
    subtotalEl.textContent = toman(total);
    $$('.remove', drawerItems).forEach(btn => {
      btn.addEventListener('click', () => {
        cart.splice(parseInt(btn.getAttribute('data-index'), 10), 1);
        renderCart();
      });
    });
  }

  function openCart(){ cartDrawer.classList.add('open'); overlay.classList.add('open'); }
  function closeCart(){
    cartDrawer.classList.remove('open');
    if(!mnav.classList.contains('open')) overlay.classList.remove('open');
  }

  /* =====================================================
     MOBILE MENU
     ===================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mnav = document.getElementById('mnav');

  menuToggle.addEventListener('click', () => {
    mnav.classList.add('open');
    overlay.classList.add('open');
  });
  function closeMnav(){
    mnav.classList.remove('open');
    if(!cartDrawer.classList.contains('open')) overlay.classList.remove('open');
  }
  document.getElementById('mnavClose').addEventListener('click', closeMnav);

  $$('.macc').forEach(li => {
    const top = li.querySelector('.mnav-top');
    const sub = li.querySelector('.mnav-sub');
    top.addEventListener('click', () => {
      const isOpen = li.classList.contains('open');
      $$('.macc').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.mnav-sub').style.maxHeight = null;
      });
      if(!isOpen){
        li.classList.add('open');
        sub.style.maxHeight = sub.scrollHeight + 'px';
      }
    });
  });

  /* =====================================================
     RAIL CONTROLS
     ===================================================== */
  $$('.rail-controls').forEach(ctrl => {
    const target = document.getElementById(ctrl.getAttribute('data-target'));
    if(!target) return;
    ctrl.querySelector('.rail-prev').addEventListener('click', () => target.scrollBy({left: 260, behavior:'smooth'}));
    ctrl.querySelector('.rail-next').addEventListener('click', () => target.scrollBy({left: -260, behavior:'smooth'}));
  });

  /* =====================================================
     FAQ ACCORDION
     ===================================================== */
  $$('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      $$('.faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* =====================================================
     NEWSLETTER
     ===================================================== */
  document.getElementById('newsForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('newsSuccess').style.display = 'block';
    e.target.reset();
  });

  /* =====================================================
     CART / DRAWER EVENTS
     ===================================================== */
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeDrawer').addEventListener('click', closeCart);
  overlay.addEventListener('click', () => { closeCart(); closeMnav(); });

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const note = document.getElementById('checkoutNote');
    note.style.display = 'block';
    setTimeout(() => { note.style.display = 'none'; }, 2800);
  });

  /* =====================================================
     ADD PRODUCT MODAL (ADDING BOX)
     ===================================================== */
  const fabAdd     = document.getElementById('fabAdd');
  const addOverlay = document.getElementById('addModalOverlay');
  const addForm    = document.getElementById('addProductForm');
  const addCancel  = document.getElementById('addCancel');
  const addClose   = document.getElementById('addModalClose');

  function openAddModal(){
    addOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAddModal(){
    addOverlay.classList.remove('open');
    document.body.style.overflow = '';
    addForm.reset();
  }

  fabAdd.addEventListener('click', openAddModal);
  addCancel.addEventListener('click', closeAddModal);
  addClose.addEventListener('click', closeAddModal);
  addOverlay.addEventListener('click', e => {
    if(e.target === addOverlay) closeAddModal();
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && addOverlay.classList.contains('open')) closeAddModal();
  });

  addForm.addEventListener('submit', e => {
    e.preventDefault();

    const name     = document.getElementById('pName').value.trim();
    const cat      = document.getElementById('pCat').value;
    const price    = parseFloat(document.getElementById('pPrice').value);
    const oldPrice = parseFloat(document.getElementById('pOldPrice').value) || null;
    const off      = parseInt(document.getElementById('pOff').value, 10) || 0;
    const railKey  = document.getElementById('pRail').value;
    const imgInput = document.getElementById('pImg').value.trim();

    if(!name || isNaN(price)) return;

    // auto-compute off% if oldPrice given but no off
    let finalOff = off;
    if(!finalOff && oldPrice && oldPrice > price){
      finalOff = Math.round(((oldPrice - price) / oldPrice) * 100);
    }

    const fallbackImg = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=520&fit=crop&auto=format';

    const newProduct = {
      name,
      cat,
      price,
      oldPrice: oldPrice && oldPrice > price ? oldPrice : null,
      off: finalOff,
      img: imgInput || fallbackImg
    };

    products[railKey].unshift(newProduct);

    const railIdMap = { women: 'railWomen', men: 'railMen', kids: 'railKids' };
    const railEl = document.getElementById(railIdMap[railKey]);
    renderRail(railIdMap[railKey], products[railKey]);

    // scroll to the rail so the user sees the new item
    if(railEl){
      railEl.scrollIntoView({behavior:'smooth', block:'start'});
      setTimeout(() => railEl.scrollTo({left: 0, behavior:'smooth'}), 400);
    }

    closeAddModal();
  });

  /* =====================================================
     INIT
     ===================================================== */
  renderAllRails();
  renderCart();
})();