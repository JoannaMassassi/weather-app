
import React from 'react';
import {
} from 'react-native';

import { Provider } from "react-redux";
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import Router from "./routes";




const Index = () => {

    return (
        <>
        <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <Router/>
        </PersistGate>
      </Provider>
    </>
    )
 }

 export default Index;