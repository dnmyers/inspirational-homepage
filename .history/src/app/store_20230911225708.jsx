import {
    configureStore
} from '@reduxjs/toolkit';

import { backgroundImages } from '../features/backgroundImages/backgroundImagesSlice';

const store = configureStore({
    reducer: {
        backgroundImages: backgroundImages.reducer,
        // weather: weather.reducer,
        // quote: quoteReducer,
        // tasks: tasksReducer,
        // error: errorReducer,
    }
});

export default store;