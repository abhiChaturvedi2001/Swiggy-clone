import { createSlice } from "@reduxjs/toolkit";

export const ToggleSlices = createSlice({
    name: "ToggleSlices",
    initialState: {
        navbarValue: false,
        sideBarValue: false
    },
    reducers: {
        handleToggle: (state) => {
            state.navbarValue = !state.navbarValue
        },
        handleSingInToggle: (state, action) => {
            const id = action.payload
            if (id === 5) {
                state.sideBarValue = true;
            }
        },
        handleCrossToggle: (state) => {
            state.sideBarValue = false
        }
    }
})

export const { handleToggle, handleSingInToggle, handleCrossToggle } = ToggleSlices.actions
export default ToggleSlices.reducer