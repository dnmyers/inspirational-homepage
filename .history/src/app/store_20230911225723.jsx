import {
    configureStore
} from '@reduxjs/toolkit';

import { backgroundImagesSlice } from '../features/backgroundImages/backgroundImagesSlice';

const store = configureStore({
    reducer: {
        backgroundImages: backgroundImagesSlice.reducer,
        // weather: weather.reducer,
        // quote: quoteReducer,
        // tasks: tasksReducer,
        // error: errorReducer,
    }
});

export default store;