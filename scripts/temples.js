// Dynamic Footer Dates
const currentYearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
}

const menuButton = document.getElementById("menu");
const navigationList = document.querySelector(".navigation");

if (menuButton && navigationList) {
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("open");
        navigationList.classList.toggle("open");
    });
}