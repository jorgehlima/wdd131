// Dynamically set the current year in the footer copyright notice
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically display the last modified date of this document
document.getElementById('lastModified').textContent =
    `Last Modification: ${document.lastModified}`;
