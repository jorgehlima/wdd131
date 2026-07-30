let count = Number(localStorage.getItem("reviewCount")) || 0;

count++;

localStorage.setItem("reviewCount", count);

document.querySelector("#reviewCount").textContent = count;

/*-- Footer --*/
document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;

