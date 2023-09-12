const Weather = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        }, (error) => {
            console.log(error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }

    return (
        <div>Weather</div>
    );
}

export default Weather;