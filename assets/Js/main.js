    // ============================================================
    // PROJECT CARD IMAGE গুলো কিভাবে বদলাবে:
    //
    // নিচে প্রতিটা project এর "cover" field এ এখন placeholder SVG আছে।
    // তুমি সেটা বদলে নিজের image এর path দিতে পারো।
    //
    // উদাহরণ (আগে):
    //   cover: ph('22d3ee','a78bfa','Neural Portraits'),
    //
    // উদাহরণ (পরে — নিজের image দিয়ে):
    //   cover: 'assets/images/neural-portraits.jpg',
    //   অথবা:
    //   cover: 'https://i.imgur.com/তোমার-image-link.jpg',
    //
    // Modal এ যে image দেখায় সেটাও একই "cover" থেকে আসে।
    // তাই cover বদলালে card এবং modal দুটোতেই নতুন image আসবে।
    // ============================================================

    const ph = (h1,h2,label) => ``;

    const projects = [
      // ---- AI IMAGE PROJECTS ----
      {
        id: 'neural-portraits',
        cat: 'ai-image',
        title: 'Neural Portraits',
        year: 2025,
        role: 'AI Director',
        summary: 'A SDXL LoRA pipeline producing editorial-grade portraits in 9 brand styles.',
        description: 'A fine-tuned SDXL pipeline trained on 4,000 curated references. The system shipped with a ComfyUI-based studio interface, batched A/B grading, and automatic upscaling to 4K. We delivered 800+ on-brand portraits for a fashion launch in under two weeks.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: './assets/Images/ai6.png',
        // cover: 'assets/images/neural-portraits.jpg',
        tech: ['SDXL','LoRA','ComfyUI','Python','Real-ESRGAN']
      },
      {
        id: 'brand-archetypes',
        cat: 'ai-image',
        title: 'Brand Archetypes',
        year: 2025,
        role: 'Lead Engineer',
        summary: 'Custom diffusion model + prompt graph that locks visual identity across campaigns.',
        description: 'We trained a brand-specific diffusion model with strict colour, lighting, and composition tokens, then built a node-based prompt graph so the marketing team could ship hundreds of on-brand images without an AI specialist in the loop.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: ph('a78bfa','f472b6','Brand Archetypes'),
        // cover: 'assets/images/brand-archetypes.jpg',
        tech: ['Diffusers','ControlNet','React','FastAPI']
      },
      {
        id: 'editorial-grader',
        cat: 'ai-image',
        title: 'Editorial Grader',
        year: 2024,
        role: 'Tooling',
        summary: 'Automated grading tool that scores generations against an art-direction rubric.',
        description: 'A CLIP + vision-language scoring rig that scores raw generations against a written art-direction rubric, surfaces winners, and writes back caption metadata. Cut our review cycle by ~70%.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: 'ai1.jpeg',
        // cover: 'assets/images/editorial-grader.jpg',
        tech: ['CLIP','GPT-4o','Node','SQLite']
      },

      // ---- AI VIDEO PROJECTS ----
      {
        id: 'cinematic-shorts',
        cat: 'ai-video',
        title: 'Cinematic Shorts',
        year: 2025,
        role: 'Director · Engineer',
        summary: 'Gen-3 + Runway pipeline producing on-brief 30s spots with consistent characters.',
        description: 'Hybrid pipeline combining Gen-3 keyframes, AnimateDiff motion, and Topaz upscales. Built a shot-list generator so a single creative can ship a 30s spot in a day. Used by three agency partners on commissioned launches.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: ph('22d3ee','a3e635','Cinematic Shorts'),
        // cover: 'assets/images/cinematic-shorts.jpg',
        tech: ['Gen-3','AnimateDiff','Topaz','DaVinci']
      },
      {
        id: 'product-spin',
        cat: 'ai-video',
        title: 'Product Spin',
        year: 2025,
        role: 'Pipeline',
        summary: 'One image → 360° AI rotation videos for e-commerce, in under 60 seconds per SKU.',
        description: 'Pose-conditioned diffusion combined with a NeRF refinement pass produces clean 360° product rotations from a single hero photo. Deployed as a Shopify app for boutique brands.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: 'ai1.jpeg',
        // cover: 'assets/images/product-spin.jpg',
        tech: ['Stable Video','NeRF','Three.js','Shopify']
      },
      {
        id: 'lipsync-studio',
        cat: 'ai-video',
        title: 'Lipsync Studio',
        year: 2024,
        role: 'R&D',
        summary: 'Browser-based lipsync for talking-head AI presenters with sub-150ms latency.',
        description: 'A WebGPU-accelerated lipsync engine that runs entirely client-side. Designed for live AI presenter use cases — keynote demos, kiosk avatars, accessibility lecture playback.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: 'ai1.jpeg',
        // cover: 'assets/images/lipsync-studio.jpg',
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
        description: 'Custom ESP32-S3 PCBs with PMS7003 + BME688 sensors, self-healing ESP-Mesh networking, and an LTE bridge. Deployed at 4 sites; battery life > 18 months. Firmware in C++ on FreeRTOS, host stack on Rust.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: './assets/Images/ai1.jpeg',
        // cover: 'assets/images/esp-mesh.jpg',
        tech: ['ESP32-S3','KiCad','FreeRTOS','Rust']
      },
      {
        id: 'esp-mesh-sensors',
        cat: 'electronics',
        title: 'Dabojit Project',
        year: 2025,
        role: 'Hardware + Firmware',
        summary: 'Self-healing mesh of low-power air-quality sensors for industrial sites.',
        description: 'Custom ESP32-S3 PCBs with PMS7003 + BME688 sensors, self-healing ESP-Mesh networking, and an LTE bridge. Deployed at 4 sites; battery life > 18 months. Firmware in C++ on FreeRTOS, host stack on Rust.',
        // ▼▼▼ এখানে তোমার image path দাও ▼▼▼
        cover: 'ai1.jpeg',
        // cover: 'assets/images/esp-mesh.jpg',
        tech: ['ESP32-S3','KiCad','FreeRTOS','Rust']
      }
    ];

    // ---------- RENDER PROJECTS ----------
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

    // ---------- MODAL ----------
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

    // ---------- SMOOTH SCROLL with header offset ----------
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

    // ---------- NAV scroll state + scroll spy ----------
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

    // ---------- REVEAL ON SCROLL ----------
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); reveal.unobserve(en.target); }});
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

    // ---------- MOBILE MENU ----------
    document.getElementById('menu-toggle')?.addEventListener('click', () => nav.classList.toggle('open'));

    // ---------- YEAR ----------
    document.getElementById('yr').textContent = new Date().getFullYear();

    // ---------- INIT ----------
    renderProjects();

    // ============================================================
    // CERTIFICATE IMAGE গুলো কিভাবে বদলাবে:
    //
    // নিচে প্রতিটা certificate এর "img" field এ এখন placeholder SVG আছে।
    // নিজের certificate এর real image দিতে চাইলে:
    //
    // উদাহরণ (আগে):
    //   img: certPh('22d3ee','a78bfa','Deep Learning','DeepLearning.AI · 2024')
    //
    // উদাহরণ (পরে — নিজের image দিয়ে):
    //   img: 'assets/certificates/deep-learning.jpg',
    //   অথবা:
    //   img: 'https://i.imgur.com/তোমার-cert-image.jpg',
    // ============================================================

    const certPh = (h1,h2,title,issuer) => `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23${h1}'/><stop offset='1' stop-color='%23${h2}'/></linearGradient></defs><rect width='800' height='600' fill='%230b0f1a'/><rect x='30' y='30' width='740' height='540' rx='14' fill='none' stroke='url(%23g)' stroke-width='2'/><rect x='60' y='60' width='680' height='480' rx='8' fill='none' stroke='url(%23g)' stroke-width='1' opacity='.5'/><text x='400' y='180' text-anchor='middle' font-family='serif' font-size='22' fill='%239ca3af' letter-spacing='6'>CERTIFICATE</text><text x='400' y='220' text-anchor='middle' font-family='serif' font-size='14' fill='%239ca3af' letter-spacing='4'>OF COMPLETION</text><text x='400' y='320' text-anchor='middle' font-family='serif' font-size='34' fill='url(%23g)' font-weight='700'>${title}</text><text x='400' y='380' text-anchor='middle' font-family='monospace' font-size='14' fill='%239ca3af'>${issuer}</text><circle cx='650' cy='460' r='40' fill='none' stroke='url(%23g)' stroke-width='2'/><text x='650' y='466' text-anchor='middle' font-family='monospace' font-size='12' fill='url(%23g)' font-weight='700'>✓</text></svg>`;

    const certificates = [
      {
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI · 2024',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: "./assets/Images/p1.jpg"
        // img: 'assets/certificates/deep-learning.jpg',
      },
      {
        title: 'Dabojit IT',
        issuer: 'DeepLearning.AI · 2024',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: 'ai1.jpeg'
        // img: 'assets/certificates/deep-learning.jpg',
      },
      {
        title: 'TensorFlow Developer',
        issuer: 'Google · 2024',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: 'ai1.jpeg'
        // img: 'assets/certificates/tensorflow.jpg',
      },
      {
        title: 'AWS ML Specialty',
        issuer: 'Amazon Web Services · 2023',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('f472b6','22d3ee','AWS ML','Amazon Web Services · 2023')
        // img: 'assets/certificates/aws-ml.jpg',
      },
      {
        title: 'Embedded Systems',
        issuer: 'University of Colorado · 2023',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('a3e635','22d3ee','Embedded Sys','University of Colorado · 2023')
        // img: 'assets/certificates/embedded.jpg',
      },
      {
        title: 'Generative AI with LLMs',
        issuer: 'DeepLearning.AI · 2024',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('22d3ee','a3e635','Gen AI / LLMs','DeepLearning.AI · 2024')
        // img: 'assets/certificates/gen-ai.jpg',
      },
      {
        title: 'IoT Architecture',
        issuer: 'Cisco Networking Academy · 2023',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('0ea5e9','a78bfa','IoT Architect','Cisco · 2023')
        // img: 'assets/certificates/iot.jpg',
      },
      {
        title: 'Computer Vision Nanodegree',
        issuer: 'Udacity · 2022',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('a78bfa','22d3ee','Computer Vision','Udacity · 2022')
        // img: 'assets/certificates/computer-vision.jpg',
      },
      {
        title: 'React Advanced Patterns',
        issuer: 'Frontend Masters · 2024',
        // ▼▼▼ এখানে তোমার certificate এর real image path দাও ▼▼▼
        img: certPh('f472b6','a3e635','React Patterns','Frontend Masters · 2024')
        // img: 'assets/certificates/react.jpg',
      }
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
