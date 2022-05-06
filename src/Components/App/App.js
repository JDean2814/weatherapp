import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import TodayForecast from '../TodaysForecast/TodayForecast';
import SevenDayForecast from '../SevenDayForecast/SevenDayForecast';
import Weather from '../../util/Weather';

function App() {

  const [city, setCity] = useState();
  const [weather, setWeather] = useState({});

  function search(search) {
    setCity(search);
    Weather.searchCity(search).then(results => {
      Weather.searchWeather(results[0], results[1]).then(results => {
        setWeather(results.current);
      });
    });
  }
  
  return (
    <div className='App'>
      <h1>Weather App</h1>  
      <div className='Weather'>        
        <SearchBar onSearch={search} />
        <h2 className='CityName'>{city}</h2>
        <TodayForecast temp={weather.temp}
                       sky={weather.weather[0].main}
                       icon={weather.weather[0].icon}
                       />
        <SevenDayForecast />
      </div>
    </div>  
  );
}

export default App;
