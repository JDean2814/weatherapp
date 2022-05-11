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
        setSevWeather(results[1].daily);
      });
    });
  }, []);


  function search(search) {
    setCity(search);
    Weather.searchCity(search).then(results => {
      Weather.searchWeather(results[0], results[1]).then(results => {
        setCurrWeather(results[0]);
        setSevWeather(results[1].daily);
      });
    });
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
          <TodayForecast temp={currWeather.main.temp}
                        sky={currWeather.weather[0].main}
                        icon={currWeather.weather[0].icon}
                        tempHi={currWeather.main.temp_max}
                        tempLo={currWeather.main.temp_min}
                        />
          <SevenDayForecast days={sevWeather} />
        </div>
      </div>  
    );
  }
}

export default App;
