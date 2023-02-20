
// createSlice is used here to create a cartSlice reducer, 
// which will manage the state of the cart and the items inside it
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',   // name for the slice
    initialState:{
        items:[]       // initial state is an empty array
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);  // adding item to the cart
        },
        clearCart:(state)=>{
            state.items =[];   // clearing the cart by setting its items to empty array
        },
        removeOneItem:(state,action)=>{ // removing one item from the cart based on its Id
           state.items = state.items.filter((item)=>( 
                item.id !== action.payload
            ))
        },
        increaseQuantity:(state,action)=>{

        },
        decreaseQuantity:(state,action)=>{

        }
    }
});
export const {addItem,clearCart,removeOneItem} = cartSlice.actions
export default cartSlice.reducer;

