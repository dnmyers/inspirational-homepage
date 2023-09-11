import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        backgroundImages: [],
        isPending: false,
        isFulfilled: false,
    },
    reducers: {
        getBackgroundImages: (state, action) => {
            state.isPending = true;
            state.isFulfilled = false;
        },

    }
})