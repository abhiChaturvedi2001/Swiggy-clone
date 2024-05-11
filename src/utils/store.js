import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import DatasSlice from "./DatasSlice";


export const store = configureStore({
    reducer: {
        toggle: ToggleSlice,
        datas: DatasSlice
    }
})