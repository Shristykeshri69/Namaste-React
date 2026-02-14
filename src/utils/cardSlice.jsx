
import {createSlice} from '@reduxjs/toolkit';
const cardSlice = createSlice({
  name: "card",
  initialState: {
    items:[],

},
reducers:{
    addItem:(state,action)=>{

        // vanilla(older) Redux => Don't mutate state 
        // const newState = {...state};
        // newState.items.push(action.payload);
        // return newState;

        // Redux Toolkit => Can mutate state directly

        state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
        // state.items.pop();
        state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    clearCart:(state)=>{
        // state.items.length=0;
        state.items = [];
    }
  },
});
export const {addItem,removeItem,clearCart}=cardSlice.actions;
export default cardSlice.reducer;