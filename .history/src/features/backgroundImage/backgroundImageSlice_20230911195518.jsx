import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const loadBackgroundImages = () => {
    return async (dispatch, getState) => {
        const payload = await axios.get("https://api.unsplash.com/photos/random", {
            params: {
                query: 'nature',
                count: 5,
                client_id: ''
            }
        });
    }
};

// const fetchImages = createAsyncThunk('backgroundImage/getBackgroundImages', async() => {
//     try {
//         const response = await axios.get("https://api.unsplash.com/photos", {
//             params: {
//                 query: 'nature',
//                 count: 5,
//                 client_id: ''
//             }
//         })
//     }
// });

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
});



export default backgroundImageSlice.reducer;