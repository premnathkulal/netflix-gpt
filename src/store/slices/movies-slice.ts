import { createSlice } from '@reduxjs/toolkit';

export interface Movies {
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
}

export interface VideosData {
    id: string;
    key: string;
    type: string;
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trilerVideo: { id: null, key: null, type: null },
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
    },
    reducers: {
        addNowPLayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trilerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
    },
});

export const {
    addNowPLayingMovies,
    addTrailerVideo,
    addPopularMovies,
    addUpComingMovies,
    addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
