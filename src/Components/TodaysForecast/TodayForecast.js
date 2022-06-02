import React from "react";
import './TodayForecast.css';
//import sunny from './sunny.png';

function TodayForecast(props) {
    let iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
    
    return (
        <div className="TodayForecast">
            <h2>{Math.round(props.temp)}°</h2>
            <p className="sky">{props.sky}</p>
            <div>
                <img src={iconUrl} width="100" height="100" alt=""></img>
                <div className="HighLow">
                    <p>High: {Math.round(props.tempHi)}°</p>
                    <p>Low: {Math.round(props.tempLo)}°</p>
                </div>
            </div>
        </div>
    )
}

export default TodayForecast;