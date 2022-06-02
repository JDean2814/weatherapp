import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import TodayForecast from '../TodaysForecast/TodayForecast';
import SevenDayForecast from '../SevenDayForecast/SevenDayForecast';
import Weather from '../../util/Weather';

function App() {

  const [currWeather, setCurrWeather] = useState({});
  const [sevWeather, setSevWeather] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchError, setSearchError] = useState();

  React.useEffect(() => {
    Weather.searchCity(['New York', 'NY']).then(results => {
      Weather.searchWeather(results[0], results[1]).then(results => {
        setCurrWeather(results[0]);
        results[1].daily.shift();
        setSevWeather(results[1].daily);
        setIsLoaded(true);
      });
    });
  }, []);


  function search(search) {
    Weather.searchCity(search).then(results => {
      (results ? setSearchError(false) : setSearchError(true));
      Weather.searchWeather(results[0], results[1]).then(results => {
        setCurrWeather(results[0]);
        results[1].daily.shift();
        setSevWeather(results[1].daily);
      });
    });
  }

  function hideModal() {
    setSearchError(false);
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

  return (
      <div className='App'>
        <h1>Weather App</h1>
        <h3 className='instruct'>Search for a city by typing city name followed by a comma and two letter state code. </h3>      
        <div className='Weather'> 
          <SearchBar onSearch={search}
                     ifError={searchError}
                     hideModal={hideModal}
                     />
        {(isLoaded) ? (
        <div>  
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
        ) : (<div className='loader'></div>)}                 
        </div>
      </div>  
    );
}    

export default App;
