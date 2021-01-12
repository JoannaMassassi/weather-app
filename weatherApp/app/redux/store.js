import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { persistStore } from "redux-persist";

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export let persistor = persistStore(store);