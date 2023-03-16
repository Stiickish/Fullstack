//Get the user's location
function getLocation() {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition((position) =>
        resolve(position.coords)
      );
    } catch (e) {
      reject(new Error(e));
    }
  });
}

//Get the weather for that location
async function getWeather(coords) {
  return new Promise((resolve, reject) => {
    const apiKey = "28f7e9b0081e7e51fe70f0475f1f620f";
    const url =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude +
      "&apiKey=" +
      apiKey;
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.responseText));
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.send();
  });
}

//Calling function
/* getLocation()
  .then((position) => console.log(position))
  .catch((error) => console.log(error));

getWeather({ latitude: 55.6808, longitude: 12.542 })
  .then((weather) => console.log(weather))
  .catch((error) => console.log(error)); */

const getBoth = async () => {
  try {
    const location = await getLocation();
    const weather = await getWeather(location);
    document.getElementById("weather").innerHTML = weather.main.temp;
    document.getElementById("weather").innerHTML =
      weather.main.temp + " " + weather.weather[0].description;

    console.log(weather);
  } catch (error) {
    console.log(error);
  }
};

getBoth();
