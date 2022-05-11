import React from "react";
import './EachDay.css';
import sunny from '../TodaysForecast/sunny.png';

function EachDay(props) {
    let iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`

    return (
        <div className="EachDay">
            <p>{props.date}</p>
            <div className="DayWeather">
                <img src={iconUrl} width="25" height="25"></img>
                <p>{Math.round(props.tempHi)}</p>
                <p>{Math.round(props.tempLo)}</p>
            </div>
        </div>
    )
}

export default EachDay;