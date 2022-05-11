import React from "react";
import './SevenDayForecast.css';
import EachDay from "../EachDay/EachDay";

function SevenDayForecast(props) {

    return (
        <div className="SevenDay">
            <h2>7 Day Forecast</h2>
            {
                props.days.map(day => {
                    return <EachDay date={'Days'}
                                    icon={day.weather[0].icon}
                                    tempHi={day.temp.max}
                                    tempLo={day.temp.min} />
                })
            }
        </div>
    )
}

export default SevenDayForecast;