const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModParagraph = document.querySelector("#lastModified");
lastModParagraph.textContent = `Last Modification: ${document.lastModified}`;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
