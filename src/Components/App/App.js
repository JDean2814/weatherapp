import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import TodayForecast from '../TodaysForecast/TodayForecast';
import SevenDayForecast from '../SevenDayForecast/SevenDayForecast';

function App() {
  return (
    <div className='App'>
    <h1>Weather App</h1>  
      <div className='Weather'>        
        <SearchBar />
        <h2 className='CityName'>Mobile</h2>
        <TodayForecast />
        <SevenDayForecast />
      </div>
    </div>  
  );
}

export default App;
