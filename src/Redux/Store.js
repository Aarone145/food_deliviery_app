
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Shopping-cart/cartSlice";
import CartUISlice from "./Shopping-cart/CartUISlice";
import ProfileSlice from "./Toggle/ProfileToggle"

const store = configureStore({
    reducer: {
        cart: cartSlice,
        cartUi: CartUISlice,
        profileUI: ProfileSlice
    }
})

export default store