// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
var apiKey = "dff737f9667ceea36e12968206553dde";

async function getWeather(apiKey, city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        var data = await response.json();

        if (response.ok) {
            console.log(data);
            //to update the values
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".description").innerHTML = data.weather[0].description;
            document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
            document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector("#cityName").innerHTML = data.name;

            document.querySelector("#t-v").innerHTML = Math.round(data.main.feels_like) + "°C";
            document.querySelector("#a-v").innerHTML = data.main.pressure + " hPa";
            document.querySelector("#v-v").innerHTML = data.visibility + " m";

            document.querySelector("#max-value").innerHTML = Math.round(data.main.temp_max) + "°C";
            document.querySelector("#min-value").innerHTML = Math.round(data.main.temp_min) + "°C";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }
            else if (data.weather[0].main == "Smoke") {
                weatherIcon.src = "images/smoke-2.png";
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }
            else if (data.weather[0].main == "Haze") {
                weatherIcon.src = "images/haze.png";
            }
        } else {
            console.error(`Error: ${data.message}`);
        }

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

const searchBox = document.querySelector(".search-section input");
const weatherIcon = document.querySelector(".weather-icon");
const searchBtn = document.querySelector(".search-section button");
searchBtn.addEventListener("click", () => {
    getWeather(apiKey, searchBox.value);
})



async function weather(apiKey, city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        var data = await response.json();

        if (response.ok) {

            if (city == "Delhi") {
                t1.innerHTML = Math.round(data.main.temp) + "°C";
                h1.innerHTML = data.main.humidity + "%";
                w1.innerHTML = data.wind.speed + " km/h";
            }
            if (city == "Beijing") {
                t2.innerHTML = Math.round(data.main.temp) + "°C";
                h2.innerHTML = data.main.humidity + "%";
                w2.innerHTML = data.wind.speed + " km/h";
            }
            if (city == "Budapest") {
                t3.innerHTML = Math.round(data.main.temp) + "°C";
                h3.innerHTML = data.main.humidity + "%";
                w3.innerHTML = data.wind.speed + " km/h";
            }

        } else {
            console.error(`Error: ${data.message}`);
        }

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

weather(apiKey, "Delhi");
weather(apiKey, "Beijing");
weather(apiKey, "Budapest");


