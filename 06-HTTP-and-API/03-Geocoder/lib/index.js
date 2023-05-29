const userSubmit = document.querySelector(".btn-primary");
const userInput = document.querySelector(".form-control");
const form = document.querySelector("#form");
const token = "pk.eyJ1IjoicGhvZWJlYmVuIiwiYSI6ImNsaG9wbm95ODBzcm0zY25nMXEwb3dqMnAifQ.2IqlOUjOwKmrnwAOjLb51Q";
const paragraph = document.querySelector("p");
const maps = document.querySelector("#map-responsive");
mapboxgl.accessToken = "pk.eyJ1IjoicGhvZWJlYmVuIiwiYSI6ImNsaG9wbm95ODBzcm0zY25nMXEwb3dqMnAifQ.2IqlOUjOwKmrnwAOjLb51Q";

const getMapInfo = (userEntry) => {
  // TODO: Replace the following line with the correct url
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userEntry}.json?access_token=pk.eyJ1IjoicGhvZWJlYmVuIiwiYSI6ImNsaG9wbm95ODBzcm0zY25nMXEwb3dqMnAifQ.2IqlOUjOwKmrnwAOjLb51Q`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const longitude = data.features[0].center[0];
      const latitude = data.features[0].center[1];
      paragraph.innerHTML = `${longitude}, ${latitude}`;
      const newMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: 12,
      });
      // Create a new marker.
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(newMap);
    });
};

// TODO: Add an event listener to the form
// TODO: On submit, in the callback, call the getWeatherInfo function
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = userInput.value;
  const output = getMapInfo(input);
});
