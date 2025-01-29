// Function to display the current date and time
function displayDate() {
    const dateElement = document.querySelector("#last-modified");
    
    // Get the current date and time
    const currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  
  // Function to simulate weather data
  function displayWeather() {
    const weatherElement = document.querySelector("#weather");
    const weatherInfo = {
      location: "Lagos, Nigeria", // Updated location
      temperature: "86°F",
      condition: "🌤️ Partly Cloudy",
    };
    weatherElement.innerHTML = `
      <p>${weatherInfo.location}</p>
      <p>${weatherInfo.temperature} - ${weatherInfo.condition}</p>
    `;
  }
  
  // Update date and time every second
  window.onload = function () {
    displayWeather(); // Display weather once when the page loads
    setInterval(displayDate, 1000); // Update date and time every second
  };
  document.addEventListener("DOMContentLoaded", function () {
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Store preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });

    // Check dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    
});
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (nav.style.display === "flex") {
      nav.style.display = "none";
      hamburger.innerHTML = "☰"; // Change back to hamburger icon
  } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      hamburger.innerHTML = "✖"; // Change to close icon
  }
}
