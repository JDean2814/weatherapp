import React from "react";
import './SevenDayForecast.css';
import EachDay from "../EachDay/EachDay";

function SevenDayForecast(props) {

//Using the function passed down from App parent component to get the days of the week using UNIX timestamp
    function getDays(dt) {
        let day = props.getDayOfWeek(dt);
        return day;
    }

//Rendering each day for the seven day forecast by using the map function on an array given by the API
    return (
        <div className="SevenDay">
            <h2>7 Day Forecast</h2>
            {
                props.days.map((day, index) => {
                    return <EachDay date={getDays(day.dt)}
                                    icon={day.weather[0].icon}
                                    tempHi={day.temp.max}
                                    tempLo={day.temp.min}
                                    key={index} />
                })
            }
        </div>
    )
}

export default SevenDayForecast;