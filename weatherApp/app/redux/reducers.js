import { combineReducers } from "redux";
import appReducer from "./appStore/reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";


let mainReducer = combineReducers({
  app: appReducer
});

const rootReducer = (state, action) => {

  return mainReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

export default persistReducer(persistConfig, rootReducer);