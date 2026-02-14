import {configureStore} from '@reduxjs/toolkit';
import cardReducer from './cardSlice.jsx';

const appstore = configureStore({

    reducer:{
        card:cardReducer,
    }
  
});
export default appstore; 
