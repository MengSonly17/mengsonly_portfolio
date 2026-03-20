// Cursor
const dot = document.getElementById('curDot'), ring = document.getElementById('curRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
(function loop() { rx += (mx - rx) * .13; ry += (my - ry) * .13; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// Scroll progress + nav
const prog = document.getElementById('progress'), nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    prog.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%';
    nav.classList.toggle('stuck', scrollY > 40);
});

// Filter
const cards = document.querySelectorAll('.card[data-cat]');
const countEl = document.getElementById('visibleCount');
const noRes = document.getElementById('noResults');
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        let v = 0;
        cards.forEach(c => { const show = f === 'all' || c.dataset.cat.includes(f); c.classList.toggle('hidden', !show); if (show) v++; });
        countEl.textContent = v;
        noRes.classList.toggle('show', v === 0);
    });
});

// Modal data
const data = [
    {
        title: 'Popcorn', type: 'Movie · Static Website', year: '2025', status: 'live', bg: 'bg-react', icon: '⚡',
        desc: 'Discover your next favorite movie at Popcorn! Explore popular films, TV series, and new releases from around the world, all in one easy-to-use website. With clear categories and stunning movie images, finding great entertainment has never been easier. Whether you love action, comedy, drama, or animation, Popcorn helps you enjoy movies with just a few clicks.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Github', 'Vercel'],
        features: [
            "Browse movies and TV series by category",
            "Popular movies section on the homepage",
            "Movies from different regions (Cambodia, USA, China, Korea)",
            "Easy navigation with menu links",
            "Search and discover new films quickly",
            "Contact and About Us pages",
            "Notification alerts for new movies",
            "Enjoy our movies with large devices like Ipad Tablet Laptop and more",
            "High-quality movie images and banners"
        ],
        demo: 'https://popcorn-lime.vercel.app',
        github: 'https://github.com/MengSonly17/popcorn.git'
    },
    {
        title: 'Terra Shop', type: 'E-Commerce · Next.js', year: '2025', status: 'live', bg: 'bg-ecommerce', icon: '🛒',
        desc: 'Full-featured plant care e-commerce store handling the complete purchase flow from browsing to delivery tracking. Stripe integration for payments, automated email receipts, and a Shopify-like admin panel for inventory.',
        tags: ['Next.js 14', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind', 'Resend'],
        features: ['Full Stripe checkout with webhook handling', 'Admin panel for inventory and order management', 'Automated email notifications via Resend', 'Customer account portal with order history', 'Product reviews and ratings system'],
        demo: '#', github: '#'
    },
    {
        title: 'Flux Finance', type: 'Mobile · React Native', year: '2024', status: 'live', bg: 'bg-mobile', icon: '💸',
        desc: 'Personal finance app that connects to bank accounts via the Plaid API. Uses ML to categorize transactions, identify spending patterns, and surface actionable insights. 2.1k downloads on App Store.',
        tags: ['React Native', 'Expo', 'Python', 'FastAPI', 'Plaid API', 'TensorFlow Lite'],
        features: ['Bank connection via Plaid API', 'AI-powered spending categorization', 'Budget goal tracking with push alerts', 'Animated charts and trend visualizations', 'Biometric authentication (FaceID/TouchID)'],
        demo: '#', github: '#'
    },
    {
        title: 'QuickAPI', type: 'API · Developer Tool', year: '2024', status: 'live', bg: 'bg-api', icon: '🔌',
        desc: 'Developer productivity tool for spinning up fully-featured mock REST APIs without writing server code. Define your schema in JSON, get a working API with auth, rate limiting, and CORS in under 30 seconds. Used by 800+ devs.',
        tags: ['Node.js', 'Express', 'Redis', 'Docker', 'JSON Schema', 'JWT', 'Railway'],
        features: ['Schema-driven API generation from JSON config', 'JWT and API key authentication options', 'Built-in rate limiting and request logging', 'Auto-generated OpenAPI/Swagger documentation', 'One-click Docker container deployment'],
        demo: '#', github: '#'
    },
    {
        title: 'TaskFlow', type: 'React · SaaS', year: '2024', status: 'live', bg: 'bg-react', icon: '📋',
        desc: 'Collaborative project management app with a Kanban interface. Teams can create boards, assign tasks, set deadlines, and track progress. GitHub integration syncs PRs and commits to relevant tasks automatically.',
        tags: ['React', 'DnD Kit', 'Socket.io', 'Node.js', 'MongoDB', 'GitHub OAuth'],
        features: ['Drag-and-drop Kanban with custom columns', 'Real-time collaboration via Socket.io', 'GitHub PR and commit sync integration', 'Time tracking and burndown charts', 'Slack notification webhooks'],
        demo: '#', github: '#'
    },
    {
        title: 'Scribe CMS', type: 'Full-Stack · Headless CMS', year: '2025', status: 'wip', bg: 'bg-fullstack', icon: '📰',
        desc: 'A flexible headless CMS aimed at developers and content teams. Ships both REST and GraphQL APIs. The editor is built on TipTap with custom blocks, and media is stored on S3 with automatic WebP conversion.',
        tags: ['Vue 3', 'Pinia', 'GraphQL', 'Supabase', 'AWS S3', 'TipTap', 'Docker'],
        features: ['Rich-text editor with custom block types', 'REST + GraphQL dual API output', 'Multi-language and i18n content fields', 'Role-based editorial workflow and approval', 'S3 media library with auto-optimization'],
        demo: '#', github: '#'
    },
    {
        title: 'PaceTrack', type: 'Mobile · Fitness', year: '2023', status: 'live', bg: 'bg-mobile', icon: '🏃',
        desc: 'GPS running tracker for serious athletes. Records routes, elevation, pace, and heart rate. Social features let friends challenge each other to weekly distance goals. 1.4k installs on Google Play.',
        tags: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'MapBox', 'HealthKit', 'Firebase'],
        features: ['GPS route recording with elevation profiling', 'HealthKit and Google Fit integration', 'Friends and weekly challenge system', 'Leaderboards with personal records', 'Offline recording with background sync'],
        demo: '#', github: '#'
    },
    {
        title: 'DocuMind', type: 'AI · Full-Stack', year: '2025', status: 'live', bg: 'bg-node', icon: '🤖',
        desc: 'Upload any PDF and ask it questions in plain English. Uses OpenAI embeddings chunked into Pinecone, with a LangChain RAG pipeline to retrieve the most relevant sections and generate grounded, cited answers.',
        tags: ['Python', 'LangChain', 'Pinecone', 'OpenAI', 'Next.js', 'FastAPI', 'Vercel'],
        features: ['PDF upload with automatic chunking and indexing', 'Vector similarity search via Pinecone', 'Source citation included in every answer', 'Conversation history per uploaded document', 'Multi-document cross-reference mode'],
        demo: '#', github: '#'
    },
    {
        title: 'Arthaus Market',
        type: 'E-Commerce · Marketplace',
        year: '2025', status: 'wip',
        bg: 'bg-ecommerce',
        icon: '🎨',
        desc: 'A marketplace for independent digital artists to sell prints, assets, and optionally mint as NFTs on Solana. Handles creator payouts via Stripe Connect. Advanced search with style, medium, and color filters.',
        tags: ['Next.js', 'Solana Web3.js', 'IPFS', 'Stripe Connect', 'Prisma', 'Algolia'],
        features: ['Creator storefront with payout dashboard', 'Optional Solana NFT minting via IPFS', 'Stripe Connect split payment handling', 'Algolia-powered visual search with filters', 'Print-on-demand via Printful integration'],
        demo: '#',
        github: '#'
    },
];

function renderProject() {
    let td = '';

    data.forEach((item, index) => {
        td += `
            <div class="card" data-cat="ecommerce react" data-id="${index}">
                <div class="card-banner">
                    <div class="card-banner-bg bg-ecommerce"></div>
                    <div class="card-banner-pattern"></div>
                    <div class="card-banner-num">0${index + 1}</div>
                    <div class="card-banner-icon">${item.icon}</div>
                    <div class="card-status status-live">● ${item.status}</div>
                </div>
                <div class="card-body">
                    <div class="card-top">
                        <span class="card-type">${item.type}</span>
                        <span class="card-year">${item.year}</span>
                    </div>
                    <div class="card-title">${item.title}</div>
                    <div class="card-desc">${item.desc}</div>
                    <div class="card-tags"> 
                        ${item.tags.map(tag => `<span class="tag accent">${tag}</span>`).join('')}
                    </div>
                    <div class="card-foot">
                        <div class="card-links">
                            <a href="${item.demo}" target="_blank" class="card-link">↗ Demo</a>
                            <a  href="${item.github}" target="_blank" class="card-link">⌥GitHub</a>
                        </div>
                        <button class="card-arrow" data-open="${index}">→</button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('grid').innerHTML = td;
}

renderProject();


function openModal(id) {
    const d = data[id];
    const b = document.getElementById('modalBanner');
    b.className = 'modal-banner ' + d.bg;
    document.getElementById('modalIcon').textContent = d.icon;
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalDesc').textContent = d.desc;
    const sc = d.status === 'live' ? 'status-live' : d.status === 'wip' ? 'status-wip' : 'status-closed';
    const sl = d.status === 'live' ? '● Live' : d.status === 'wip' ? '◐ In Progress' : '◌ Closed';
    document.getElementById('modalMeta').innerHTML = `<span class="card-status ${sc}" style="position:static">${sl}</span><span class="card-type">${d.type}</span><span class="card-year" style="margin-left:auto">${d.year}</span>`;
    document.getElementById('modalTags').innerHTML = d.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modalFeatures').innerHTML = d.features.map(f => `<div class="modal-feature">${f}</div>`).join('');
    document.getElementById('modalLinks').innerHTML = `<a href="${d.demo}" class="modal-link ml-primary">↗ Live Demo</a><a href="${d.github}" class="modal-link ml-ghost">⌥ GitHub</a>`;
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('open'); document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', e => { if (e.target === document.getElementById('modal')) closeModal(); });
document.getElementById('modalClose').addEventListener('click', closeModal);
document.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => openModal(+el.dataset.open)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) { closeMobileMenu(); }
    else { hamburger.classList.add('open'); mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMobileMenu(); } });


// ── ABOUT SKILL BARS ──
const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); } });
}, { threshold: .3 });

document.querySelectorAll('.about-skill').forEach(s => {
    const pct = parseFloat(s.dataset.pct || 0);
    s.querySelector('.about-skill-fill').style.transform = `scaleX(${pct})`;
    s.querySelector('.about-skill-fill').style.transitionDelay = '0s';
    // reset then animate
    s.querySelector('.about-skill-fill').style.transform = 'scaleX(0)';
    skillObs.observe(s);
});

// When vis class added, apply the scale
const skillMutObs = new MutationObserver(muts => {
    muts.forEach(m => {
        if (m.target.classList.contains('vis')) {
            const pct = parseFloat(m.target.dataset.pct || 0);
            m.target.querySelector('.about-skill-fill').style.transform = `scaleX(${pct})`;
        }
    });
});

document.querySelectorAll('.about-skill').forEach(s => skillMutObs.observe(s, { attributes: true, attributeFilter: ['class'] }));
