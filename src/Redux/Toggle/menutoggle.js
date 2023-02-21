
import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: 'menuUI',
    initialState: {
        menuVisibility: false
    },
    reducers: {
        menuToggle : (state) => {
            state.menuVisibility = !state.menuVisibility
        }
    }
})

export const { menuToggle } = MenuSlice.actions
export const toggleState = (state) => state.menuUI.menuVisibility
export default MenuSlice.reducer