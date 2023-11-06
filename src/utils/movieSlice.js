import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        TrendingMovies:null,
        PopularMovies:null,
        UpcomingMovies:null,
        HorrorMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        
        },
        addTrendingMovies:(state,action)=>{
            state.TrendingMovies=action.payload
        },

        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload
        
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        
        } ,
        addHorrorMovies:(state,action)=>{
            state.HorrorMovies=action.payload
        
        } 

    }
    

})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addHorrorMovies,addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer