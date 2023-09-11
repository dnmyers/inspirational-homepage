import {
    configureStore
} from '@reduxjs/toolkit';

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