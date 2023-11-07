import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice.js";
import gptSlice from "./gptSlice.js";
import configSlice from "./configSlice.js";
const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:gptSlice,
        config:configSlice



    },
}
)
export default appStore