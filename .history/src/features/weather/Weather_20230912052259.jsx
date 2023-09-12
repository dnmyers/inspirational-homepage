import { useState } from 'react';

const Weather = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            (error) => {
                console.log(error);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    // TODO: Fetch weather data from OpenWeatherMap API
    // To get icons, change 11d in the following url
    // to whichever icon code is received
    // * https://openweathermap.org/img/wn/11d@2x.png

    return (
        <>
            <div>Weather</div>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </>
    );
}

export default Weather;