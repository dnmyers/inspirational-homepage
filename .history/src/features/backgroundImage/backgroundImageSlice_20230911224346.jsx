import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    backgroundImages: [],
    isLoading: false,
    error: null,
};

export const fetchBackgroundImages