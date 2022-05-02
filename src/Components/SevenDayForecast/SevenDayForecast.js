import React from "react";
import './SevenDayForecast.css';
import EachDay from "../EachDay/EachDay";

function SevenDayForecast() {
    return (
        <div className="SevenDay">
            <h2>7 Day Forecast</h2>
            <EachDay />
            <EachDay />
            <EachDay />
        </div>
    )
}

export default SevenDayForecast;