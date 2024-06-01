import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./productSlice";

const searchStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default searchStore