const Weather = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
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