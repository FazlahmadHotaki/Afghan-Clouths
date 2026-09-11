/* =====================================================
   PRODUCT DATA (initial seed) — Afghan prices in AFN
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
   HELPERS
   ===================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ✅ Afghan Afghani currency
function toman(n){ return Number(n).toLocaleString('fa-IR') + ' افغانی'; }