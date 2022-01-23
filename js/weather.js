const API_KEY = "e88b90bc866ead095a8ee460c4097e00";

function handleGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const geolocation = document.querySelector("#weather div");
      geolocation.innerText = `${data.name}, ${Math.floor(data.main.temp)}℃ ${
        data.weather[0].main
      }`;
    });
}

function handleGeoError() {
  alert("Can't find your weather information");
}

navigator.geolocation.getCurrentPosition(handleGeo, handleGeoError);
