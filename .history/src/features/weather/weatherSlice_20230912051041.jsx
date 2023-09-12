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


const initialState = {
    weather: {},
    isLoading: false,
    error: null,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const selectWeather = state => state.weather.weather;
export const selectIsLoading = state => state.weather.isLoading;
export const selectError = state => state.weather.error;

export default weatherSlice.reducer;