
import { createSlice } from "@reduxjs/toolkit";

const CartUISlice = createSlice({
    name: 'cartUi',
    initialState: {
        cartVisibility: false
    },
    reducers: {
        cartToggle : (state) => {
            state.cartVisibility = !state.cartVisibility
        }
    }
})

export const { cartToggle } = CartUISlice.actions
export const toggleState = (state) => state.cartUi.cartVisibility
export default CartUISlice.reducer