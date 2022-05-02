import React from "react";
import './TodayForecast.css';
import sunny from './sunny.png';

function TodayForecast() {
    return (
        <div className="TodayForecast">
            <h2>72</h2>
            <p>Sunny</p>
            <div>
                <img src={sunny} width="100" height="100"></img>
                <div className="HighLow">
                    <p>High: 82</p>
                    <p>Low: 67</p>
                </div>
            </div>
        </div>
    )
}

export default TodayForecast;