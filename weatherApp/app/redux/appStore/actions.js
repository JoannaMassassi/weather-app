import {
    INITIALIZE
  } from "./keys";
  
 
  export function onInitialStore(data) {
    return {
      type: INITIALIZE,
      data:data,
    };
  }
  