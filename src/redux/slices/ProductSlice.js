import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: { cart: [], cartItems: 0},
    reducers: {
        addItemToCart : (state, action) => {
            console.log("pay", action.payload);
            let itemAlready = -1;
            if(state.cart.length > 0)
                itemAlready  = state.cart.findIndex( item => item.id === action.payload.id);
            console.log("itemAlready",itemAlready);
            if(itemAlready >= 0)
                state.cart[itemAlready].quantity = state.cart[itemAlready].quantity + 1;
            else
                state.cart.push(action.payload);
            state.cartItems += 1;
        }
    }
})

export const {addItemToCart} = productSlice.actions;
export default productSlice.reducer;