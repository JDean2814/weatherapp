const baseURL = 'https://api.openweathermap.org/data/2.5/';
const geoURL = `http://api.openweathermap.org/geo/1.0/`;
let current;
let sevenDay;
let lat;
let lon;

const Weather = {
    async searchCity(search) {
        const urlToFetch = `${geoURL}direct?q=${search}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

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
        const sevenUrlToFetch = `${baseURL}onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
        const currUrlToFetch = `${baseURL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
        let arr = [];

        try {
            const response = await fetch(currUrlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                current = jsonResponse;
            }
        }catch(error) {
            console.log(error);
        };

        try {
            const response = await fetch(sevenUrlToFetch);
            if(response.ok) {
                const jsonResponse = await response.json();
                sevenDay = jsonResponse;
            }
        } catch (error) {
            console.log(error);
        };

        return arr = [current, sevenDay];

    }
}

export default Weather;
