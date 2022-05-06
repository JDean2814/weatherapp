const apiKey = '71a9af80e5fec649349d98fd51cd3685';
const baseURL = 'https://api.openweathermap.org/data/2.5/';
const geoURL = `http://api.openweathermap.org/geo/1.0/`;
let lat;
let lon;

const Weather = {
    async searchCity(search) {
        const urlToFetch = `${geoURL}direct?q=${search}&limit=5&appid=${apiKey}`;

        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                lat = jsonResponse[0].lat;
                lon = jsonResponse[0].lon;
                let arr = [lat, lon];
                return arr;
            }
        }catch(error) {
            console.log(error);
        }
    },

    async searchWeather(lat, lon) {
        const urlToFetch = `${baseURL}onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=imperial`;

        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        }catch(error) {
            console.log(error);
        }
    }
}

export default Weather;