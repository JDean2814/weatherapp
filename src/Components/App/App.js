import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import TodayForecast from '../TodaysForecast/TodayForecast';
import SevenDayForecast from '../SevenDayForecast/SevenDayForecast';
import Weather from '../../util/Weather';

function App() {

  const [city, setCity] = useState();
  const [currWeather, setCurrWeather] = useState({});
  const [sevWeather, setSevWeather] = useState({});

  React.useEffect(() => {
    setCity('New York');
    Weather.searchCity('New York').then(results => {
      Weather.searchWeather(results[0], results[1]).then(results => {
        setCurrWeather(results[0]);
        results[1].daily.shift();
        setSevWeather(results[1].daily);
      });
    });
  }, []);


  function search(search) {
    setCity(search);
    Weather.searchCity(search).then(results => {
      Weather.searchWeather(results[0], results[1]).then(results => {
        setCurrWeather(results[0]);
        results[1].daily.shift();
        setSevWeather(results[1].daily);
      });
    });
  }

  function getDayOfWeek(dt) {
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    date.setTime(dt * 1000);
    return daysArr[date.getDay()];
}

  function getDate(dt) {
    let date = new Date(dt * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
  
  if(!city || !currWeather) {
    return <h1>Loading...</h1>
  }  else {
    return (
      <div className='App'>
        <h1>Weather App</h1>      
        <div className='Weather'> 
          <SearchBar onSearch={search} />
          <h2 className='CityName'>{currWeather.name}</h2>
          <h3>{getDayOfWeek(currWeather.dt)} {getDate(currWeather.dt)}</h3>
          <TodayForecast temp={currWeather.main.temp}
                        sky={currWeather.weather[0].main}
                        icon={currWeather.weather[0].icon}
                        tempHi={currWeather.main.temp_max}
                        tempLo={currWeather.main.temp_min}
                        />
          <SevenDayForecast days={sevWeather}
                            getDayOfWeek={getDayOfWeek} />
        </div>
      </div>  
    );
  }
}

export default App;
