import React from "react";
import './EachDay.css';
import sunny from '../TodaysForecast/sunny.png';

function EachDay() {
    return (
        <div className="EachDay">
            <p>Day</p>
            <div className="DayWeather">
                <img src={sunny} width="25" height="25"></img>
                <p>82</p>
                <p>62</p>
            </div>
        </div>
    )
}

export default EachDay;