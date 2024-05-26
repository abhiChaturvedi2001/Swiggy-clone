import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const DatasSlice = createSlice({
    name: "DataSlice",
    initialState: {
        menuData: [],
        restaurantInfoData: [],
        nonVegData: [],
        cartData: [],
        quantity: 1,
        itemsTotal: 0
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
        },
        addCartData: (state, action) => {
            const newData = action.payload
            const itemsExist = state.cartData.find((items) => items.id === newData.id)

            if (itemsExist) {
                toast("items already exist in the cart", {
                    position: 'top-center',
                    type: "error",
                    autoClose: 3000,
                    theme: "dark",
                })
                return;
            }
            else {
                toast(" Hurray ! items added to the cart ", {
                    position: 'top-center',
                    type: "success",
                    autoClose: 3000,
                    theme: "dark",
                })
                state.cartData = [{ ...newData, quantity: state.quantity, totalAmount: newData.price / 100 || newData.defaultPrice / 100 }, ...state.cartData]
            }
            console.log(state.cartData)
        },
        addIncreaseQty: (state, action) => {
            const id = action.payload
            state.cartData.find((items) => {
                if (items.id === id) {
                    items.totalAmount += items.price / 100 || items.defaultPrice / 100
                    items.quantity += 1
                }
            })
            state.itemsTotal += state.cartData.reduce((accum, currentElem) => {
                return accum + currentElem.price / 100 || accum + currentElem.defaultPrice / 100
            }, 0)
        },
        decreaseQty: (state, action) => {
            const id = action.payload
            state.cartData.find((items) => {
                if (items.id === id) {
                    if (items.quantity > 1) {
                        items.totalAmount -= items.price / 100 || items.defaultPrice / 100
                        items.quantity -= 1
                    }
                }
            })
        }
    }
});

export const { addMenuData, addRestaurantInfoData, addNonVegData, addCartData, addIncreaseQty, decreaseQty } = DatasSlice.actions

export default DatasSlice.reducer