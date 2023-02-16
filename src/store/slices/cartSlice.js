import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items =[];
        },
        removeOneItem:(state,action)=>{
            state.items.filter((item)=>(
                item.id !== action.payload.id
            ))
        }
    }
});
export const {addItem,clearCart,removeOneItem} = cartSlice.actions
export default cartSlice.reducer;