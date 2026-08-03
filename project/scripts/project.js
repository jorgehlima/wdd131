/* --
   Web Development for Beginners
   scripts/project.js
-- */

/* -- 1. Footer year + last modified -- */

function setFooterInfo() {

    const yearSpan = document.querySelector("#currentyear");
    const modifiedParagraph = document.querySelector("#lastModified");

    if (yearSpan) {
        const thisYear = new Date().getFullYear();
        yearSpan.textContent = `${thisYear}`;
    }

    if (modifiedParagraph) {
        const modified = new Date(document.lastModified);
        modifiedParagraph.textContent = `Last Updated: ${modified.toLocaleDateString()}`;
    }
}

/* -- 2. Mobile navigation toggle -- */

function initMobileNav() {

    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        if (isOpen) {
            menuButton.setAttribute("aria-label", "Close Navigation");
            menuButton.textContent = "✕";
        } else {
            menuButton.setAttribute("aria-label", "Open Navigation");
            menuButton.textContent = "☰";
        }
    });
}

/* -- 3. Dark / light theme toggle (localStorage) -- */

function applyTheme(theme) {

    const body = document.body;

    if (theme === "dark") {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
}

function initThemeToggle() {

    const toggleButton = document.querySelector("#theme-toggle");

    if (!toggleButton) return;

    const savedTheme = localStorage.getItem("wdd131-theme");

    if (savedTheme) {
        applyTheme(savedTheme);
        toggleButton.textContent = savedTheme === "dark" ? `☀️ Light Mode` : `🌙 Dark Mode`;
    } else {
        toggleButton.textContent = `🌙 Dark Mode`;
    }

    toggleButton.addEventListener("click", () => {

        const currentlyDark = document.body.classList.contains("dark-theme");
        const nextTheme = currentlyDark ? "light" : "dark";

        applyTheme(nextTheme);
        localStorage.setItem("wdd131-theme", nextTheme);

        toggleButton.textContent = nextTheme === "dark" ? `☀️ Light Mode` : `🌙 Dark Mode`;
    });
}

/* -- 4. Resources page search (objects, arrays, array methods)-- */

function initResourceSearch() {

    const searchBox = document.querySelector("#resourceSearch");
    const statusRegion = document.querySelector("#searchStatus");
    const cardElements = Array.from(document.querySelectorAll(".resource-card"));

    if (!searchBox || cardElements.length === 0) return;

    const resourceData = cardElements.map((card) => {

        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("p");

        return {
            element: card,
            name: heading ? heading.textContent.trim() : "",
            description: paragraph ? paragraph.textContent.trim() : ""
        };
    });

    searchBox.addEventListener("input", () => {

        const query = searchBox.value.trim().toLowerCase();

        const matches = resourceData.filter((resource) => {
            const haystack = `${resource.name} ${resource.description}`.toLowerCase();
            return haystack.includes(query);
        });

        const matchedElements = matches.map((resource) => resource.element);

        resourceData.forEach((resource) => {

            if (matchedElements.includes(resource.element)) {
                resource.element.classList.remove("hidden");
            } else {
                resource.element.classList.add("hidden");
            }
        });

        if (statusRegion) {

            if (query === "") {
                statusRegion.textContent = `Showing all ${resourceData.length} resources.`;
            } else if (matches.length === 0) {
                statusRegion.textContent = `No resources found for "${query}".`;
            } else {
                statusRegion.textContent = `Showing ${matches.length} of ${resourceData.length} resources for "${query}".`;
            }
        }
    });
}

/* -- 5. Contact form handling (objects, arrays, localStorage) -- */

function getSavedMessages() {

    const raw = localStorage.getItem("wdd131-contact-messages");
    return raw ? JSON.parse(raw) : [];
}

function renderMessageHistory() {

    const historyList = document.querySelector("#messageHistory");

    if (!historyList) return;

    const messages = getSavedMessages();

    if (messages.length === 0) {
        historyList.innerHTML = `<li class="no-messages">No messages sent from this browser yet.</li>`;
        return;
    }

    const recentMessages = messages.slice(-3).reverse();

    const listItems = recentMessages.map((message) => {
        return `<li><strong>${message.fullname}</strong> (${message.experience || "not specified"}) &mdash; ${message.date}</li>`;
    });

    historyList.innerHTML = listItems.join("");
}

function initContactForm() {

    const form = document.querySelector("#contactForm");
    const statusMessage = document.querySelector("#formStatus");

    if (!form) return;

    renderMessageHistory();

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const fullname = form.querySelector("#fullname").value.trim();
        const email = form.querySelector("#email").value.trim();
        const experience = form.querySelector("#experience").value;
        const comments = form.querySelector("#comments").value.trim();

        if (fullname === "" || email === "") {

            if (statusMessage) {
                statusMessage.textContent = `Please fill out your name and email before submitting.`;
                statusMessage.classList.add("form-error");
            }

            return;
        }

        const newMessage = {
            fullname,
            email,
            experience,
            comments,
            date: new Date().toLocaleDateString()
        };

        const savedMessages = getSavedMessages();
        savedMessages.push(newMessage);
        localStorage.setItem("wdd131-contact-messages", JSON.stringify(savedMessages));

        if (statusMessage) {
            statusMessage.classList.remove("form-error");
            statusMessage.textContent = `Thanks, ${fullname}! Your message has been received.`;
        }

        renderMessageHistory();
        form.reset();
    });
}

/* -- Run everything once the DOM is ready -- */

function init() {
    setFooterInfo();
    initMobileNav();
    initThemeToggle();
    initResourceSearch();
    initContactForm();
}

document.addEventListener("DOMContentLoaded", init);
