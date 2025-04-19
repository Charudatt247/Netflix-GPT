import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        addNowPlayingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.UpComingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies } = movieSlice.actions;
export default movieSlice.reducer;