const year = document.querySelector("#currentyear");

const modified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

modified.textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    hamButton.classList.toggle("open");

});