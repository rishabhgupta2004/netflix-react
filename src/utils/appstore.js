import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userslice"
import moviesReducer from "./movieslice"
const  appStore =configureStore({
    reducer:{
        user:userreducer,
        movies:moviesReducer,
    }
})
export default appStore;