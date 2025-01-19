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
  