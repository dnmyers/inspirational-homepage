import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (lat, lon, exclude) => {

    })
)