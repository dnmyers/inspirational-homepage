import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchWeather,
    selectWeather,
    selectError,
    selectIsLoading,
} from './weatherSlice';


const Weather = () => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            },
            (error) => {
                console.log(error);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    useEffect(() => {
        if (lat && lon) {
            dispatch(fetchWeather(lat, lon));
        }
    }, [dispatch, lat, lon]);

    // TODO: Fetch weather data from OpenWeatherMap API
    // To get icons, change 11d in the following url
    // to whichever icon code is received
    // * https://openweathermap.org/img/wn/11d@2x.png

    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    if(error) {
        console.error(error.message || error);
        return <h1>Error: {error.message || error}</h1>;
    }

    return (
        <>
            <div>Weather</div>
            <div>Latitude: {lat}</div>
            <div>Longitude: {lon}</div>
        </>
    );
}

export default Weather;