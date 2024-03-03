import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user-slice';
import moviesReducers from './slices/movies-slice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducers,
    },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
