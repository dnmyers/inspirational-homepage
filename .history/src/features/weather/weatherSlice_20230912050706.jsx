import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (lat, lon, exclude) => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall', {
                params: {
                    lat,
                    lon,
                    exclude,
                    appid: 'e3c2b3f7a1e7a1f3c0b0e6e0d9b1c6c0',
                },
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
);
