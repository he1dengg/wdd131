const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModParagraph = document.querySelector("#lastModified");
lastModParagraph.textContent = `Last Modification: ${document.lastModified}`;
