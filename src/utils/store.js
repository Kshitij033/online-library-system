import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice"

const store = configureStore({
    reducer: {
        booksCollection: bookReducer
    }
})

export default store