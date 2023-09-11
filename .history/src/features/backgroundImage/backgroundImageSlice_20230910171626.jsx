import {
    createSlice
} from '@reduxjs/toolkit';

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0,
        isPending: false,
        hasErrors: false,
    },
    reducers: {
        getBackgroundImages: (state, action) => {
            state.isPending = true;
            state.hasErrors = false;
        },

    }
})