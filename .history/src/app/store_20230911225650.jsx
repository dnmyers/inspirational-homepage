import {
    configureStore
} from '@reduxjs/toolkit';

import { backgroundImages } from '../features/backgroundImages/backgroundImagesSlice';

const store = configureStore({
    reducer: {
        backgroundImages: backgroundImages.reducer,
        // weather: weatherReducer,
        // quote: quoteReducer,
        // tasks: tasksReducer,
        // error: errorReducer,
    }
});

export default store;