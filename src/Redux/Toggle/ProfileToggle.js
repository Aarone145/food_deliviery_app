import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: 'profileUI',
    initialState: {
        profileVisibility: false
    },
    reducers: {
        profileToggle : (state) => {
            state.profileVisibility = !state.profileVisibility
        }
    }
})

export const { profileToggle } = ProfileSlice.actions
export const toggleProfileState = (state) => state.profileUI.profileVisibility
export default ProfileSlice.reducer