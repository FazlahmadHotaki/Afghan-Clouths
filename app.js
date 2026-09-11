(function(){
  // ---- Mobile menu ----
  var menuToggle = document.getElementById('menuToggle');
  var mnav = document.getElementById('mnav');
  var overlay = document.getElementById('overlay');
  var cartDrawer = document.getElementById('cartDrawer');

  menuToggle.addEventListener('click', function(){
    mnav.classList.add('open');
    overlay.classList.add('open');
  });
  document.getElementById('mnavClose').addEventListener('click', closeMnav);
  function closeMnav(){
    mnav.classList.remove('open');
    if(!cartDrawer.classList.contains('open')) overlay.classList.remove('open');
  }

  document.querySelectorAll('.macc').forEach(function(li){
    var top = li.querySelector('.mnav-top');
    var sub = li.querySelector('.mnav-sub');
    top.addEventListener('click', function(){
      var isOpen = li.classList.contains('open');
      document.querySelectorAll('.macc').forEach(function(other){
        other.classList.remove('open');
        other.querySelector('.mnav-sub').style.maxHeight = null;
      });
      if(!isOpen){
        li.classList.add('open');
        sub.style.maxHeight = sub.scrollHeight + 'px';
      }
    });
  });

  // ---- Rails ----
  document.querySelectorAll('.rail-controls').forEach(function(ctrl){
    var target = document.getElementById(ctrl.getAttribute('data-target'));
    ctrl.querySelector('.rail-prev').addEventListener('click', function(){
      target.scrollBy({left: 260, behavior: 'smooth'});
    });
    ctrl.querySelector('.rail-next').addEventListener('click', function(){
      target.scrollBy({left: -260, behavior: 'smooth'});
    });
  });

  // ---- Wishlist ----
  document.querySelectorAll('.wish').forEach(function(btn){
    btn.addEventListener('click', function(){ btn.classList.toggle('active'); });
  });

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(other){
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // ---- Cart ----
  var cart = [];
  var cartCount = document.getElementById('cartCount');
  var drawerItems = document.getElementById('drawerItems');
  var subtotalEl = document.getElementById('subtotal');

  function toman(n){ return n.toLocaleString('fa-IR') + ' تومان'; }

  function renderCart(){
    cartCount.textContent = cart.length.toLocaleString('fa-IR');
    if(cart.length === 0){
      drawerItems.innerHTML = '<p class="drawer-empty">سبد خرید شما خالی است.</p>';
      subtotalEl.textContent = toman(0);
      return;
    }
    var html = '';
    var total = 0;
    cart.forEach(function(item, i){
      total += item.price;
      html += '<div class="d-item">' +
        '<div class="thumb"><img src="' + item.img + '" alt=""></div>' +
        '<div style="flex:1;">' +
          '<div class="name">' + item.name + '</div>' +
          '<div class="meta"><span>۱ عدد</span><span>' + toman(item.price) + '</span></div>' +
          '<button class="remove" data-index="' + i + '">حذف</button>' +
        '</div>' +
      '</div>';
    });
    drawerItems.innerHTML = html;
    subtotalEl.textContent = toman(total);
    drawerItems.querySelectorAll('.remove').forEach(function(btn){
      btn.addEventListener('click', function(){
        cart.splice(parseInt(btn.getAttribute('data-index'), 10), 1);
        renderCart();
      });
    });
  }

  document.querySelectorAll('.add').forEach(function(btn){
    btn.addEventListener('click', function(){
      var card = btn.closest('.p-card');
      var img = card.querySelector('.media img').getAttribute('src');
      cart.push({
        name: btn.getAttribute('data-name'),
        price: parseFloat(btn.getAttribute('data-price')),
        img: img
      });
      renderCart();
      var original = btn.innerHTML;
      btn.classList.add('added');
      btn.innerHTML = 'افزوده شد ✓';
      setTimeout(function(){ btn.classList.remove('added'); btn.innerHTML = original; }, 1200);
      openCart();
    });
  });

  function openCart(){ cartDrawer.classList.add('open'); overlay.classList.add('open'); }
  function closeCart(){ cartDrawer.classList.remove('open'); if(!mnav.classList.contains('open')) overlay.classList.remove('open'); }
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeDrawer').addEventListener('click', closeCart);
  overlay.addEventListener('click', function(){ closeCart(); closeMnav(); });

  document.getElementById('checkoutBtn').addEventListener('click', function(){
    var note = document.getElementById('checkoutNote');
    note.style.display = 'block';
    setTimeout(function(){ note.style.display = 'none'; }, 2800);
  });

  // ---- Newsletter ----
  document.getElementById('newsForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('newsSuccess').style.display = 'block';
    document.getElementById('newsForm').reset();
  });
})();