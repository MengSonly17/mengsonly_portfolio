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
        title: 'Shopier',
        type: 'E-commerce · Full Stack Website',
        year: '2026',
        status: 'development', // change to 'live' if deployed
        bg: 'bg-react',
        icon: '🛒',
        desc: 'Shopier is a modern e-commerce web application that allows users to browse products, manage carts, and place orders بسهولة. It is designed with a clean UI and focuses on product management and smooth user experience. The system includes backend functionality for handling products, users, and orders, making it a complete solution for online shopping platforms.',
        tags: ['Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Git'],
        features: [
            "User authentication (login & register)",
            "Browse products with categories",
            "Add to cart and manage cart items",
            "Order and checkout system",
            "Admin panel for product management",
            "Database integration with PostgreSQL",
            "Responsive design for multiple devices",
            "Clean and user-friendly UI",
            "Product listing and detail pages"
        ],
        demo: '', // add your live URL if deployed (e.g. Vercel, VPS)
        github: 'https://github.com/MengSonly17/shopier'
    },
    {
        title: 'Spring Boot Web API',
        type: 'Backend · REST API',
        year: '2026',
        status: 'development',
        bg: 'bg-react',
        icon: '⚙️',
        desc: 'Spring Boot Web API is a backend application built using Java and Spring Boot framework to provide RESTful APIs for web applications. The project demonstrates how to design scalable backend services, handle HTTP requests, and manage data using structured architecture. It focuses on building clean APIs that can be integrated with frontend applications such as React or mobile apps.',
        tags: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Hibernate', 'MySQL', 'Git', 'GitHub'],
        features: [
            "RESTful API architecture using Spring Boot",
            "CRUD operations (Create, Read, Update, Delete)",
            "Layered architecture (Controller, Service, Repository)",
            "Database integration with JPA/Hibernate",
            "API testing using Postman",
            "JSON-based request and response handling",
            "Scalable backend structure for future expansion",
            "Error handling and validation",
            "Easy integration with frontend frameworks"
        ],
        demo: '',
        github: 'https://github.com/MengSonly17/SpringbootWebAPI'
    },
    {
        title: 'Ecommerce ',
        type: 'E-commerce · Full Stack Website',
        year: '2026',
        status: 'development',
        bg: 'bg-react',
        icon: '🛍️',
        desc: 'Ecommerce is a collaborative full-stack web application developed as a university project. The platform allows users to explore products, manage shopping carts, and simulate an online shopping experience. It demonstrates core e-commerce functionalities such as authentication, product management, and order processing, making it a practical implementation of modern web development concepts.',
        tags: ['Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Git', 'GitHub'],
        features: [
            "User registration and login system",
            "Browse and view product details",
            "Add to cart and manage cart items",
            "Basic checkout functionality",
            "Admin panel for managing products",
            "Database integration for storing users and products",
            "Team collaboration project structure",
            "Responsive design for desktop and mobile",
            "Simple and clean UI for easy navigation"
        ],
        demo: '',
        github: 'https://github.com/MengSonly17/Ecommerce_midterm_group2'
    },
    {
        title: 'Flask Project  ',
        type: 'Web Application · Backend + Frontend',
        year: '2026',
        status: 'development',
        bg: 'bg-react',
        icon: '🐍',
        desc: 'Flask Project Final is a web application built using the Flask framework, a lightweight Python web framework designed for building scalable and flexible web apps :contentReference[oaicite:0]{index=0}. The project demonstrates core web development concepts including routing, template rendering, and database integration. It provides a functional platform that handles user interaction and backend processing efficiently.',
        tags: ['Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite/MySQL', 'Git', 'GitHub'],
        features: [
            "Flask-based web application structure",
            "Routing and dynamic page rendering",
            "User interaction with forms",
            "CRUD operations (Create, Read, Update, Delete)",
            "Database integration (SQLite/MySQL)",
            "Template engine (Jinja2)",
            "Responsive UI with Bootstrap",
            "Clean and simple project structure",
            "Suitable for learning full-stack Flask development"
        ],
        demo: '',
        github: 'https://github.com/MengSonly17/flask_project_final'
    },
    {
        title: 'Timer',
        type: 'Utility ·  ',
        year: '2026',
        status: 'Live',
        bg: 'bg-react',
        icon: '⏱️',
        desc: 'Timer is a simple and interactive web-based countdown and time management application. It allows users to track time efficiently for study, productivity, or daily tasks. Built with core frontend technologies, the project demonstrates how to handle time-based logic, user interaction, and dynamic updates in a clean and responsive interface.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
        features: [
            "Countdown timer functionality",
            "Real-time time updates using JavaScript",
            "Start, pause, and reset controls",
            "User-friendly and minimal UI design",
            "Lightweight and fast performance",
            "Easy to use for study or work sessions"
        ],
        demo: 'https://mengsonly17.github.io/timer/',
        github: 'https://github.com/MengSonly17/timer'
    },
    {
        title: 'Temperature Convertor',
        type: 'Utility ',
        year: '2026',
        status: 'Live',
        bg: 'bg-react',
        icon: '🌡️',
        desc: 'Temperature Convertor is a simple web-based application that allows users to convert temperature values between different units such as Celsius, Fahrenheit, and Kelvin. It is built using core frontend technologies and demonstrates real-time calculations, user input handling, and dynamic UI updates. This project is ideal for understanding basic JavaScript logic and unit conversion systems.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
        features: [
            "Convert temperature between Celsius, Fahrenheit, and Kelvin",
            "Real-time calculation and instant result display",
            "User-friendly input interface",
            "Dynamic updates using JavaScript",
            "Responsive design for multiple devices",
            "Lightweight and fast performance",
            "Clear and simple UI design",
            "Basic error handling for invalid input",
        ],
        demo: 'https://mengsonly17.github.io/temperature-convertor/',
        github: 'https://github.com/MengSonly17/temperature-convertor'
    },
    {
        title: 'Tip Calculator',
        type: 'Utility  ',
        year: '2026',
        status: 'Live',
        bg: 'bg-react',
        icon: '💰',
        desc: 'Tip Calculator is a simple and interactive web application that helps users calculate tips and split bills بسهولة. Users can input the total bill amount, select a tip percentage, and instantly see the tip amount and total cost per person. This project demonstrates fundamental JavaScript logic, user input handling, and real-time calculations in a clean and responsive interface.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
        features: [
            "Calculate tip based on bill amount and percentage",
            "Display total amount including tip",
            "Split bill among multiple people",
            "Real-time calculation updates",
            "User-friendly input interface",
            "Responsive design for mobile and desktop",
            "Dynamic DOM manipulation using JavaScript",
            "Clean and simple UI design",
            "Lightweight and fast performance"
        ],
        demo: 'https://mengsonly17.github.io/tip-culculator/',
        github: 'https://github.com/MengSonly17/tip-culculator'
    },
    {
        title: 'Age Calculator',
        type: 'Utility  ',
        year: '2026',
        status: 'Live',
        bg: 'bg-react',
        icon: '📅',
        desc: 'Age Calculator is a simple web app that calculates a person’s age based on their date of birth. Users can enter their birthdate and instantly see their age in years, months, and days. This project highlights real-time date handling with JavaScript, user input validation, and dynamic UI updates in a friendly and responsive interface.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
        features: [
            "Calculate age from date of birth",
            "Displays results in years, months, and days",
            "Real-time updates on input changes",
            "User-friendly date input interface",
            "Error handling for invalid or future dates",
            "Responsive layout for multiple devices",
            "Clean and clear UI design",
            "Interactive JavaScript logic"
        ],
        demo: 'https://mengsonly17.github.io/age-calculator/',
        github: 'https://github.com/MengSonly17/age-calculator'
    }

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
