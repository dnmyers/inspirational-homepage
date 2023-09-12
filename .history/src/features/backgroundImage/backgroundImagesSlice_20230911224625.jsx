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

export const fetchBackgroundImages =  createAsyncThunk(
    'backgroundImages/fetchBackgroundImages',
    return async(dispatch) => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random', {
                headers: {
                    Authorization: 'gFPP59h8dKdruIw57qC-8jRAwq6deHsN4QIF5I8ZIrA',

                }
            })
        }
    }
)