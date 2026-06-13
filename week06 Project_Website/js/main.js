const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("last-modified");

if (yearSpan && modifiedSpan) {
    yearSpan.textContent = new Date().getFullYear();
    modifiedSpan.textContent = document.lastModified;
}

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

const projectsData = [
    { id: 1, title: "Lumina Corporate Tower", category: "commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Serenity Eco Villa", category: "residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
{ id: 3, title: "National Art Museum", category: "public", image: "https://images.unsplash.com/photo-1643820509303-79e98ac7e006?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },    { id: 4, title: "Zenith Tech Hub", category: "commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Pinecrest Cabin", category: "residential", image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80" },
{ id: 6, title: "Central Public Library", category: "public", image: "https://images.unsplash.com/photo-1546953304-5d96f43c2e94?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }];

const galleryContainer = document.getElementById("gallery-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function buildGalleryHTML(projects) {
    return projects.map(project => `
        <figure class="gallery-card">
            <img src="${project.image}" alt="Architectural design of ${project.title}" loading="lazy" width="600" height="400">
            <figcaption>${project.title}</figcaption>
        </figure>
    `).join("");
}

function renderGallery(filterCategory) {
    if (!galleryContainer) return;

    let filteredProjects = projectsData;
    if (filterCategory !== "all") {
        filteredProjects = projectsData.filter(project => project.category === filterCategory);
    }

    galleryContainer.innerHTML = buildGalleryHTML(filteredProjects);
}

if (galleryContainer) {
    renderGallery("all");

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const category = e.target.dataset.category;
            renderGallery(category);
        });
    });
}

const contactForm = document.getElementById("contact-form");
const welcomeMessage = document.getElementById("welcome-message");

function displayWelcome() {
    if (!welcomeMessage) return;
    const storedName = localStorage.getItem("apexClientName");
    if (storedName) {
        welcomeMessage.innerHTML = `<h3>Welcome back, ${storedName}! We are ready to design your next vision.</h3>`;
    }
}

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const clientName = document.getElementById("name").value;
        localStorage.setItem("apexClientName", clientName);
        contactForm.reset();
        displayWelcome();
    });
}

if (welcomeMessage) {
    displayWelcome();
}