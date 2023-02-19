import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity += 1

            if (!existingItem) {
                state.cartItems = state.cartItems.concat({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity += 1
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ), 0)

        },


            removeItem: (state, action) => {
                const id = action.payload
                const existingItem = state.cartItems.find(item => item.id === id)
                state.totalQuantity -= 1;

                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id)
                } else {
                    existingItem.quantity -= 1;
                    existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
                }

                state.totalAmount = state.cartItems.reduce((total, item) => (
                    total + Number(item.price) * Number(item.quantity)
                ), 0)

            },

                deleteItem : (state, action) => {
                    const id = action.payload
                    const existingItem = state.cartItems.find(item => item.id === id)

                    if (existingItem) {
                        state.cartItems = state.cartItems.filter(item => item.id !== id)
                        state.totalQuantity -= existingItem.quantity
                    }

                    state.totalAmount = state.cartItems.reduce((total, item) => (
                        total + Number(item.price) * Number(item.quantity)
                    ), 0)

                }
        }
    })

export const { addItem, removeItem, deleteItem } = cartSlice.actions
export const cartItem = (state) => state.cart.cartItems
export const totalAmount = (state) => state.cart.totalAmount
export const totalQuantity = (state) => state.cart.totalQuantity
export default cartSlice.reducer