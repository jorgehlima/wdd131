// Footer
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
modified.textContent = `Last Modification: ${document.lastModified}`;

// Static weather values
const temperature = 87; // °F
const windSpeed = 8;    // mph

const windChill = document.querySelector("#windchill");

// Function to calculate wind chill (Imperial formula)
function calculateWindChill(temp, speed) {
    return (
        35.74 +
        (0.6215 * temp) -
        (35.75 * Math.pow(speed, 0.16)) +
        (0.4275 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

// Display wind chill only if conditions are met
if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)}°F`;
} else {
    windChill.textContent = "N/A";
}