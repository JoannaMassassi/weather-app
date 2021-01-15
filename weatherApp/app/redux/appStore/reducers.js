import { INITIALIZE, RECEIVED_WEATHERS } from './keys';

const initialState = {
  storeInitialized: false,
  weathers: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE: {
      return {
        ...state,
        storeInitialized: action.data,
      };
    }
    case RECEIVED_WEATHERS: {
      return {
        ...state,
        weathers: action.data,
      };
    }
    default:
      return state;
  }
}
