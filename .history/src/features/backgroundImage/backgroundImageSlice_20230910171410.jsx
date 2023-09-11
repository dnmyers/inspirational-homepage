import {
    createSlice
} from '@reduxjs/toolkit';

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0,
    },
    reducers: {
        getBackgroundImages: (state, action) => {
            state.isPending = true;
            state.isFulfilled = false;
        },

    }
})