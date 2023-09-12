import {
    configureStore
} from '@reduxjs/toolkit';

import { backgroundImages } from '../features/backgroundImages/backgroundImagesSlice.jsx';

const store = configureStore({
    reducer: {
        // backgroundImage: backgroundImageReducer,
        // weather: weatherReducer,
        // quote: quoteReducer,
        // tasks: tasksReducer,
        // error: errorReducer,
    }
});

export default store;