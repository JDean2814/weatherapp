import React, { useState } from "react";
import './SevenDayForecast.css';
import EachDay from "../EachDay/EachDay";

function SevenDayForecast(props) {

    function getDays(dt) {
        let day = props.getDayOfWeek(dt);
        return day;
    }

    return (
        <div className="SevenDay">
            <h2>7 Day Forecast</h2>
            {
                props.days.map(day => {
                    return <EachDay date={getDays(day.dt)}
                                    icon={day.weather[0].icon}
                                    tempHi={day.temp.max}
                                    tempLo={day.temp.min} />
                })
            }
        </div>
    )
}

export default SevenDayForecast;