import {
    INITIALIZE
  } from "./keys";
  
  const initialState = {
    storeInitialized: false
  };
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case INITIALIZE:{
        return {
          ...state,
          storeInitialized : action.data
        }
      } 
      default:
        return state;
    }
  }
  