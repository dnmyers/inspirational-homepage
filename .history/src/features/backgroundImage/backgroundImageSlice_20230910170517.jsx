import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImage
    },
    reducers: {
        getBackgroundImages: (state, action) => {
            state.isPending = true;
            state.isFulfilled = false;
        },

    }
})