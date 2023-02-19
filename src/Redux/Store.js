
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Shopping-cart/cartSlice";
import CartUISlice from "./Shopping-cart/CartUISlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        cartUi: CartUISlice
    }
})

export default store