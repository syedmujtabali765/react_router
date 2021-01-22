import React, { useEffect, useState } from "react";
import '../css/weather.css';
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState();
    const [search, setsearch] = useState('karachi');

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=34fb560878911fc3db61d9944cbe72b4&units=metric`)
            // const resJson = await res.json();
            console.log(res);

            setCity(res);
        }
        getData();
    }, [search]);
    return (
        <>
            <div id="main">
                <div className="box1">
                    <div>
                        <input
                            type="search"
                            className="inputField1"
                            value={search}
                            onChange={(events) => { setsearch(events.target.value); }} />
                    </div>

                    {!city ? (
                        <p className="errorMsg1">No Data Found</p>
                    ) : (
                            <div className="info1">
                                <br />
                                <h2>{search}</h2>
                                <br />
                                <h2>{city.data.main.temp}<sup>°C</sup></h2>
                                <br />
                                <h2>Feel Like: {city.data.main.feels_like}</h2>
                                <br />
                                <h2>Min : {city.data.main.temp} | Max : {city.data.main.temp}</h2>
                                <br />
                                <h2>{city.data.weather[0].description}</h2>
                                <br />
                                <h2>Humidity: {city.data.main.humidity}%</h2>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}
export default Weather;


