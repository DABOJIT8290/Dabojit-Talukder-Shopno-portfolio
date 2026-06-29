/* ================================================================
   CURSOR SPOTLIGHT EFFECT
   মাউস যেখানে যাবে, সেখানে সবুজ আলো (glow) follow করবে।
   কাজ করে .cursor-glow এবং .cursor-dot এই দুইটা div এর CSS variable
   (--mx, --my) আপডেট করে। div দুইটা index.html এ <body> এর শুরুতে আছে।
================================================================ */
(function cursorSpotlight(){
  const glow = document.querySelector('.cursor-glow');
  const dot  = document.querySelector('.cursor-dot');
  if(!glow || !dot) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx, cy = my; // current (smoothed) position

  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, {passive:true});

  // touch support: light follows the last touch point
  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if(!t) return;
    mx = t.clientX;
    my = t.clientY;
  }, {passive:true});

  function loop(){
    // smooth easing so the light "glides" instead of snapping
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    const xPct = `${cx}px`;
    const yPct = `${cy}px`;
    glow.style.setProperty('--mx', xPct);
    glow.style.setProperty('--my', yPct);
    dot.style.setProperty('--mx', xPct);
    dot.style.setProperty('--my', yPct);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();


/* ================================================================
   PROJECT DATA + CARD IMAGES
   প্রতিটা project এর "cover" এ তোমার নিজের image path বসাও।
   যেমন: cover: './assets/Images/neural-portraits.jpg'
   Modal এও এই একই image দেখানো হবে।
================================================================ */
const projects = [
  // ---- AI IMAGE PROJECTS ----
  {
    id: 'Profile-Detais',
    cat: 'ai-image',
    title: 'Profile-Detais',
    year: 2026,
    role: 'All In one Frame',
    summary: 'Passionate about electronics, technology, and creative design. Building innovative solutions that create lasting impact.',
    description: 'Passionate Electronics Engineer, Tech Enthusiast, and Creative Designer dedicated to building innovative solutions, creating impactful digital experiences, and shaping the future through technology.This is an eye-catching e-commerce promotional banner designed primarily for a "Smart Electronics Sale" and an "Eid Dhamaka Offer."',
    cover: './assets/Images/MY Banner.png',
    tech: ['Claude AI','Arena AI','Gemine AI','Chat gpt']
  },
  {
    id: 'brand promotion',
    cat: 'ai-image',
    title: 'Brand Promotion',
    year: 2026,
    role: 'Daraz',
    summary: 'Discover unbeatable deals on your favorite products. From electronics to everyday essentials, enjoy quality, convenience, secure payments, and fast delivery, all in one place.',
    description: 'Discover everything you need in one place. Shop from a wide range of electronics, groceries, fashion, beauty, home & kitchen essentials, and more. Enjoy genuine products, amazing deals, secure payments, easy returns, and fast delivery. Start shopping today and save more with every order!',
    cover: './assets/Images/Daraz Poster.png',
    tech: ['Chat gpt','Gemine AI','Flow','Arena AI']
  },
  {
    id: 'Elactronics-Product',
    cat: 'ai-image',
    title: 'Elactronics-Product',
    year: 2026,
    role: 'Elactronics',
    summary: 'This is an eye-catching e-commerce promotional banner designed primarily for a "Smart Electronics Sale" and an "Eid Dhamaka Offer."',
    description: 'Upgrade your everyday tech with premium electronic accessories at unbeatable prices. Shop power banks, earbuds, headphones, chargers, and more with fast delivery and trusted quality."',
    cover: './assets/Images/Elactronics.png',
    tech: ['Flow','AI studio','Chat gpt','Arena AI']
  },

  // ---- AI VIDEO PROJECTS ----
  {
    id: 'cinematic-shorts',
    cat: 'ai-video',
    title: 'Cinematic Shorts',
    year: 2025,
    role: 'Director · Engineer',
    summary: 'Gen-3 + Runway pipeline producing on-brief 30s spots with consistent characters.',
    description: 'Hybrid pipeline combining Gen-3 keyframes, AnimateDiff motion, and Topaz upscales. Built a shot-list generator so a single creative can ship a 30s spot in a day.',
    cover: './assets/Images/ai3.jpeg',
    tech: ['Gen-3','AnimateDiff','Topaz','DaVinci']
  },
  {
    id: 'product-spin',
    cat: 'ai-video',
    title: 'Product Spin',
    year: 2025,
    role: 'Pipeline',
    summary: 'One image → 360° AI rotation videos for e-commerce, in under 60 seconds per SKU.',
    description: 'Pose-conditioned diffusion combined with a NeRF refinement pass produces clean 360° product rotations from a single hero photo.',
    cover: './assets/Images/ai4.jpeg',
    tech: ['Stable Video','NeRF','Three.js','Shopify']
  },
  {
    id: 'lipsync-studio',
    cat: 'ai-video',
    title: 'Lipsync Studio',
    year: 2024,
    role: 'R&D',
    summary: 'Browser-based lipsync for talking-head AI presenters with sub-150ms latency.',
    description: 'A WebGPU-accelerated lipsync engine that runs entirely client-side. Designed for live AI presenter use cases.',
    cover: './assets/Images/ai5.jpeg',
    tech: ['WebGPU','ONNX','TypeScript']
  },

  // ---- ELECTRONICS PROJECTS ----
  {
    id: 'esp-mesh-sensors',
    cat: 'electronics',
    title: 'ESP-Mesh Sensors',
    year: 2025,
    role: 'Hardware + Firmware',
    summary: 'Self-healing mesh of low-power air-quality sensors for industrial sites.',
    description: 'Custom ESP32-S3 PCBs with PMS7003 + BME688 sensors, self-healing ESP-Mesh networking, and an LTE bridge. Deployed at 4 sites; battery life > 18 months.',
    cover: './assets/Images/ai1.jpeg',
    tech: ['ESP32-S3','KiCad','FreeRTOS','Rust']
  }
];

/* ---------- RENDER PROJECT CARDS ---------- */
function renderProjects(){
  ['ai-image','ai-video','electronics'].forEach(cat => {
    const grid = document.querySelector(`.grid[data-cat="${cat}"]`);
    if(!grid) return;
    projects.filter(p => p.cat === cat).forEach(p => {
      const card = document.createElement('button');
      card.className = 'card';
      card.setAttribute('aria-label', `Open case study: ${p.title}`);
      card.dataset.id = p.id;
      card.innerHTML = `
        <img class="card-cover" src="${p.cover}" alt="${p.title} cover" loading="lazy" decoding="async"/>
        <div class="card-corner">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </div>
        <div class="card-overlay">
          <div class="card-meta"><span>${p.role}</span><span>${p.year}</span></div>
          <h4>${p.title}</h4>
          <p class="card-summary">${p.summary}</p>
          <div class="card-tech">${p.tech.slice(0,4).map(t => `<span>${t}</span>`).join('')}</div>
        </div>`;
      card.addEventListener('click', () => openModal(p));
      grid.appendChild(card);
    });
  });
}

/* ---------- PROJECT / CASE-STUDY MODAL ---------- */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
let lastFocus = null;

function openModal(p){
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <img src="${p.cover}" alt="${p.title} hero image"/>
    <div class="modal-content">
      <div class="eyebrow">${p.cat.replace('-',' / ').toUpperCase()}</div>
      <h2 id="modal-title">${p.title}</h2>
      <p>${p.description}</p>
      <dl class="modal-meta">
        <div><dt>Role</dt><dd>${p.role}</dd></div>
        <div><dt>Year</dt><dd>${p.year}</dd></div>
        <div><dt>Category</dt><dd>${p.cat.replace('-',' ')}</dd></div>
      </dl>
      <div class="modal-tech">${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}</div>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}
function closeModal(){
  modal.hidden = true;
  document.body.style.overflow = '';
  if(lastFocus) lastFocus.focus();
}
modal.addEventListener('click', (e) => { if(e.target.matches('[data-close]')) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ================================================================
   SECTION NAVIGATION  — smooth scroll + active link highlight + scrolled navbar
================================================================ */
document.querySelectorAll('[data-jump]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if(!href || !href.startsWith('#')) return;
    const el = document.getElementById(href.slice(1));
    if(!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({top, behavior: 'smooth'});
    document.getElementById('nav').classList.remove('open');
  });
});

const nav = document.getElementById('nav');
const sections = ['home','about','projects','contact'].map(id => document.getElementById(id));
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, {passive:true});
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(en.isIntersecting){
      const id = en.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, {rootMargin: '-45% 0px -50% 0px'});
sections.forEach(s => s && spy.observe(s));

/* ---------- REVEAL-ON-SCROLL ANIMATION ---------- */
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); reveal.unobserve(en.target); }});
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

/* ---------- MOBILE MENU TOGGLE ---------- */
document.getElementById('menu-toggle')?.addEventListener('click', () => nav.classList.toggle('open'));

/* ---------- FOOTER YEAR ---------- */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- INIT PROJECTS ---------- */
renderProjects();


/* ================================================================
   CERTIFICATES DATA + RENDER + ZOOM-ON-CLICK
   প্রতিটা certificate এর "img" এ তোমার নিজের certificate image path বসাও।
================================================================ */
const certificates = [
  { title:'Deep Learning Specialization', issuer:'DeepLearning.AI · 2024', img:'./assets/Images/p1.jpg' },
  { title:'AI Fundamentals',              issuer:'DeepLearning.AI · 2024', img:'./assets/Images/p1.jpg' },
  { title:'Dabojit IT',                   issuer:'Internal · 2024',        img:'./assets/Images/ai1.jpeg' },
  { title:'TensorFlow Developer',         issuer:'Google · 2024',          img:'./assets/Images/ai2.jpeg' },
  { title:'AWS ML Specialty',             issuer:'Amazon Web Services · 2023', img:'./assets/Images/ai1.jpeg' },
  { title:'Embedded Systems',             issuer:'University of Colorado · 2023', img:'./assets/Images/ai3.jpeg' },
  { title:'Generative AI with LLMs',      issuer:'DeepLearning.AI · 2024', img:'./assets/Images/ai4.jpeg' },
  { title:'IoT Architecture',             issuer:'Cisco Networking Academy · 2023', img:'./assets/Images/ai5.jpeg' }
];

function renderCertificates(){
  const grid = document.getElementById('cert-grid');
  if(!grid) return;
  certificates.forEach((c, i) => {
    const fig = document.createElement('figure');
    fig.className = 'cert';
    fig.setAttribute('tabindex','0');
    fig.setAttribute('role','button');
    fig.setAttribute('aria-label', `${c.title} — click to zoom`);
    fig.innerHTML = `
      <img src="${c.img}" alt="${c.title} certificate" loading="lazy" decoding="async"/>
      <figcaption class="cap"><span>${c.title}</span><span>0${i+1}</span></figcaption>`;
    grid.appendChild(fig);
  });
}

const certBackdrop = document.getElementById('cert-backdrop');
let zoomedCert = null;
function closeZoom(){
  if(zoomedCert){ zoomedCert.classList.remove('zoomed'); zoomedCert = null; }
  certBackdrop.classList.remove('on');
}
document.addEventListener('click', (e) => {
  const cert = e.target.closest('.cert');
  if(cert){
    if(cert === zoomedCert){ closeZoom(); return; }
    if(zoomedCert) zoomedCert.classList.remove('zoomed');
    cert.classList.add('zoomed');
    zoomedCert = cert;
    certBackdrop.classList.add('on');
    return;
  }
  if(zoomedCert) closeZoom();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && zoomedCert) closeZoom();
  if(e.key === 'Enter' && document.activeElement?.classList.contains('cert')){
    document.activeElement.click();
  }
});

renderCertificates();

/* ================================================================
   YOUTUBE VIDEOS SECTION
   এখানে তোমার YouTube video গুলো add করো।

   প্রতিটা video তে:
   - id      : YouTube video URL থেকে নাও। যেমন:
               https://www.youtube.com/watch?v=dQw4w9WgXcQ
               এখানে id হবে:  'dQw4w9WgXcQ'
   - title   : Video এর নাম
   - label   : Category / tag (যেমন: 'Tutorial', 'AI Demo')
   - year    : বছর

   Thumbnail automatically YouTube থেকে আসবে।
   Click করলে সরাসরি YouTube এ যাবে।
================================================================ */
const ytVideos = [
  {
    id: 'ipBkl91RwKk',          // ← তোমার YouTube video ID দাও
    title: 'Ads with AI',
    label: 'AI ads',
    year: 2026
  },
  {
    id: 'rm__ZFOHwKs',          // ← তোমার YouTube video ID দাও
    title: 'Logo Make with AI',
    label: 'LOGO Ads',
    year: 2026
  },
  {
    id: '',          // ← তোমার YouTube video ID দাও
    title: 'Electronics Project Showcase',
    label: 'ELECTRONICS',
    year: 2026
  },
  /**{
    id: '',          // ← তোমার YouTube video ID দাও
    title: 'Brand Design Process',
    label: 'DESIGN',
    year: 2025
  },
  {
    id: '',          // ← তোমার YouTube video ID দাও
    title: 'PLC Automation Demo',
    label: 'PLC',
    year: 2024
  },
  {
    id: '',          // ← তোমার YouTube video ID দাও
    title: 'App Development Walkthrough',
    label: 'APP DEV',
    year: 2025
  }*/
];

function renderYTVideos() {
  const grid = document.getElementById('yt-grid');
  if (!grid) return;

  ytVideos.forEach(v => {
    const thumbUrl = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
    const ytUrl    = `https://www.youtube.com/watch?v=${v.id}`;

    const card = document.createElement('a');
    card.className = 'yt-card';
    card.href = ytUrl;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `Watch: ${v.title} on YouTube`);

    card.innerHTML = `
      <img class="yt-thumb" src="${thumbUrl}" alt="${v.title} thumbnail"
           loading="lazy" decoding="async"
           onerror="this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'"/>
      <div class="yt-overlay"></div>

      <div class="yt-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2.1.3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.4 21.5 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zm-13.5 8.5V8.5l6.5 3.5-6.5 3.5z"/>
        </svg>
        YouTube
      </div>

      <div class="yt-play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>

      <div class="yt-info">
        <div class="yt-meta">
          <span>${v.label}</span>
          <span>${v.year}</span>
        </div>
        <p class="yt-title">${v.title}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

renderYTVideos();