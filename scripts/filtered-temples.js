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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Brasilia Brazil Temple",
    location: "Federal District, Brazil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
{
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
},
{
    templeName: "Brussels Belgium Temple",
    location: "Brussels Belgium",
    dedicated: "2021, April, 4",
    area: 25500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brussels-belgium-temple/brussels-belgium-temple-56533-main.jpg"
},
  // Add more temple objects here...
];
const cards = document.querySelector("#templeCards");

function displayTemples(temples) {
    cards.innerHTML = "";

    temples.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("card");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        cards.appendChild(card);
    });
}

displayTemples(temples);