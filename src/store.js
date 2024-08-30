import {configureStore} from "@reduxjs/toolkit"
import moviesReducer from './Features/movieSlice'
import heroMovieReducer from './Features/heroMovieSlice'
import featuredVdeoReducer from './Features/featuredVideosSlice'
import celebritiesReducer from './Features/celebritiesSlice'
import upcomingMoviesReducer from './Features/trailerSlice'
import entertainmentReducer from './Features/entertainmentSlice'


const store=configureStore({
    reducer:{
        movies:moviesReducer,
        heroMovie:heroMovieReducer,
        featuredVideos:featuredVdeoReducer,
        celebrities:celebritiesReducer,
        upcomingMovies:upcomingMoviesReducer,
        entertainment:entertainmentReducer,
    }
})

export default store