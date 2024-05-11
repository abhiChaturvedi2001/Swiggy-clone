import { createSlice } from '@reduxjs/toolkit'

const DatasSlice = createSlice({
    name: "DataSlice",
    initialState: {
        menuData: [],
        restaurantInfoData: [],
        nonVegData: []
    },
    reducers: {
        addMenuData: (state, action) => {
            state.menuData = action.payload
        },
        addRestaurantInfoData: (state, action) => {
            state.restaurantInfoData = action.payload
        },
        addNonVegData: (state, action) => {
            state.nonVegData = action.payload
        }
    }
});

export const { addMenuData, addRestaurantInfoData, addNonVegData } = DatasSlice.actions

export default DatasSlice.reducer